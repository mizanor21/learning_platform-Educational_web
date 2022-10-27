import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    // console.log(course)
    return (
        <div className='flex justify-center container mx-auto my-10'>
            <div className="">
                <img className='rounded-lg w-full' src={course.img} alt="" />
                <div className="">
                    <h3 className='font-bold text-2xl'>{course.title}</h3>
                    <Link></Link>
                </div>
                <p>{course.details}</p>
                <div className="text-end mt-10">
                    <Link to={'/premium'}>
                        <button className="btn btn-outline btn-primary">Get premium access</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;