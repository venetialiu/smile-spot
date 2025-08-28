import { styled } from '@mui/material/styles';
import { AppBar, Typography, Grid } from '@mui/material';

export const StyledAppBar = styled(AppBar)({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Heading = styled(Typography)({
  color: 'rgba(0,0,0)',
});

export const Image = styled('img')({
  marginLeft: '15px',
});

export const MainContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
  },
}));