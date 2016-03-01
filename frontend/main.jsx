var React = require('react'),
    ReactDOM = require('react-dom');

var Game = require('./game');

var MainComponent = React.createClass({
  getInitialState: function(){
    return({games: [<Game/>]})
  },

  addGame: function(){
    var games = this.state.games;
    games.push(<Game/>);
    this.setState({games: games});
  },
  
  render: function () {
    return(
      <div>
        {this.state.games}
        <button onClick={this.addGame}>Add Game</button>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MainComponent />, document.getElementById('main'));
});
