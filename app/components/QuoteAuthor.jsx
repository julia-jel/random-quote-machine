import React from 'react';

/* Rendering a quote's author passed as props */

class QuoteAuthor extends React.Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    return (
      <div id={this.props.id}>
        {"- " + this.props.author}
      </div>
    )
  };
}

module.exports = QuoteAuthor;
