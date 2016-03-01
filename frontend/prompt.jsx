var React = require('react');

var Prompt = React.createClass({
  render: function(){
    return(
      <div className="prompt">
        <button onClick={this.props.restart}>RESTART</button>
      </div>
    );
  }
});

module.exports = Prompt;
