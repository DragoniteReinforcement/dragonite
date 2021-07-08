/* eslint-disable arrow-body-style */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';
import Login from './authentication/Login.jsx';
import Signup from './authentication/Signup.jsx';
import './style.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/app" component={MainContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
