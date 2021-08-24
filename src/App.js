import React from "react";
import Translate from "./components/Translate";
import Result from "./components/Result";

class App extends React.Component {

  state = {
    text: "",
    textResult: "",
    selectFrom: "sv",
    selectTo: "en",
    // selectTo: "",

  }

  saveText = (getText) => {    
    //spara statet getText
    this.setState({text: getText});
  }

  // onChange = (evt) => {
  //   this.setState({ chosenLanguage: evt.target.value })
  //   console.log("evt.target.value chosenLanguage", evt.target.value);
  // }

  //if onChange har värde 1 ska selectTo vara en, om värde 2 ska selectTo vara it
  // chosenLanguage = (getLanguange) => {

  // }

  
  render() {
    return (
      <>
        <h1>Translator - från svenska till:</h1>
        <select id="langBar">
          <option value="1">en</option>
          <option value="1">it</option>
          <option value="1">fr</option>
        </select>
  
        <Translate text={this.state.text} getNewText={this.saveText} selectFrom={this.state.selectFrom} selectTo={this.state.selectTo} /> 
        <Result showResult={this.state.text}/> 
      </>
    )
  }
}

export default App;

//Translate-rad ska kopieras för varje språk