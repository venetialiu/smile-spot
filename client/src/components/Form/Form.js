import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../actions/posts';

// Get the current ID of the post we're on

const Form = ({currentId, setCurrentId}) => {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  // fetch updated post from redux 
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const dispatch = useDispatch();
  
  // get user state
  const user = useSelector((state) => state.auth.authData);

  useEffect(() => {
    if(post) setPostData(post)
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId) {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  // if user not logged in -> show a card saying that user cannot create post
  if (!user?.result?.name){
    return (
       <Paper sx={{ p: 2 }}>
        <Typography variant="h6" align="center" sx={{ mb: 2 }}>
          Sign in to start smilespotting :)
        </Typography>
       </Paper>
    )
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box component="form" autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {currentId ? 'Editing' : 'Creating'} a smilespotting
        </Typography>
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          sx={{ mb: 2 }}
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          fullWidth
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          sx={{ mb: 2 }}
        />
        <TextField
          name="tags"
          label="Tags"
          variant="outlined"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
          sx={{ mb: 2 }}
        />

        <Box sx={{ my: 2 }}>
          <Button variant="outlined" component="label">
            Upload Image
            <input
              hidden
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files && e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onloadend = () => {
                  // reader.result is a Data URL (base64)
                  setPostData((prev) => ({ ...prev, selectedFile: reader.result }));
                };
                reader.readAsDataURL(file);
            }}
            />
            </Button>
            {postData.selectedFile && (
            <Box sx={{ mt: 1 }}>
              <img
                src={postData.selectedFile}
                alt="preview"
                style={{ maxWidth: '100%', borderRadius: 8 }}
              />
            </Box>
          )}
        </Box>

        <Button variant="contained" color="primary" size="large" type="submit" fullWidth sx={{ mb: 1 }}>
          Submit
        </Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
          Clear
        </Button>
      </Box>
    </Paper>
  );
};

export default Form;
