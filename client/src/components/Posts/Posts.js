import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  if (!posts || posts.length === 0) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={3} alignItems="stretch">
      {posts.map((post) => (
        <Grid key={post._id} size={{ xs: 12, sm: 6 }}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
