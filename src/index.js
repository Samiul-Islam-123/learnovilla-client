// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AuthProvider } from './Context/AuthContext';

// Define the dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Set the mode to dark
    primary: {
      main: '#90caf9', // Define primary color
    },
    secondary: {
      main: '#f48fb1', // Define secondary color
    },
    // Add more customizations as needed
  },
});

// Render the app with the dark theme
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>

    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);

// Measure performance of the app
reportWebVitals();
