import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Dishes from './components/pages/Dishes';

import OrderState from './context/order/OrderState';
import './App.css';

const App = () => {
  return (
    <OrderState>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/dishes' component={Dishes} />
          </Switch>
        </Fragment>
      </Router>
    </OrderState>
  );
};

export default App;
