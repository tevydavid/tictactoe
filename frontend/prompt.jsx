var React = require('react');

var Prompt = React.createClass({
  render: function(){
    return(
      <div className="prompt" onClick={this.props.restart}>
        PLAY AGAIN
      </div>
    );
  }
});

module.exports = Prompt;
