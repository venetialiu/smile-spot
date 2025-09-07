import axios from 'axios';

// base URL
const API = axios.create({ baseURL: 'https://smile-spot.onrender.com'});

// testing:
// const API = axios.create({ baseURL: 'http://localhost:3000'});

// runs before every api function runs
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

// fetch post form backend
export const fetchPosts = () => API.get('/posts');

// send new post to backend
export const createPost = (newPost) => API.post('/posts', newPost);

// update post
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

// delete post
export const deletePost = (id) => API.delete(`/posts/${id}`);

// update likeCount
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// sign in user
export const signIn = (formData) => API.post(`/users/signin`, formData);

// sign up user
export const signUp = (formData) => API.post(`/users/signup`, formData);