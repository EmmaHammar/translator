import React from "react";
import Translate from "./components/Translate";
import Result from "./components/Result";

class App extends React.Component {

  state = {
    text: "",
  }

  saveText = (getText) => {
    // console.log("callback getText från saveText App.js");
    this.setState({text: getText});

    //spara statet getText
  }

  render() {
    return (
      <>
        <h1>Translator</h1>
        <Translate text={this.state.text} getNewText={this.saveText}/>
        <Result showResult={this.state.text}/> 
      </>
    )
  }
}

export default App;
