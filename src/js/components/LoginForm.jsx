/** @jsx React.DOM */

var React = require('react');
var $ = require('jquery');
var Bacon = require('bacon');

var EmailInput = require('./EmailInput.jsx');

var LoginForm = React.createClass({

  doLogin: function(loginInfo) {
    return loginInfo;
  },

  componentDidMount: function() {
    var $buttonInput = $(this.refs.buttonInput.getDOMNode());
    var $emailInput = $(this.refs.emailInput.getDOMNode());
    var $passwordInput = $(this.refs.passwordInput.getDOMNode());
    var buttonStream = $buttonInput.asEventStream("click");
    var emailInputStream = $emailInput.asEventStream("keyup");
    var passwordInputStream = $passwordInput.asEventStream("keyup");
    var passwordEnterStream = passwordInputStream.filter(function(e) {
        return e.keyCode == 13;
      }
    );
    var loginStream = Bacon.mergeAll(buttonStream, emailInputStream, passwordInputStream, passwordEnterStream)
      .map(function(){
        return {
          email: $emailInput.val(),
          password: $passwordInput.val()
        };
      })
      .filter(function(loginInfo){
        return loginInfo.email && loginInfo.password;
      })
      .flatMapLatest(this.doLogin)
      .log();
  },

  render: function() {
    return (
      <form className="navbar-form navbar-right" role="form">
        <div className="form-group">
          <EmailInput ref="emailInput" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" className="form-control" ref="passwordInput" />
        </div>
        <button type="button" className="btn btn-success" ref="buttonInput">Sign in</button>
      </form>
    );
  }

});

module.exports = LoginForm;