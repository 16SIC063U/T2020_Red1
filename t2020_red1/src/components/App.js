import React, { Component } from "react";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import { firebase } from "../firebase/index";
import { defaults } from "react-chartjs-2";
import Trianglify from "trianglify";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/index.css";
import "../assets/css/signin.css";

//import LandingPage from "./Landing/index";
import SignUpPage from "./signUp/index";
import SignInPage from "./signIn/index";
import HomePage from "./Home/index";

import * as routes from "../constants/routes";
import * as db from "../firebase/db";
import * as utils from "./Util";
import * as analytics from "./../analytics/analytics";
import Navigation from "./Navigation";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
            users: null,
            expenses: null,
            loans: null,
            defaultCategoriesNames: null,
            defaultCategoriesColors: null,
            settings: null,
            savings: null
        };
    }

    componentDidMount() {
        document.title = "Expense Manager";

        analytics.initGA();
        analytics.logPageView();

        firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({
                    authUser: authUser
                })
                : this.setState({
                    authUser: null
                });

            if (this.state.authUser) {
                // get all the users in the db
                db.onceGetUsers().then(snapshot => {
                    this.setState({
                        users: snapshot.val()
                    });
                });

                // get all the settings
                firebase.db.ref(`settings/${this.state.authUser.uid}`).on("value", data => {
                    if (data.val() !== null) {
                        this.setState({
                            settings: data.val()
                        });

                        if (this.state.settings) {
                            //setting the font family to chart.js
                            defaults.global.defaultFontFamily = this.state.settings.font || "sans-serif";
                        }
                    } else {
                        db.doCreateSettingsForUser(
                            this.state.authUser.uid,
                            "sans-serif",
                            "night",
                            "Indian Rupees",
                            "off",
                            "Indian Rupees",
                            15000
                        );
                    }
                });

                // get all the expenses from new table
                firebase.db.ref(`expenseTable/${this.state.authUser.uid}`).on("value", data => {
                    if (data.val() !== null) {
                        this.setState({
                            expenses: data.val()
                        });
                    } else {
                        // get and set expenses in db from old expenses table to new expenseTable
                        firebase.db.ref("expenses").on("value", data => {
                            if (data.val() !== null) {
                                const eachExpense = utils.eachExpense(data.val());
                                const thisUsersExpenses = utils.currentUsersExpenses(eachExpense, this.state.authUser);

                                thisUsersExpenses.map(elem => {
                                    db.doCreateExpenseTable(
                                        elem.value.uid,
                                        elem.value.date,
                                        elem.value.expense,
                                        elem.value.category,
                                        elem.value.comments,
                                        elem.value.day,
                                        elem.key
                                    );
                                });
                                thisUsersExpenses.map(elem => {
                                    firebase.db.ref(`expenses/${elem.key}`).remove();
                                });

                                // need to set empty state once deleting all records in legacy table
                                // or else it will always be loading

                                this.setState({
                                    expenses: data.val()
                                });
                            }
                        });
                    }
                });

                // get all the savings from new table
                firebase.db.ref(`savingsTable/${this.state.authUser.uid}`).on("value", data => {
                    if (data.val() !== null) {
                        this.setState({ savings: data.val() });
                    } else {
                        this.setState({ savings: data.val() });
                    }
                });

                // get all the defaultCategories
                firebase.db.ref("defaultCategories").on("value", data => {
                    if (data.val() !== null) {
                        this.setState({
                            defaultCategoriesNames: Object.keys(data.val()),
                            defaultCategoriesColors: Object.values(data.val())
                        });
                    }
                });

                // // get all the loan details
                // firebase.db.ref("loans").on("value", data => {
                //     if (data) {
                //         this.setState({
                //             loans: data.val()
                //         });
                //     }
                // });

                // get all the expenses from new table
                firebase.db.ref(`loanTable/${this.state.authUser.uid}`).on("value", data => {
                    if (data.val() !== null) {
                        this.setState({
                            loans: data.val()
                        });
                    } else {
                        // get and set expenses in db from old expenses table to new expenseTable
                        firebase.db.ref("loans").on("value", data => {
                            if (data.val() !== null) {
                                const eachExpense = utils.eachExpense(data.val());
                                const thisUsersLoans = utils.currentUsersExpenses(eachExpense, this.state.authUser);

                                thisUsersLoans.map(elem => {
                                    db.doCreateLoanTable(
                                        elem.value.uid,
                                        elem.value.date,
                                        elem.value.amount,
                                        elem.value.loanType,
                                        elem.value.reason,
                                        elem.value.person,
                                        elem.value.day,
                                        elem.value.status,
                                        elem.key
                                    );
                                });

                                thisUsersLoans.map(elem => {
                                    firebase.db.ref(`loans/${elem.key}`).remove();
                                });

                                // need to set empty state once deleting all records in legacy table
                                // or else it will always be loading

                                this.setState({
                                    loans: data.val()
                                });
                            }
                        });
                    }
                });

                const expensesRef = firebase.db.ref(`expenseTable/${this.state.authUser.uid}`);
                expensesRef.on("child_removed", data => {
                    firebase.db.ref(`expenseTable/${this.state.authUser.uid}`).on("value", data => {
                        if (data) {
                            this.setState({
                                expenses: data.val()
                            });
                        }
                    });
                });

                const loansRef = firebase.db.ref(`loanTable/${this.state.authUser.uid}`);
                loansRef.on("child_removed", data => {
                    firebase.db.ref(`loanTable/${this.state.authUser.uid}`).on("value", data => {
                        if (data) {
                            this.setState({
                                loans: data.val()
                            });
                        }
                    });
                });
            }

            // return authUser ? this.setState(() => { authUser: authUser}) : this.setState(() => ({authUser: null}))
        });
    }

    render() {
        const bodyStyle = {
            backgroundColor: this.state.settings
                ? this.state.settings.mode === "night"
                    ? "#484842 !important"
                    : "auto"
                : "auto",
            height: "100vh"
        };

        var patternconfig = { height: 300, width: 500, cell_size: 35 }; // palette: Trianglify.colorbrewer,
        var pattern = Trianglify({ ...patternconfig });
        var pattern2 = Trianglify({ ...patternconfig });
        var pattern3 = Trianglify({ ...patternconfig });
        var pattern4 = Trianglify({ ...patternconfig });
        var pattern5 = Trianglify({ ...patternconfig });
        var pattern6 = Trianglify({ ...patternconfig });
        var pattern7 = Trianglify({ ...patternconfig });
        var pattern8 = Trianglify({ ...patternconfig });

        const cards = {
            card8: { backgroundImage: `url(${pattern8.png()})` },
            card7: { backgroundImage: `url(${pattern7.png()})` },
            card6: { backgroundImage: `url(${pattern6.png()})` },
            card5: { backgroundImage: `url(${pattern5.png()})` },
            card4: { backgroundImage: `url(${pattern4.png()})` },
            card3: { backgroundImage: `url(${pattern3.png()})` },
            card2: { backgroundImage: `url(${pattern2.png()})` },
            card1: { backgroundImage: `url(${pattern.png()})` }
        };

        return (
            <Router>
                <div style={bodyStyle}>
                    <Navigation authUser={this.state.authUser} settings={this.state.settings} />
                    <Switch>
                    <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
                    <Route
                        exact
                        path={routes.HOME}
                        component={() => (
                            <HomePage
                                user={JSON.parse(sessionStorage.getItem("userData"))}
                            />
                        )}
                    />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
