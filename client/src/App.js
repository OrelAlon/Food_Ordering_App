import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './components/pages/Login';
import About from './components/pages/About';
import Signup from './components/pages/Signup';
import Dishes from './components/pages/Dishes';
import Payment from './components/pages/Payment';
import OrderSent from './components/pages/OrderSent';
import Test from './components/pages/Test';

import OrderState from './context/order/OrderState';
// import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    // <AuthState>
    <OrderState>
      <Router>
        <Fragment>
          <Navbar />

          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/about' component={About} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/dishes' component={Dishes} />
            <Route exact path='/payment' component={Payment} />
            <Route exact path='/ordersent' component={OrderSent} />
            <Route exact path='/test' component={Test} />
          </Switch>
        </Fragment>
      </Router>
    </OrderState>
  );
};

export default App;
