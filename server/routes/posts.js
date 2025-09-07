import express from 'express';

// import controllers
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

// import middleware
import auth from '../middleware/auth.js';

const router = express.Router();

// call getPosts
router.get('/', getPosts);
// call createPost
router.post('/', auth, createPost);
// call updatePost
router.patch('/:id', auth, updatePost);
// call deletePost
router.delete('/:id', auth, deletePost);
// call likePost
router.patch('/:id/likePost', auth, likePost);



export default router;  