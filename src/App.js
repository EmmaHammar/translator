import React from "react";
import Translate from "./components/Translate";
import Result from "./components/Result";

class App extends React.Component {

  state = {
    text: "Detta vill jag översätta...",
  }

  translateText = (getText) => {
    console.log("callback translateText från App.js");
    this.setState({text: getText});

    //spara statet getText
  }

  render() {
    return (
      <>
        <h1>Translator</h1>
        <Translate text={this.state.text} getNewText={this.translateText}/>
        <Result /> 
      </>
    )
  }
}

export default App;
