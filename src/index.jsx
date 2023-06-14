import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material';

import App from './App';

import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette: {
    primary: {
      main: '#08005c',
      softHoverBg: '#1b5e20',
      gradient: 'linear-gradient(45deg, #08005c 30%, #e91e63 90%)',
    },

    secondary: {
      main: '#e91e63',
    },
  },
  typography: {
    poster: {
      fontSize: '4rem',
      color: '#1a237e',
      component: 'span',
      flexGrow: 0.5,
    },
  },

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

ReactDOM.render(
  <h1>Hello world</h1>,
  document.getElementById('root'),
);
