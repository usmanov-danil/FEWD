import React, {useState} from 'react';
import {Form, Field, Formik} from 'formik';
import {Button, Span, Title} from "./LoginStyles"
import {LOGIN_URL} from "../common";
import axios from "axios";

const RenderError = (message) => {
    if (message)
        return (
            <Span className="help-block text-danger">{message}</Span>
        )
}


export const LoginForm = () => {
    let [message, setMessage] = useState("");
    const onSubmitHandler = async (values) => {
        return axios.post(LOGIN_URL, values)
    };

    const form = (
        <Formik
            initialValues={{
                login: "",
                password: "",
            }}
            onSubmit={async (values) => {
                const response = await onSubmitHandler(values)
                if (response.status === 200) {
                    localStorage.setItem('Authorization', response.data.token)
                    window.location = '/'   // I know this is not the best solution
                }
                else
                    localStorage.setItem('Authorization', "")
                    setMessage(response.statusText)
            }}
            validate={(values) => {
                const errors = {};
                if (!values.login) {
                    setMessage("Login is required!");
                }
                if (!values.password) {
                    setMessage("Password is required!");
                }
                return errors;
            }}
        >
            <Form>
                <div>
                    <Field type="text" id="login" name="login" placeholder="Login"/>
                </div>
                <div>
                    <Field type="password" id="password" name="password" placeholder="Password"/>
                </div>
                <Button type="submit">Login</Button>
            </Form>
        </Formik>
    );

    return (
        <React.Fragment>
            <div className="container">
                <div>
                    <Title>Login Page</Title>
                    {form}
                    <div>
                        {RenderError(message)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}