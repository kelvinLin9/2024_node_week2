import { getPosts, createPost, updatePost, deletePost, deleteAllPost } from '../controllers/posts.js';

const routes = async (req, res) => {
  const { url, method } = req;
  console.log(url, method, url === '/posts/:id');
  if (url === '/posts' && method === 'GET') {
    getPosts(req, res);
  } else if (url === '/posts' && method === 'POST') {
    createPost(req, res);
  } else if (url.startsWith('/posts/') && method === 'PATCH') {
    console.log("進入patch");
    updatePost(req, res);
  } else if (url.startsWith('/posts/') && method === 'DELETE') {
    deletePost(req, res);
  } else if (url === '/posts' && method === 'DELETE') {
    deleteAllPost(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
}
export default routes;