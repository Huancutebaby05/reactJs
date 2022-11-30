import React from 'react'
import * as Yup from "yup"
import { ErrorMessage, Formik, Form, Field } from "formik";
import { useState } from "react"
import { FaFacebookF, FaInstagram, FaGooglePlusG, FaTwitter, FaRss } from "react-icons/fa"
import Cookies from 'js-cookie'
function Login() {

   
    Cookies.set('truongnv97', 'username', { expires: 7, path: '' })
    console.log(Cookies.get('truongnv97'));
    Cookies.get('name')
    const [account, setAccount] = useState({
        userName: "",
        password: ""
    })
    const validateSchema = Yup.object().shape({
        userName: Yup.string().min(2).max(20).required(),
        password: Yup.string().required(),
    });
    const handleSubmit = () => {

    }
    return (
        <div id="login-wrap" className="d-flex justify-content-center">

            <div id="login-image" className='pt-5'>
                <img src={require('../public/img/login-img/login-1.png')} />
            </div>
            <div id="login-box" className="d-flex flex-column ">
                <h1 className="mt-5 text-center">Animate store</h1>
                <h2 className='ms-4'>
                    Login
                </h2>
                <Formik
                    initialValues={account}
                    validationSchema={validateSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                >
                    <Form>
                        <label htmlFor="userName">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="login-user-space"><b>User name</b></p>
                                <p>Need an account? <a href="#">Sign up</a></p>
                            </div>
                            <Field type="text" id="username" placeholder="Enter your user" name="userName" />
                            <ErrorMessage component="span" name='userName' className='text-danger' />
                        </label>
                        <label htmlFor="password">
                            <p className="login-user-space"><b>Password</b></p>
                            <Field type="password" id="password" placeholder="Enter your password"
                                name="password" />
                                <ErrorMessage component="span" name='password' className='text-danger' />
                        </label>
                    </Form>
                </Formik>

                <label htmlFor="">
                    <button type="submit">
                        <b>Login</b>
                    </button>
                </label>
                <label className="text-center" htmlFor=""><a href="">Forgot password?</a>
                </label>
                <label htmlFor="">
                    <p>Or you can login by:</p>
                </label>
                <label className="d-flex justify-content-evenly login-social my-1" htmlFor="">
                    <a className="nav-link" href="https://www.facebook.com/truongnv97.haui/" title="Facebook"
                        target="_blank"><FaFacebookF /></a>
                    <a className="nav-link" href="https://twitter.com/Truong70942537" title="Twitter"
                        target="_blank"><FaTwitter /></a>
                    <a className="nav-link" href="https://www.instagram.com/vitconlonton1997/"
                        title="Instagram"><FaInstagram /></a>
                    <a className="nav-link" href="https://www.google.com/" title="Facebook"><FaGooglePlusG /></a>
                    <a className="nav-link" href="#"><FaRss /></a>
                </label>

            </div>
        </div>
    )
}

export default Login