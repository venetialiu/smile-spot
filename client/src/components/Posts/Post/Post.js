// src/components/Posts/Post/Post.js
import React, { useEffect } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  CardHeader,
} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia
        component="img"
        src={post?.selectedFile}
        alt={post?.title || 'post image'}
      /> 

      <Box sx={{ position: 'absolute', top: 8, left: 8, color: 'white' }}>
        <Typography variant="h6">{post?.creator}</Typography>
        <Typography variant="body2">{post?.createdAt ? moment(post.createdAt).fromNow() : ''}</Typography>
      </Box>

      <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
        <Button 
            size="small" 
            onClick={() => setCurrentId(post._id)} 
            sx={{ color: 'white' }}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ px: 2, pt: 1 }}>
        {Array.isArray(post?.tags) ? post.tags.map((t) => `#${t} `) : post?.tags}
      </Typography>
      <CardHeader
        title = {
          <Typography variant="h5">
              {post?.title}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post?.message}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;Like&nbsp;{post?.likeCount ?? 0}
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" />
          &nbsp;Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
