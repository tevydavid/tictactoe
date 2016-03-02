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
    if (
      [0, 1, 2].every(pos => board[pos] === player)
      || [3, 4, 5].every(pos => board[pos] === player)
      || [6, 7, 8].every(pos => board[pos] === player)
      || [0, 3, 6].every(pos => board[pos] === player)
      || [1, 4, 7].every(pos => board[pos] === player)
      || [2, 5, 8].every(pos => board[pos] === player)
      || [0, 4, 8].every(pos => board[pos] === player)
      || [2, 4, 6].every(pos => board[pos] === player)
    ) {
      this.setState({currentPlayer: "", message: player + " WINS!"})
    } else if (this.state.board.every(mark => mark !== 'empty')) {
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
