import React, { Component } from "react";

class Carte extends Component {
    //styleToApply = { height : "100%", width: "100%"}
    render() {
        return (
            <div className="carte col-lg-3 col-md-3 col-sm-6 col-12">
                <img src={this.props.image} style={{ height : "100%", width: "100%"}} alt=""></img>
                <p style={{marginLeft:"15px", fontWeight:"bold", color: "rgb(75, 72, 72)"}}>{this.props.name}</p>
                <p style={{marginLeft:"15px", fontStyle:"italic"}}>{this.props.author}</p>
            </div>
        );
    }
}

export default Carte;