import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/img/logo3.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='bg-gray-400'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/home'}>Home</Link></li>
                            <li><Link to={'/courses'}>Courses</Link></li>
                            <li><Link to={'/blog'}>Blog</Link></li>
                            <li><Link to={'/faq'}>FAQ</Link></li>
                            <hr />
                            <div className="text-center my-3">
                                <Link to={'/signin'}>
                                    <button className="btn btn-outline btn-primary mr-3">Signin</button>
                                </Link>
                                <Link to={'/signup'}>
                                    <button className="btn btn-outline btn-secondary">Signup</button>
                                </Link>
                                <input type="checkbox" className="toggle mt-3" />

                            </div>
                        </ul>
                    </div>
                    <Link to={'/'} className="flex items-center justify-center">
                        <img className='w-24 ' src={logo} alt="logo not found" />
                        <Link to={'/'} className="btn btn-ghost normal-case text-xl p-0 m-0">Edu<span className='text-amber-400'>Camp</span></Link>

                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-bold p-0">
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/courses'}>Courses</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li><Link to={'/faq'}>FAQ</Link></li>
                    </ul>
                </div>

                <div className="navbar-end signIn">
                    <Link to={'/signin'}>
                        <button className="btn glass mr-3">Signin</button>
                    </Link>
                    <Link to={'/signup'}>
                        <button className="btn glass mr-3">Signup</button>
                    </Link>
                    <input type="checkbox" className="toggle" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;