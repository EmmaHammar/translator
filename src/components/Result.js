import React, { Component } from "react";

class Result extends Component {
    render() {
        return(
            <div>
                <h2>{this.props.selectFrom}</h2>
                <p>{this.props.text}</p>
                <h3>{this.props.selectTo}</h3>
                <p>{this.props.showResult}</p>
            </div>

        )
    };
};

export default Result;