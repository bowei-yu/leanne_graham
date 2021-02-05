import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

// Components
import Navbar from './components/Navbar';

//Pages
import home from './pages/home';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#78909c',
      main: '#37474f',
      dark: '#263238',
      contrastText: '#eceff1',
    }
  },
  typography: {
    useNextVariants: true,
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
      <Router>
      <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={home}/>
          </Switch>
        </div>
      </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
