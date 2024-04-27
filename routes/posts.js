import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

const routes = async (req, res) => {
  const { url, method } = req;
  if (url === '/posts' && method === 'GET') {
    getPosts(req, res);
  } else if (url === '/posts' && method === 'POST') {
    createPost(req, res);
  } else if (url === '/posts/:id' && method === 'PATCH') {
    updatePost(req, res);
  } else if (url === '/posts/:id' && method === 'DELETE') {
    deletePost(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
}
export default routes;