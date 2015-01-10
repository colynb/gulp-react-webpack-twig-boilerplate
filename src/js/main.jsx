/** @jsx React.DOM */

var React = require('react'),
    FeatureList = require('./components/feature-list.jsx');

React.renderComponent(
  <FeatureList />,
  document.getElementById('features')
);
