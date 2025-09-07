import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

import {
  StyledAppBar,
  Heading,
  Image,
  Toolbar,
  Profile,
  UserName,
  BrandContainer,
  StyledAvatar
} from './styles';
import memories from '../../images/memories.png';
import { Button } from '@mui/material';

const Navbar = () => {

  //  filled with a real user object 
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    // check if JWT token is expired
    // if token exists, decode it
    if (token) {
      const decodedToken = jwtDecode(token);
      // then check if token is expired
      if (decodedToken.exp * 1000 < new Date().getTime()){
        // if expired -> logout
        logout();
      }
    };

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <StyledAppBar position="static" color="inherit">
      <BrandContainer>
        <Heading component={Link} to="/" variant="h2" align="center">
          SmileSpotting {user ? `˶ᵔ ᵕ ᵔ˶` : ` ˙ ᵕ ˙ `}
        </Heading>
        {/* <Image src={memories} alt="memories" height="60" /> */}
      </BrandContainer>

      <Toolbar>
        {user?.result ? (
          <Profile>
            <StyledAvatar alt={user.result.name} src={user.result.picture}>
              {user.result.name.charAt(0)}
            </StyledAvatar>
            <UserName variant="h6">{user.result.name}</UserName>
            <Button variant="contained" color="secondary" onClick={logout}>
              Logout
            </Button>
          </Profile>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">
            Sign In
          </Button>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
