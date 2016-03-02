var React = require('react'),
    ReactDOM = require('react-dom');

var Game = require('./game'),
    Footer = require('./footer');

var MainComponent = React.createClass({
  getInitialState: function(){
    return({games: [<Game key='0' />]});
  },

  addGame: function(){
    var games = this.state.games;
    games.push(<Game key={games.length}/>);
    this.setState({games: games});
  },

  render: function () {
    return(
      <div>
        {this.state.games}
        <Footer addGame={this.addGame}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MainComponent />, document.getElementById('main'));
});
