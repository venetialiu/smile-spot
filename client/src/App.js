import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import necessary functions

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

// Define your theme (ensure secondary is properly defined)
const theme = createTheme({
  palette: {
    secondary: {
      main: '#f50057', // You can adjust this color to your preference
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}> {/* Wrap your app with ThemeProvider */}
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
