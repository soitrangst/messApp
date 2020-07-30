import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom"
import Login from "./components/Authencication/Login"
import DashBoard from "./components/Dashboard"


function RouterView(props) {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/login"
                        render={({ location }) =>
                            localStorage.getItem('auth') ? (
                                <Redirect
                                    to={{
                                        pathname: "/",
                                        state: { from: location }
                                    }}
                                />
                            ) : (<Login />)
                        }
                    />
                    <Route exact path="/notfound">
                        <h1>
                            <button>
                                <Link to="">Back to main</Link>
                            </button>
                            Error 404
                        </h1>
                    </Route>
                    <PrivateRoute>
                        <DashBoard />
                    </PrivateRoute>
                </Switch>
            </Router>{" "}
        </React.Fragment>
    );
}

export default RouterView

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                localStorage.getItem('auth') ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}
