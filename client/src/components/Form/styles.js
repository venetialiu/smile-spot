// styles.js
import { styled } from '@mui/material/styles';
import { Paper, TextField, Button } from '@mui/material';

export const Root = styled('form')(({ theme }) => ({
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const FormContainer = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export const FileInput = styled('input')({
  width: '97%',
  margin: '10px 0',
});

export const SubmitButton = styled(Button)({
  marginBottom: 10,
});
