var React = require('react');
var Feature = require('./feature.jsx');

var FeatureList = React.createClass({

	render: function() {
		return (
			<div className="row">
				<Feature />
				<Feature />
				<Feature />
				<Feature />
				<Feature />
				<Feature />
			</div>
		);
	}

});

module.exports = FeatureList;