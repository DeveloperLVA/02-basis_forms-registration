import React from 'react';
import {Formik, Form} from 'formik';
import { TextField } from './TextField';
//import * Yup from 'yup';
import * as Yup from 'yup';

export const Signup= ()=> {

    const validate = Yup.object ({
        firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
        email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
        password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password is required'),
    })

    return (
        <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }}
        validationSchema={validate}
        >
            {formik => (
            <div>   
                <h1 className="my-4 font-weight-bold-display-4">Зарегистрироваться</h1>
                <Form>
                    <TextField  label="Имя" name="firstName" type="text"  />
                    <TextField  label="Фамилия" name="lastName" type="text"  />
                    <TextField  label="Email" name="email" type="email"  />
                    <TextField  label="пароль" name="password" type="password"  />
                    <TextField  label="Повторите пароль" name="ConfirmPassword" type="password" />
                    <button className="btn btn-success mt-3" type="submit">Register</button>
                    <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>

                </Form>
            </div> 
            )}
        </Formik>
    )
}