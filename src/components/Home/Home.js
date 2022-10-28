import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold">Hello there</h1>
                        <p className="mb-5">“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” </p>
                        <Link to={'/courses'}>
                            <button className="btn glass">All Courses</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;