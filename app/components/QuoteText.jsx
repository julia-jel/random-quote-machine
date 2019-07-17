const React = require('react');

/* Rendering a quote text passed as props */

class QuoteText extends React.Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    return (
      <div id={this.props.id}>
        <i className="fa fa-quote-left"></i>
        {this.props.text}
      </div>
    )
  };
};

module.exports = QuoteText;
