/** @jsx React.DOM */

var React = require('react');

var Hello = React.createClass({

  render: function() {
    return (
      <div>Hello <strong>{this.props.message}</strong></div>
    );
  }

});

module.exports = Hello;
