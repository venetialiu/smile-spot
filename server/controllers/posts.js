import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

// getPosts
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);

    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// createPost
export const createPost = async (req, res) => {
    // store req in a const
    const post = req.body;

    // create new post
    const newPost = new PostMessage(post);

    try {
        // save post
        await newPost.save();
        // respond
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({message: error.message});
        
    }
};

// update post
export const updatePost = async (req, res) => {
    const { id:_id } = req.params;
    const post = req.body;

    if(! mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).send('No post with that id.');
    };

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});

    res.json(updatedPost);

};

// delete post
export const deletePost = async (req, res) => {
    const { id:_id } = req.params;

    if(! mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(400).send('No post with that id.');
    }

    try{
        await PostMessage.findByIdAndDelete(_id);
        res.json( {message: 'Post deleted successfully.'} )

    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(409).json({message: error.message});
    }

}

// add 1 like to post
export const likePost = async (req, res) => {
    const { id } = req.params;

    if(! mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send('No post with that id.');
    }

    try {
        const post = await PostMessage.findById(id);
        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount : post.likeCount + 1}, {new: true} );
        res.json(updatedPost);
        
    } catch (error) {
        res.status(409).json({message: error.message});
    }
    
}