var React = require('react');

var Game = React.createClass({
  getInitialState: function(){
    return({
      board: ['empty','empty','empty','empty','empty','empty','empty','empty','empty'],
      currentPlayer: 'X',
      gameOver: false
    })
  },

  render: function(){
    var board = this.state.board.map(function(tile, idx){
      return <div className="square {tile}" key={idx}></div>;
    });

    return (
      <div>
        Here is the Board!
        {board}
      </div>
    );
  }



});

module.exports = Game;
