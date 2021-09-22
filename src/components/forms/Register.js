import React, {useState} from "react";
import {Form, Field, Formik} from 'formik';
import {Button, Span, Title} from "./RegisterStyles"
import {REGISTER_URL} from "../common";
import axios from "axios";

const RenderError = (message) => {
    if (message)
        return (
            <Span className="help-block text-danger">{message}</Span>
        )
}


export const RegisterForm = () => {
    let [message, setMessage] = useState("");
    const onSubmitHandler = async (values) => {
        return axios.post(REGISTER_URL, values)
    };

    const form = (
        <Formik
            initialValues={{
                login: "",
                password: "",
            }}
            onSubmit={async (values) => {
                const response = await onSubmitHandler(values)
                localStorage.setItem('Authorization', "")
                if (response.status === 200) {
                    window.location = '/login'  // I know this is not the best solution
                }
                else
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
                <Button type="submit">Register</Button>
            </Form>
        </Formik>
    );

    return (
        <React.Fragment>
            <div className="container">
                <div>
                    <Title>Register Page</Title>
                    {form}
                    <div>
                        {RenderError(message)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}