const React = require('react');
import '../styles.css';

/* renders an icon to tweet the chosen quote */

class TweetQuoteButton extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div>
        <a href={"https://twitter.com/intent/tweet?text=" + this.props.quote} target='_blank' id={this.props.id} title="Tweet this quote!" alt="Tweet this quote">
        <i className="fa fa-twitter" />
        </a>
      
      </div>
    )
  }
}

module.exports = TweetQuoteButton;
