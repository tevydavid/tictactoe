var React = require('react')
    Prompt = require('./prompt');

var Game = React.createClass({
  getInitialState: function(){
    return({
      board: ['empty','empty','empty','empty','empty','empty','empty','empty','empty'],
      currentPlayer: 'X',
      message: "'s Turn"
    })
  },

  restart: function(){
    this.setState(this.getInitialState());
  },

  changePlayer: function(){
    var nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
    this.setState({currentPlayer: nextPlayer, message: "'s Turn"});
  },

  validateMove: function(space){
    if (this.state.board[space] !== 'empty'){
      throw " cannot move there!"
    }
  },

  placeMark: function(e){
    if ( this.state.currentPlayer === "" ) {
      return null;
    }
    var board = this.state.board;
    var space = e.target.getAttribute('data');
    var mark = this.state.currentPlayer;
    try {
      this.validateMove(space)
      board[space] = mark;
      this.setState({board: board, message: ""});
      this.changePlayer();
      this.checkWinner(mark);
    } catch(error) {
      this.setState({message: error})
    }
  },

  checkWinner: function(player){
    var board = this.state.board;

    var equalsPlayer = function(i){
      return board[i] === player;
    }

    var isEmpty = function(el){
      return el === "empty"
    }

    if (
      [0, 1, 2].every(equalsPlayer)
      || [3, 4, 5].every(equalsPlayer)
      || [6, 7, 8].every(equalsPlayer)
      || [0, 3, 6].every(equalsPlayer)
      || [1, 4, 7].every(equalsPlayer)
      || [2, 5, 8].every(equalsPlayer)
      || [0, 4, 8].every(equalsPlayer)
      || [2, 4, 6].every(equalsPlayer)
    ) {

      this.setState({currentPlayer: "", message: player + " WINS!"})

    } else if (this.state.board.every(isEmpty) ) {

      this.setState({currentPlayer: "", message: "CATS GAME!"})

    }
  },

  render: function(){
    var tiles = this.state.board.map(function(tile, idx){
      return <div className={"square " + tile} key={idx} data={idx} onClick={this.placeMark}></div>;
    }.bind(this));

    return (
      <div className="game">
        <div className="board">
          {tiles}
        </div>
        <div className="message">{this.state.currentPlayer + this.state.message}</div>
        {!this.state.currentPlayer ? <Prompt restart={this.restart} /> : null}
      </div>
    );
  }



});

module.exports = Game;
