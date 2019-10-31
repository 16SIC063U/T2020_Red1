import React, { Component } from "react";

import ExpenseTable from "./ExpenseTable.js";
import AddExpensePopup from "./AddExpensePopup";
import Cards from "./Cards";
import GenerateExcel from "./GenerateExcel";
import Loader from "./../Common/Loader";

import MobileExpenseTable from "./MobileExpenseTable";

import * as analytics from "./../../analytics/analytics";

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = { showPopup: false, convertedCurrency: null };
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    getProps() {
        return JSON.stringify(this.props.user);
    }

    render() {
        return(
            <div>
            {
                (this.props.user)?
                this.props.user
                : "Hi"
            }
            </div>
        )
   }
}

export default HomePage;
