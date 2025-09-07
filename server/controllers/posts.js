import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';
import e from 'express';

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

    // check if user is authenticated
    if(!req.userId){
        return res.status(401).json({message: "User Unauthenticated."})
    }

    // create new post & update creator to specific user & updated created time
    const newPost = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() });

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

    // check if user is authenticated

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

// like or unlike post
export const likePost = async (req, res) => {
    // post id
    const { id } = req.params;

    // check if user is authenticated
    if(!req.userId) {
        return res.status(401).json({message: "User Unauthenticated."})
    }

    if(! mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send('No post with that id.');
    }

    try {
        const post = await PostMessage.findById(id);

        // check if user id in likes (user has already liked the post)
        const index = post.likes.findIndex((id) => id === String(req.userId));

        // if user has not liked the post -> like
        if(index === -1){
            post.likes.push(req.userId);
        }else{
             // if use has liked the post -> unlike
             post.likes = post.likes.filter((id) => id !== String(req.userId));
        }
    
        const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true} );
        res.json(updatedPost);
        
    } catch (error) {
        res.status(409).json({message: error.message});
    }
    
}