import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const MainContainer = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
});

export const SmMargin = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const ActionDiv = styled('div')({
  textAlign: 'center',
});