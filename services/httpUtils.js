// httpUtils.js
export const sendJson = (res, status, content) => {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(content));
};

export const sendText = (res, status, text) => {
  res.writeHead(status, { 'Content-Type': 'text/plain' });
  res.end(text);
};

export const parseBody = (req) => new Promise((resolve, reject) => {
  let body = '';
  req.on('data', chunk => {
      body += chunk.toString();
  });
  req.on('end', () => {
      try {
          resolve(JSON.parse(body));
      } catch (e) {
          reject(e);
      }
  });
});
