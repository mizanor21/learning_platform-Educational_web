import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Signin = () => {
    const [userEmail, setUserEmail] = useState(null)
    const { signinEmailAndPassword, forgotPassword } = useContext(AuthContext);

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signinEmailAndPassword(email, password)
            .then(() => {
                alert('Successfully login!');
                form.reset();
            })
            .catch((error) => {
                alert('error', error);
                form.reset();
            })
    }
    const handleBlur = (event) => {
        const email = event.target.value;
        setUserEmail(email);
    }
    const handleForgotPassword = () => {
        if (!userEmail) {
            alert('Please enter your email');
            return;
        }
        forgotPassword(userEmail)
            .then(() => {
                alert('Please check your. Then set new password.');
            })
            .catch(error => {
                const errorMessage = error.message;
                alert(errorMessage);
            })
    }
    return (

        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input onBlur={handleBlur} type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password*</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label w-20">
                                    <button onClick={handleForgotPassword} className="m-0 p-0 btn btn-active btn-link hover:text-red-600">Forgot password?</button>
                                </label>
                            </div>
                            <div className="form-control mb-5">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <hr />
                            <p>Or following use method</p>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;