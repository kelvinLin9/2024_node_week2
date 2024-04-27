import postController from '../controllers/posts.js';

const routes = async (req, res) => {
  const { url, method } = req;
  if (url === '/posts' && method === 'GET') {
    postController.getPosts(req, res);
  } else if (url === '/posts' && method === 'POST') {
    postController.createPost(req, res);
  } else if (url === '/posts/:id' && method === 'PATCH') {
    postController.updatePost(req, res);
  } else if (url === '/posts/:id' && method === 'DELETE') {
    postController.deletePost(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
}
export default routes;