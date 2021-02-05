import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';

//Pages
import home from './pages/home';

function App() {
  return (
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
  );
}

export default App;
