import express from 'express';

// import getPosts
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

const router = express.Router();

// call getPosts
router.get('/', getPosts);
// call createPost
router.post('/', createPost);
// call updatePost
router.patch('/:id', updatePost);
// call deletePost
router.delete('/:id', deletePost);
// call likePost
router.patch('/:id/likePost', likePost);



export default router;  