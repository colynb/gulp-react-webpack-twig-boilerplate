/** @jsx React.DOM */

var React = require('react'),
    Hello = require('./components/Hello.jsx');

React.renderComponent(
  <Hello message="Main" />,
  document.getElementById('main')
);
