import React, { Component } from "react";
<<<<<<< HEAD

import ExpenseTable from "./ExpenseTable.js";
import AddExpensePopup from "./AddExpensePopup";
import Cards from "./Cards";
import GenerateExcel from "./GenerateExcel";
import Loader from "./../Common/Loader";

import MobileExpenseTable from "./MobileExpenseTable";

import * as analytics from "./../../analytics/analytics";
=======
import { Dropdown } from "react-bootstrap";
import { getCustomerID, getDepositAccounts, getTransactionDetails } from "../../services";
>>>>>>> 52ec1425d69a9a421be09ac8d13532ee61b6edaf

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showPopup: false,
            convertedCurrency: null,
            userID: "",
            username: JSON.parse(sessionStorage.getItem("userData")),
            loading: true,
            depositAccounts: [],
            accountDetails: {},
            transactionDetails: [],
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
                getDepositAccounts(res.customerId, (res)=>{
                    var depositAccounts = this.state.depositAccounts;
                    console.log("DA", JSON.stringify(res));
                    this.setState({
                        depositAccounts: [...depositAccounts, res],
                    })
                });
            }
            else{
                this.setState({
                    loading: false,
                    error: true,
                })
            }
        });
    }

    getTransactions() {
        var fromDate = document.getElementById("fromDate").value;
        var toDate = document.getElementById("toDate").value;

        if(!fromDate || !toDate){
            alert("Please filled in both To and From Date");
        }
        else{
            getTransactionDetails(this.state.accountDetails.accountId, fromDate, toDate, (res)=>{
                  console.log("TD", JSON.stringify(res));
                  this.setState({
                    transactionDetails: [...res],
                  })
            })
        }
    }

    render() {
        var rows = [];
        for(var x in this.state.depositAccounts[0]){
            rows.push(
                <Dropdown.Item 
                    href="#/action-1" 
                    onSelect={
                        ()=>{ this.setState(
                                { accountDetails: this.state.depositAccounts[x][0] }
                                )
                            }}>
                            {this.state.depositAccounts[x][0].displayName}
                            </Dropdown.Item>
                );
        }

        var tran = [];
        for(var y in this.state.transactionDetails){
            var curr = this.state.transactionDetails[y]
            tran.push(
                <div id={curr.transactionId}><br/>
                    <table border="1">
                        <tr>
                            <td>
                                <label>Transaction ID: </label><br/>
                            </td>
                            <td>
                                <label>{curr.transactionId}</label><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Account ID: </label><br/>
                            </td>
                            <td>
                                <label>{curr.accountId}</label><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Type: </label><br/>
                            </td>
                            <td>
                                <label>{curr.type}</label><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Amount: </label><br/>
                            </td>
                            <td>
                                <label>{curr.amount}</label><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Date: </label><br/>
                            </td>
                            <td>
                                <label>{curr.date}</label><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Tag: </label><br/>
                            </td>
                            <td>
                                <label>{curr.tag}</label><br/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Reference Number: </label><br/>
                            </td>
                            <td>
                                <label>{curr.referenceNumber}</label><br/>
                            </td>
                        </tr>
                    </table>
                </div>
            )
        }

        return(
            <div>
<<<<<<< HEAD
            
=======
                <div>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Accounts
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {rows}
                      </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <br/>
                    Account Type: {(this.state.accountDetails.type)?this.state.accountDetails.type:""} 
                    <br/>
                    Account Name: {(this.state.accountDetails.displayName)?this.state.accountDetails.displayName:""}
                    <br/>
                    Account Number: {(this.state.accountDetails.accountNumber)?this.state.accountDetails.accountNumber:""}
                </div>
                <div>
                    <br />
                     <label for="fromDate">From:</label>
                    <input id="fromDate" />
                    <br />
                    <br />
                     <label for="toDate">To:</label>
                    <input id="toDate" />
                </div>
                <div>
                    <br />
                    <button onClick={()=>{this.getTransactions()}}>Get Transactions</button>
                </div>
                <div>
                    {tran}
                </div>
>>>>>>> 52ec1425d69a9a421be09ac8d13532ee61b6edaf
            </div>
        )
   }
}

export default HomePage;
