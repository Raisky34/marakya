import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import * as firebase from 'firebase';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import About from './components/about';
import Header from './components/header';
import Home from './components/home';
import Directions from './components/directions';

var config = {
    apiKey: "AIzaSyAFvHfZ0j5GE_IylgK-MgxUCWx5V9ILArM",
    authDomain: "fir-f30ba.firebaseapp.com",
    databaseURL: "https://fir-f30ba.firebaseio.com",
    storageBucket: "fir-f30ba.appspot.com",
    messagingSenderId: "67694317702"
  };

firebase.initializeApp(config);

render (
  <Router history={browserHistory}>
    <Route path='/' component={Header}>
      <IndexRoute component={Home} />
      <Route path='direction' component={Directions} />
      <Route path='about' component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
);
