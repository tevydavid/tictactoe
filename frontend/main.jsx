var React = require('react'),
    ReactDOM = require('react-dom');

var Game = require('./game');

var MainComponent = React.createClass({

  render: function () {
    return(
      <div> In the main component
      
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MainComponent />, document.getElementById('main'));
});
