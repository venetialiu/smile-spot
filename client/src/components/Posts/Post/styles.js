import { styled } from '@mui/material/styles';
import { Card, CardActions, CardMedia, Typography } from '@mui/material';

// Card wrapper
export const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: 15,
  height: '100%',
  position: 'relative',
});

// Media area
export const StyledMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%', // 16:9 aspect ratio
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
});

// Overlay positions
export const Overlay = styled('div')({
  position: 'absolute',
  top: 20,
  left: 20,
  color: 'white',
});

export const Overlay2 = styled('div')({
  position: 'absolute',
  top: 20,
  right: 20,
  color: 'white',
});

// Details & actions
export const Details = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: 20,
});

export const Title = styled(Typography)({
  padding: '0 16px',
});

export const StyledCardActions = styled(CardActions)({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
});
