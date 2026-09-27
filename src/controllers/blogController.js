import sanitizeHtml from 'sanitize-html';
import Blog from '../models/Blog.js';
import District from '../models/District.js';
import AppError from '../utils/AppError.js';
import { notify } from '../services/notifyService.js';

const SANITIZE_OPTS = {
  allowedTags: [
    'p', 'br', 'strong', 'em', 'u', 's', 'blockquote', 'h2', 'h3', 'ul', 'ol', 'li', 'a', 'img',
  ],
  allowedAttributes: {
    a: ['href', 'target', 'rel'],
    img: ['src', 'alt'],
    // Quill 2 markup: bullets are <ol><li data-list="bullet">, alignment/indent via classes
    li: ['data-list', 'class'],
    p: ['class'],
    h2: ['class'],
    h3: ['class'],
  },
  allowedClasses: {
    p: ['ql-align-center', 'ql-align-right', 'ql-align-justify', 'ql-indent-1', 'ql-indent-2', 'ql-indent-3'],
    h2: ['ql-align-center', 'ql-align-right', 'ql-align-justify'],
    h3: ['ql-align-center', 'ql-align-right', 'ql-align-justify'],
    li: ['ql-align-center', 'ql-align-right', 'ql-align-justify', 'ql-indent-1', 'ql-indent-2', 'ql-indent-3'],
  },
  allowedSchemes: ['http', 'https'],
  transformTags: {
    a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer', target: '_blank' }),
  },
};

function toExcerpt(html) {
  return sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} }).replace(/\s+/g, ' ').trim().slice(0, 220);
}

function validateSubmission(body) {
  const title = body.title?.bn?.trim();
  const rawContent = body.content?.bn || '';
  const content = sanitizeHtml(rawContent, SANITIZE_OPTS);
  const plain = toExcerpt(content);
  if (!title || title.length < 5) throw new AppError('Title must be at least 5 characters', 400);
  if (plain.length < 100) throw new AppError('Blog content is too short (minimum ~100 characters)', 400);
  return { title, content, excerpt: plain };
}

// ---------- Public ----------

export async function list(req, res, next) {
  try {
    const filter = { status: 'approved' };
    if (req.query.district) {
      const d = await District.findOne({ slug: req.query.district });
      if (d) filter.district = d._id;
    }
    if (req.query.q) {
      filter.$or = [
        { 'title.bn': { $regex: req.query.q, $options: 'i' } },
        { excerpt: { $regex: req.query.q, $options: 'i' } },
      ];
    }
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = 12;

    const [blogs, total] = await Promise.all([
      Blog.find(filter)
        .populate('author', 'name avatarUrl')
        .populate('district', 'slug name')
        .select('-content -moderationNote -moderatedBy')
        .sort('-publishedAt')
        .skip((page - 1) * limit)
        .limit(limit),
      Blog.countDocuments(filter),
    ]);

    res.json({ success: true, data: { blogs, total, page, pages: Math.ceil(total / limit) } });
  } catch (err) {
    next(err);
  }
}

export async function getBySlug(req, res, next) {
  try {
    const blog = await Blog.findOneAndUpdate(
      { slug: req.params.slug, status: 'approved' },
      { $inc: { views: 1 } },
      { returnDocument: 'after' }
    )
      .populate('author', 'name avatarUrl')
      .populate('district', 'slug name');
    if (!blog) throw new AppError('Blog not found', 404);
    res.json({ success: true, data: { blog } });
  } catch (err) {
    next(err);
  }
}

// ---------- Author ----------

export async function create(req, res, next) {
  try {
    const { title, content, excerpt } = validateSubmission(req.body);

    let district = null;
    if (req.body.districtSlug) {
      district = (await District.findOne({ slug: req.body.districtSlug }))?._id || null;
    }

    const blog = await Blog.create({
      author: req.user._id,
      slug: Blog.makeSlug(req.body.title?.en),
      title: { bn: title, en: req.body.title?.en || '' },
      content: { bn: content },
      excerpt,
      coverImageUrl: req.body.coverImageUrl || '',
      district,
      status: 'pending',
    });

    res.status(201).json({ success: true, message: 'Blog submitted for review', data: { blog } });
  } catch (err) {
    next(err);
  }
}

