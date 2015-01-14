/** @jsx React.DOM */

var React = require('react');

var EmailInput = React.createClass({

	render: function() {
		return (
			<input type="text" placeholder="Email" className="form-control" ref="emailInput" />
		);
	}

});

module.exports = EmailInput;