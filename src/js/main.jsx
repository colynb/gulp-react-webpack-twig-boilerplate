/** @jsx React.DOM */

var React = require('react');
var FeatureList = require('./components/feature-list.jsx');
var LoginForm = require('./components/LoginForm.jsx');

React.renderComponent(
  <FeatureList />,
  document.getElementById('features')
);

React.renderComponent(
  <LoginForm />,
  document.getElementById('loginForm')
);

