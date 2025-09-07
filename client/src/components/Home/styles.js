import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const MainContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
  },
}));
