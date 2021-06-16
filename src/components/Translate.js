import React, { Component } from "react";

class Translate extends Component {

    state = {
        text: this.props.text,
    }

    onChange = (evt) => {
        this.setState({text: evt.target.value})
        
    }

    onSubmit = (evt) => {

        let textForTranslation=this.state.text;
        console.log("textForTranslation to API:", textForTranslation);

        //fetch API?

        evt.preventDefault();
        console.log("klick translateBtn");

        //vår callback är getNewText - skicka tillbaka nya statet till App.js (som sen ska spara det):OBS ska ändra så att den skickar översatta texten
        this.props.getNewText(this.state.text)
        
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <textarea type="text" placeholder="Write something..." value={this.state.text} onChange={this.onChange}></textarea> <br></br>
                <button type="submit" id="translateBtn">Translate</button>

            </form>
        ) 
    };
};

export default Translate;