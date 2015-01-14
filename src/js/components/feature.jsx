var React = require('react');

var Feature = React.createClass({

	render: function() {
		return (
			<div className="col-md-4">
	          <h4>Heading</h4>
	          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
	          <p><a className="btn btn-primary" href="#" role="button">View details &raquo;</a></p>
	        </div>
		);
	}

});

module.exports = Feature;