import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import theme from './theme';
import Router from './routes';


function App() {
  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>

  );
}

export default App;
