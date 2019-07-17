const React = require('react');

/* Render a cat's image passed as props */

class CatImage extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
    <div>
      <img id="image" src={this.props.src} alt="Sophisticated cat" />  
    </div>
    );
  }
}

module.exports = CatImage;
