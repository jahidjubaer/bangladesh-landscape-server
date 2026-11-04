// Blocks NoSQL operator injection: a JSON body like {"phone": {"$ne": null}}
// would otherwise reach Mongo filters as an operator. Removes any key that
// starts with "$" or contains "." anywhere in req.body. (req.query uses
// Express 5's simple parser, which never builds nested objects.)
function clean(value, depth = 0) {
  if (depth > 20 || value === null || typeof value !== 'object') return value;
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i += 1) value[i] = clean(value[i], depth + 1);
    return value;
  }
  for (const key of Object.keys(value)) {
    if (key.startsWith('$') || key.includes('.')) delete value[key];
    else value[key] = clean(value[key], depth + 1);
  }
  return value;
}

export function sanitizeBody(req, _res, next) {
  if (req.body && typeof req.body === 'object') clean(req.body);
  next();
}

export const escapeRegex = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
