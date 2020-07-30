import React from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Login from "./Login";


const Auth = props => {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route path="*">
                        <h1>Error 404</h1>
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>

    );
};


export default Auth;