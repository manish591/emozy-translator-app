import React from "react";
import "./styles.css";
import emozyList from "./emozy";

const emojiWeKnow = Object.keys(emozyList);

class App extends React.Component {
  inputChangeHandler = (e) => {
    var userInput = e.target.value;
    var meaning = emozyList[userInput];
    this.setState({ input: meaning });
    if (meaning === undefined) {
      this.setState({ input: "Sorry, We Don't Have This In Our Database." });
    }
  };

  showMeaning = (emozy) => {
    var means = emozyList[emozy];
    this.setState({ input: means });
  };

  state = {
    input: ""
  };

  render() {
    return (
      <div className="App">
        <h1>Emozy truck</h1>
        <input
          type="text"
          placeholder="Input emozy here"
          onChange={this.inputChangeHandler}
        />
        <h2>{this.state.input}</h2>
        <p>Emozies We Know</p>
        <div>
          {emojiWeKnow.map((each) => {
            return <span onClick={() => this.showMeaning(each)}>{each}</span>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
