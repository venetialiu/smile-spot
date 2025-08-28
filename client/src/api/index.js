import axios from 'axios';

const url = 'http://localhost:4000/posts';

// fetch post form backend
export const fetchPosts = () => axios.get(url);

// send new post to backend
export const createPost = (newPost) => axios.post(url, newPost);

// update post
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

// delete post
export const deletePost = (id) => axios.delete(`${url}/${id}`);

// update likeCount
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);