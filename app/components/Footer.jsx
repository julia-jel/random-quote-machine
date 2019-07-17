import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div id="footer">
        <p>Designed and coded by</p> 
        <a id="link" target="_blank" href="https://www.freecodecamp.org/julia-el">Julia El</a>
      </div>
    )
  }
};

module.exports = Footer;
