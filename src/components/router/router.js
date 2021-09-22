import React from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import {LoginForm} from "../forms/Login";
import {RegisterForm} from "../forms/Register";
import {Home as HomePage} from "../home/Home"


function Home() {
    return <HomePage/>;
}

function Login() {
    return <LoginForm/>;
}

function Register() {
    localStorage.setItem('data', {})
    return <RegisterForm/>;
}

function Router() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Router;