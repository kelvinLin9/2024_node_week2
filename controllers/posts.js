import mongoose from 'mongoose';
import PostModel from '../models/post.js';
import { sendJson, sendText, parseBody } from '../services/httpUtils.js';

export const getPosts = async (req, res) => {
  const id = req.url.split('/')[2];
  console.log(req.url.split('/'));
    try {
        const posts = await PostModel.find();
        sendJson(res, 200, posts);
    } catch (error) {
        sendJson(res, 400, { message: error.message });
    }
};

export const createPost = async (req, res) => {
    try {
        const post = await parseBody(req);
        const newPost = new PostModel(post);
        await newPost.save();
        sendJson(res, 201, newPost);
    } catch (error) {
        sendJson(res, 400, { message: error.message });
    }
};

export const updatePost = async (req, res) => {
    const id = req.url.split('/')[2];
    console.log(id);
    try {
        const post = await parseBody(req);
        if (!mongoose.Types.ObjectId.isValid(id)) {
            sendText(res, 404, 'No post with that id');
            return;
        }
        const updatedPost = await PostModel.findByIdAndUpdate(id, post, { new: true });
        sendJson(res, 200, updatedPost);
    } catch (error) {
        sendJson(res, 400, { message: error.message });
    }
};

export const deletePost = async (req, res) => {
    const id = req.url.split('/')[2];
    if (!mongoose.Types.ObjectId.isValid(id)) {
        sendText(res, 404, 'No post with that id');
        return;
    }
    await PostModel.findByIdAndDelete(id);
    sendJson(res, 200, { message: 'Post deleted successfully' });
};

export const deleteAllPost = async (req, res) => {
  try {
    const result = await PostModel.deleteMany({});
    sendJson(res, 200, { 
      message: 'All posts deleted successfully',
      deletedCount: result.deletedCount 
    });
  } catch (error) {
    sendJson(res, 500, { message: error.message });
  }
}