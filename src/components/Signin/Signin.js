import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
// import backgroundImg from '../Assets/img/bg.png';
import googleIcon from '../Assets/icons/google-removebg-preview.png';
import facebookIcon from '../Assets/icons/facebook-removebg-preview.png';
import githubIcon from '../Assets/icons/github-removebg-preview.png';

const Signin = () => {
    const [userEmail, setUserEmail] = useState(null)
    const { signinEmailAndPassword, googleSignIn, facebookSignIn, githubSignIn, currentUser, loading, forgotPassword } = useContext(AuthContext);

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
            .catch(error => {
                const errorMessage = error.message;
                alert(errorMessage);
                form.reset();
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                alert('successfully login')
            })
            .catch(error => {
                const errorMessage = error.message;
                alert(errorMessage);
            })
    }
    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(() => {
                alert('Successfully login!')
            })
            .catch(error => {
                const errorMessage = error.message;
                alert(errorMessage);
            })
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(() => {
                alert('Successfully login');
            })
            .catch(error => {
                const errorMessage = error.message;
                alert(errorMessage);
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
                            <div className=" flex justify-center items-center relative ">
                                <img onClick={handleGoogleSignIn} className='w-24 h-24 mr-20 cursor-pointer	' src={googleIcon} alt="" />
                                <img onClick={handleFacebookSignIn} className='w-22 h-11 absolute ml-7 pointer-events-auto cursor-pointer' src={facebookIcon} alt="" />
                                <img onClick={handleGithubSignIn} className='w-10 h-10 cursor-pointer' src={githubIcon} alt="" />
                            </div>
                            <p>New user? <Link className='btn btn-link' to={'/signup'}>Signup</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;