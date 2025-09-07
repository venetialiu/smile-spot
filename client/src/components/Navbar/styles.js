import { styled } from '@mui/material/styles';
import { AppBar, Typography, Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

// AppBar with rounded corners and flex layout
export const StyledAppBar = styled(AppBar)({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 50px',
});

// Heading text (Typography)
export const Heading = styled(Typography)({
  color: 'rgba(0,183,255, 1)',
  textDecoration: 'none',
});

// Brand logo image
export const Image = styled('img')({
  marginLeft: '15px',
});

// Toolbar container
export const Toolbar = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '400px',
});

// Profile section
export const Profile = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '400px',
});

// Username text
export const UserName = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
});

// Brand container
export const BrandContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

// Purple Avatar with theme contrast
export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
}));
