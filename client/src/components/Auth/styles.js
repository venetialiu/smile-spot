import { styled } from '@mui/system';
import { Paper, Avatar, Button, Grid, TextField } from '@mui/material';

export const PaperStyled = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

export const FormStyled = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
}));

export const SubmitButtonStyled = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

export const GridStyled = styled(Grid)(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
}));

export const InputStyled = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const GoogleButtonStyled = styled(Button)(({ theme }) => ({
    margin: theme.spacing(3, 0, 2),
}));
