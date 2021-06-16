import React, { Component } from "react";

class Translate extends Component {

    state = {
        text: this.props.text,
    }

    onChange = (evt) => {
        console.log("upptäckte en ändring");
        this.setState({text: evt.target.value})
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        console.log("klick translateBtn");

        //vår callback är getNewText - skicka tillbaka nya statet till App.js (som sen ska spara det):
        this.props.getNewText(this.state.text)
        
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <textarea type="text" value={this.state.text} onChange={this.onChange}></textarea> <br></br>
                <button type="submit" id="translateBtn">Translate</button>

            </form>
        ) 
    };
};

export default Translate;