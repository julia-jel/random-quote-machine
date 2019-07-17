import React from 'react';
import '../styles.css';

// Importing components:

import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import TweetQuoteButton from './TweetQuoteButton';
import NewQuoteButton from './NewQuoteButton';
import CatImage from './CatImage';
import Footer from './Footer';

// Data Base:

const quotes = [
  ["My life is my message.", "Mahatma Gandhi"], 
  ["I love those who can smile in trouble.", "Leonardo da Vinci"], 
  ["It is better to be hated for what you are than to be loved for what you are not.", "Andre Gide"], 
  ["Life is like playing a violin in public and learning the instrument as one goes on.", "Samuel Butler"], 
  ["You’ve gotta dance like there’s nobody watching.", "William W. Purkey"],
  ["Pay attention. It’s all about paying attention. Attention is vitality. It connects you with others.", "Susan Sontag"],
  ["I tell you, in this world being a little crazy helps to keep you sane.", "Zsa Zsa Gabor"],
  ["We know what we are, but know not what we may be.", "William Shakespeare"],
  ["Life can only be understood backwards; but it must be lived forwards.", "Soren Kierkegaard"],
  ["Keep your eyes on the stars and your feet on the ground.", "Theodore Roosevelt"],
  ["It always seems impossible until it’s done.", "Nelson Mandela"],
  ["In three words I can sum up everything I’ve learned about life: it goes on.", "Robert Frost"],
  ["Go confidently in the direction of your dreams! Live the life you’ve imagined.", "Henry David Thoreau"]
];

const colors = [
  "#001f3f", 
  "#008080", 
  "#3D9970", 
  "#6B8E23", 
  "#e68900", 
  "#85144b", 
  "#CD5C5C", 
  "#2F4F4F"
];

const images = [
  "https://s3.eu-central-1.amazonaws.com/80sdrums/cats/151074_900.jpg",
  "https://s3.eu-central-1.amazonaws.com/80sdrums/cats/26bd33318061.jpg",
  "https://s3.eu-central-1.amazonaws.com/80sdrums/cats/QQ3E6290.jpg",
  "https://s3.eu-central-1.amazonaws.com/80sdrums/cats/cat+(1).jpg",
  "https://s3.eu-central-1.amazonaws.com/80sdrums/cats/bigstock_the_cat_writes_a_declaration_o_4314646.jpg",
  "https://s3.eu-central-1.amazonaws.com/80sdrums/cats/cat-wearing-glasses.jpg",
  "https://s3.eu-central-1.amazonaws.com/80sdrums/cats/photo-1518791841217-8f162f1e1131.jpeg"
];

 // Data Access Layer:

const getRandomQuote = () => {
  let randomNumber1 = Math.floor(Math.random() * quotes.length);
  return {
    text: quotes[randomNumber1][0],
    author: quotes[randomNumber1][1]
  }
};

const getRandomColor = () => {
  let randomNumber2 = Math.floor(Math.random() * colors.length);
  return {
    backgroundColor: colors[randomNumber2]
  }
};

const getRandomImage = () => {
  let randomNumber3 = Math.floor(Math.random() * images.length);
  return images[randomNumber3];
};

/* the main page for the index route of this app */

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = getRandomQuote();
    this.handleClick = this.handleClick.bind(this);
  };
  
  handleClick() {
    this.setState(getRandomQuote())
  };
  
  render() {
    return (
      <div id="quote-box" style={getRandomColor()}>
        <div id="smaller-box">
          <QuoteText id="text" text={this.state.text} />
          <QuoteAuthor id="author" author={this.state.author} />
          <div id="buttons">
            <TweetQuoteButton id="tweet-quote" quote={this.state.text + " " + this.state.author} />
            <NewQuoteButton id="new-quote" handleClick={this.handleClick} />
          </div>
          <CatImage id="cat-image" src={getRandomImage()} />
        </div>
        <Footer />
      </div>
    )
  };
};

module.exports = QuoteBox;
