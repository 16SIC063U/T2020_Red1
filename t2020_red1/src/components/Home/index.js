import React, { Component } from "react";

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPopup: false,
            convertedCurrency: null,
            username: JSON.parse(sessionStorage.getItem("userData")),
        };
    }

    render() {

        if(this.state.username){
            return(
                <div>Hello World {this.state.username}</div>
            );
        }else{
            return(
                <div>Please Try Again!</div>
            );
        }

    }
}

export default HomePage;
