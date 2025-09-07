import React, { useState } from 'react';
import { Button, Typography, Container } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

import Icon from './icon';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  PaperStyled,
  AvatarStyled,
  FormStyled,
  SubmitButtonStyled,
  GridStyled,
  GoogleButtonStyled,
} from './styles';
import Input from './Input';
import { signin, signup } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate))
    }
  };
  
  const handleChange = (e) => {
    setFormData( {...formData, [e.target.name]: e.target.value} );
  };

  const switchMode = () => {
    setIsSignup((prev) => !prev);
    setShowPassword(false);
  };

  const googleSuccess = async (credentialResponse) => {
    const token = credentialResponse?.credential;  // Google gives you a JWT
    const result = jwtDecode(token);               // decode it to get profile info

    try {
        dispatch({ type: 'AUTH', data: { result, token } } );
        navigate('/');
    } catch (error) {
        console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.error("Google Sign In was unsuccessful. Try again later.", error);
  };

  return (
    <Container component="main" maxWidth="xs">
      <PaperStyled elevation={3}>
        <AvatarStyled>
          <LockOutlinedIcon />
        </AvatarStyled>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <FormStyled onSubmit={handleSubmit}>
          <GridStyled container spacing={3} justifyContent="center" alignItems="stretch">
            {isSignup && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type={showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
              />
            )}
          </GridStyled>
          <SubmitButtonStyled type="submit" fullWidth variant="contained" color="primary">
            {isSignup ? 'Sign Up' : 'Sign In'}
          </SubmitButtonStyled>
          <GoogleLogin
            onSuccess={googleSuccess}
            onError={googleFailure}
            useOneTap
            render={(renderProps) => (
              <GoogleButtonStyled
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </GoogleButtonStyled>
            )}
          />
          <GridStyled container justifyContent="flex-end">
            <GridStyled item>
              <Button onClick={switchMode}>
                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
              </Button>
            </GridStyled>
          </GridStyled>
        </FormStyled>
      </PaperStyled>
    </Container>
  );
};

export default Auth;
