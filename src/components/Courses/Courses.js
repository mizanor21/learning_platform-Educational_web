import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='courses flex container mx-auto my-10'>
            <div className="sidebar w-96 min-h-screen mr-2 mb-2 rounded-lg">
                <div className="">
                    <h1 className='font-bold text-xl  mt-5'>All course: {courses.length}</h1>
                    <hr />
                    {
                        courses.map(course => <p className='text-start' key={course.id}>
                            <Link to={`/details/${course.course_id}`} className='btn btn-link'>{course.title}</Link>
                        </p>
                        )
                    }
                </div>
            </div>
            <div className="card-container  w-full min-h-screen rounded-lg">
                <div className="courses-card  grid grid-cols-3 gap-3">
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;