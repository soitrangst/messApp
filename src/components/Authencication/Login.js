import React, { useContext, useState } from 'react';
import {
    Link,
    useHistory,
    useLocation
} from "react-router-dom";

import { StateContext } from "../../context/globalState"

const Login = props => {
    const { authenticate } = useContext(StateContext)
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = (data) => {
        authenticate(data, () => {
            history.replace(from);
        });
    };

    return (
        <LoginForm checkLogin={login} />
    );
};

export default Login;

const LoginForm = (props) => {
    const [email, setEmail] = useState('member1@gmail.com')
    const [password, setPassword] = useState('a')

    const onSubmit = (event) => {
        event.preventDefault()
        if (email && password) {
            console.log(email, password)
            props.checkLogin({ email: email, password: password })
            setEmail('')
            setPassword('')
        }
    }

    return (
        <div className="container d-flex flex-column">
            <div className="row align-items-center justify-content-center no-gutters min-vh-100">

                <div className="col-12 col-md-5 col-lg-4 py-4 py-md-11">


                    <h1 className="font-bold text-center">Sign in</h1>


                    <p className="text-center mb-4">Welcome to the official Chat web-client.</p>


                    <form className="mb-4" onSubmit={onSubmit}>

                        <div className="form-group">
                            <label htmlFor="email" className="sr-only">Email Address</label>
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                value={email}
                                onChange={e => {
                                    setEmail(e.target.value)
                                }}
                                placeholder="Enter your email" />
                        </div>


                        <div className="form-group">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                value={password}
                                onChange={e => {
                                    setPassword(e.target.value)
                                }}
                                autoComplete="false"
                                placeholder="Enter your password" />
                        </div>

                        <div className="form-group d-flex justify-content-between">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="checkbox-remember" />
                                <label className="custom-control-label" htmlFor="checkbox-remember">Remember me</label>
                            </div>
                            <Link to="#">Reset password</Link>
                        </div>


                        <button className="btn btn-lg btn-block btn-primary" type="submit" >Sign in</button>
                    </form>


                    <p className="text-center">
                        Don't have an account yet
                        <Link to="#">Sign up</Link>.
                        </p>

                </div>
            </div>
        </div>
    )
}