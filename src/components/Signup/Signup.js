import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const Signup = () => {
    const { signupWithEmailAndPassword, emailVarification } = useContext(AuthContext)
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, email, password);
        signupWithEmailAndPassword(email, password)
            .then(() => {
                alert('Please check your email (Maybe mail send spam folder)!. Verify email...');
                varifyEmail();
                form.reset();
            })
            .catch(error => {
                const errorMessage = error.message
                alert('error ', errorMessage);

            })
    }
    const varifyEmail = () => {
        emailVarification()
            .then(() => {

            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Signup Now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name*</span>
                                </label>
                                <input type="text" name='name' placeholder="Full name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password*</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;