export async function myBlogs(req, res, next) {
  try {
    const blogs = await Blog.find({ author: req.user._id })
      .populate('district', 'slug name')
      .select('-content')
      .sort('-createdAt');
    res.json({ success: true, data: { blogs } });
  } catch (err) {
    next(err);
  }
}

export async function getMine(req, res, next) {
  try {
    const blog = await Blog.findOne({ _id: req.params.id, author: req.user._id });
    if (!blog) throw new AppError('Blog not found', 404);
    res.json({ success: true, data: { blog } });
  } catch (err) {
    next(err);
  }
}

// Edit own post — re-enters moderation queue
export async function update(req, res, next) {
  try {
    const blog = await Blog.findOne({ _id: req.params.id, author: req.user._id });
    if (!blog) throw new AppError('Blog not found', 404);

    const { title, content, excerpt } = validateSubmission(req.body);
    blog.title.bn = title;
    if (req.body.title?.en !== undefined) blog.title.en = req.body.title.en;
    blog.content.bn = content;
    blog.excerpt = excerpt;
    if (req.body.coverImageUrl !== undefined) blog.coverImageUrl = req.body.coverImageUrl;
    if (req.body.districtSlug !== undefined) {
      blog.district = req.body.districtSlug
        ? (await District.findOne({ slug: req.body.districtSlug }))?._id || null
        : null;
    }
    blog.status = 'pending'; // any edit goes back through moderation
    await blog.save();

    res.json({ success: true, message: 'Blog resubmitted for review', data: { blog } });
  } catch (err) {
    next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const blog = await Blog.findOneAndDelete({ _id: req.params.id, author: req.user._id });
    if (!blog) throw new AppError('Blog not found', 404);
    res.json({ success: true, message: 'Blog deleted' });
  } catch (err) {
    next(err);
  }
}

// ---------- Moderation ----------

export async function moderationList(req, res, next) {
  try {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    const blogs = await Blog.find(filter)
      .populate('author', 'name phone roles verifiedAuthor')
      .populate('district', 'slug name')
      .sort('-createdAt')
      .limit(200);
    res.json({ success: true, data: { blogs } });
  } catch (err) {
    next(err);
  }
}

export async function moderationGet(req, res, next) {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate('author', 'name phone roles verifiedAuthor')
      .populate('district', 'slug name');
    if (!blog) throw new AppError('Blog not found', 404);
    res.json({ success: true, data: { blog } });
  } catch (err) {
    next(err);
  }
}

export async function approveBlog(req, res, next) {
  try {
    const blog = await Blog.findById(req.params.id).populate('author', 'roles verifiedAuthor');
    if (!blog) throw new AppError('Blog not found', 404);
    if (blog.status !== 'pending') throw new AppError('Only pending blogs can be approved', 409);

    blog.status = 'approved';
    blog.moderatedBy = req.user._id;
    blog.moderatedAt = new Date();
    blog.moderationNote = req.body?.note || '';
    blog.publishedAt = blog.publishedAt || new Date();
    // Badge: official/authorized authors
    blog.hasBadge =
      blog.author.roles?.some((r) => ['admin', 'moderator'].includes(r)) || Boolean(blog.author.verifiedAuthor);
    await blog.save();

    await notify(blog.author._id, 'blog-approved', { title: blog.title.bn }, /blog/+blog.slug);

    res.json({ success: true, message: 'Blog approved and published' });
  } catch (err) {
    next(err);
  }
}

export async function rejectBlog(req, res, next) {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) throw new AppError('Blog not found', 404);
    if (blog.status !== 'pending') throw new AppError('Only pending blogs can be rejected', 409);

    blog.status = 'rejected';
    blog.moderatedBy = req.user._id;
    blog.moderatedAt = new Date();
    blog.moderationNote = req.body?.note || '';
    await blog.save();

    await notify(blog.author, 'blog-rejected', { title: blog.title.bn, note: blog.moderationNote }, '/my-blogs');

    res.json({ success: true, message: 'Blog rejected' });
  } catch (err) {
    next(err);
  }
}
