import React, { Component } from "react";
import { getCustomerID } from "../../services";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showPopup: false,
            convertedCurrency: null,
            userID: "",
            username: JSON.parse(sessionStorage.getItem("userData")),
        };
    }

    componentDidMount() {
        var userName = (this.state.username).split("@dbs.com");
        getCustomerID(userName[0], (res)=>{
            if(!res.err){
                this.setState({
                    loading: false,
                    error: false,
                    customerId: res.customerId
                })
            }
            else{
                this.setState({
                    loading: false,
                    error: true,
                })
            }
        })
    }

    render() {
        return(
            <div>
                {
                    (this.state.username)
                    ?
                    "Hello World "+ this.state.username
                    :
                    "Please Try Again!"
                }
            </div>
        )
    }
}

export default HomePage;
