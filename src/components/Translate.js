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

        //fetch API? TESTA LÄGGA IN!!!

        evt.preventDefault();
        console.log("klick translateBtn");

        //vår callback är getNewText - skicka tillbaka nya statet till App.js (som sen ska spara det):OBS ska ändra så att den skickar översatta texten
        this.props.getNewText(this.state.text)
        
    }

    render() {
        //fetch
        fetch(`https://api.mymemory.translated.net/set?seg=Hello World!&tra=Ciao Mondo!&langpair=en|it`) 
        .then( (response) => response.json() )
        .then( function(translation) {
            console.log("translation from API:", translation);
        })

        // fetch(`https://en.wikipedia.org/w/rest.php/v1/search/page?q=${targetCity}&limit=1`)
        // .then((response) => response.json())
        // .then(function(wiki){
        //     getWiki(wiki);
        //     console.log(wiki);
        // });
        
        return(
            <form onSubmit={this.onSubmit}>
                <textarea type="text" placeholder="Write something..." value={this.state.text} onChange={this.onChange}></textarea> <br></br>
                <button type="submit" id="translateBtn">Translate</button>

            </form>
        ) 
    };
};

export default Translate;