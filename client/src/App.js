import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

import './App.css';
import { Fragment } from 'react';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <header>I'm Working!</header>
        <Swicth>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Swicth>
      </Fragment>
    </Router>
  );
};

export default App;
