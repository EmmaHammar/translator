import React, { Component } from "react";

class Translate extends Component {

    //inte sätta state här?
    state = {
        text: "",
        chosenLanguage: "",
    }

    onChange = (evt) => {
        this.setState({text: evt.target.value})
    }

    onSubmit = (evt) => {

        let textForTranslation=this.state.text;
        console.log("textForTranslation to API:", textForTranslation);

        //fetch API:
        fetch(`https://api.mymemory.translated.net/get?q=${textForTranslation}!&langpair=${this.props.selectFrom}|${this.props.selectTo}`) 
        .then( res => res.json() )
        .then( translation => {
            console.log("translated text:", translation.responseData.translatedText);

            //Skicka översatta texten som prop till app.js, via funktionen som kallas på i Translate??
            //vår callback är getNewText - skicka tillbaka nya statet till App.js (som sen ska spara det)
            this.props.getNewText( translation.responseData.translatedText )
        
        })

        evt.preventDefault();
        // console.log("klick translateBtn");
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