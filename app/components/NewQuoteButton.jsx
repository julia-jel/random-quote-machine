import React from 'react';

/* Creating a button for changing a quote, an image and a background color */

class NewQuoteButton extends React.Component {
  constructor(props) {
    super(props);
  };
    
    render() {
      return (
        <button id={this.props.id} onClick={this.props.handleClick} class="btn btn-primary" title="Get a new quote!">New Quote</button>
      );
    }
};

module.exports = NewQuoteButton;
