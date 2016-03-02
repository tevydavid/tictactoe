var React = require('react');

var Footer = React.createClass({

  render: function(){
    return(
      <footer>
        <a className="title" href="#main">TIC-TAC-TEVY</a>
        <p className="add-game" onClick={this.props.addGame}>ADD BOARD</p>
      </footer>
    )
  }

});

module.exports = Footer;
