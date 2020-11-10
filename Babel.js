/*

ReactJS code for the application (transpiled by Babel originally).

*/

const quoteList = [
  ["Frederich Nietzche", "There is always some madness in love. But there is also always some reason in madness."],
  ["Mark Twain", "Whenever you find yourself on the side of the majority, it is time to pause and reflect."],
  ["Marie Curie", "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."],
  ["Sigmund Freud", "The liberty of the individual is no gift of civilization. It was greatest before there was any civilization."],
  ["Vincent van Gogh", "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced."],
  ["Frederich Nietzche", "I cannot believe in a God who wants to be praised all the time."],
  ["Latin Proverb", "If the wind will not serve, take to the oars."],
  ["Benjamin Franklin", "Early to Bed and Early to Rise makes a Man Healthy, Wealthy and Wise."],
  ["Chinese Proverb", "The best time to plant a tree was 20 years ago. The second best time is now."],
  ["Mae Jemison", "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live."],
  ["Frank Sinatra", "The best revenge is massive success."],
  ["Theodore Roosevelt", "Believe you can and you’re halfway there."],
  ["Oprah Winfrey", "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough."],
  ["Vincent van Gogh", "I would rather die of passion than of boredom."],
  ["Ralph Waldo Emerson", "The only person you are destined to become is the person you decide to be."],
  ["Rosa Parks", "I have learned over the years that when one’s mind is made up, this diminishes fear."]
];

const colorList= ["red", "green", "blue", "orange", "teal", "purple", "gray", "black", "violet", "#465", "#495", "#347", "#098", "#123", "#135", "#ABC", "#CBA", "#D45", "#7D3"];


let randQuoteIndex = () => Math.round(Math.random() * (quoteList.length - 1));
let randColorIndex = () => Math.round(Math.random() * (colorList.length - 1));


const textBoxStyles = {
  backgroundColor: "#EEE",
  width: "35em",
  height: "20em",
  borderRadius: ".2em",
  textAlign: "center",
  position: "absolute",
  top: "15%",
  left: "30%"
};

const textStyles = {
  fontSize: "160%",
  fontFamily: "'Josefin Sans', sans-serif",
  width: "80%",
  height: "40%",
  padding: "1em"
};

const authorStyles = {
  fontSize: "110%",
  position: "relative",
  bottom: "-15%",
  right: "-15%"
};

const newQuoteStyles = {
  color: "white",
  position: "relative",
  bottom: "-30%",
  right: "-35%",
  padding: ".5em",
  borderRadius: ".5em"
};

const tweetStyles = {
  width: "3em",
  height: "5em",
  color: "white",
  position: "relative",
  left: "-40%",
  bottom: "-30%",
  padding: ".5em",
  borderRadius: ".5em"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.randNum = randQuoteIndex();
    this.state = {
      color: colorList[randColorIndex()],
      quote: quoteList[this.randNum][1],
      author: quoteList[this.randNum][0]
    };
    
    $("body").css("background-color", this.state.color);
    newQuoteStyles.backgroundColor = this.state.color;
    textBoxStyles.color = this.state.color;
    tweetStyles.backgroundColor = this.state.color;
    this.renderQuoteAndAuthor = this.renderQuoteAndAuthor.bind(this);
  }
  renderQuoteAndAuthor() {
    const randNum = randQuoteIndex();
    const randColor = colorList[randColorIndex()];
    // console.log(randColor);
    $("#quote-box").css("color", randColor);
    $("body").css("background", randColor);
    $("#new-quote").css("background-color", randColor);
    $("#tweet-quote").css("background-color", randColor);
    
    ReactDOM.render(
      this.state.quote = quoteList[randNum][1],
      document.getElementById("text")
    );

    ReactDOM.render(
      this.state.author = quoteList[randNum][0],
      document.getElementById("author")
    );
  };
  
  render() {
    return (
      <SubApp quote={this.state.quote} author={this.state.author} renderQAndA={this.renderQuoteAndAuthor} />
    );
  }
}

class SubApp extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
      return (
        <div id="quote-box" style={textBoxStyles}>
          <div id="text" style={textStyles} >{this.props.quote}</div>
          <div id="author" style={authorStyles} > - {this.props.author}</div>
          <button id="new-quote" style={newQuoteStyles} value="new quote" onClick={this.props.renderQAndA} >
            New quote
          </button>
          <a href="http://twitter.com/intent/tweet" id="tweet-quote" style={tweetStyles} ><b>TWEET <TwitterIcon /></b></a>
        </div>
      );
    }
}

class TwitterIcon extends React.Component {
  render() {
    return (
      <i className="fa fa-twitter"></i>
    )
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
