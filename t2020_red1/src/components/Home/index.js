import React, { Component } from "react";
import { getCustomerID } from "../../services";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showPopup: false,
            convertedCurrency: null,
            userID: "",
        };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    componentDidMount() {
        var userName = (this.props.user.email).split("@dbs.com");
        this.setState({
            user: userName[0],
        });
        console.log(userName[0]);

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
                    (this.state.customerId)
                    ?
                    "Hello "+this.state.customerId
                    :
                    "Hello User"
                }
            </div>
        )
   }
}

export default HomePage;
