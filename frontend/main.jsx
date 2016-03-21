var React = require('react'),
    ReactDOM = require('react-dom');

var Game = require('./game'),
    Footer = require('./footer');

var MainComponent = React.createClass({
  getInitialState: function(){
    return({numGames: 1});
  },

  addGame: function(){
    this.setState({numGames: this.state.numGames + 1});
  },

  render: function () {
    var games = [];
    for (var i = 0; i < this.state.numGames; i++) {
      games.push(<Game key={i}/>);
    }

    return(
      <div>
        {games}
        <Footer addGame={this.addGame}/>
      </div>
    );
  }
});


ReactDOM.render(<MainComponent />, document.getElementById('main'));
