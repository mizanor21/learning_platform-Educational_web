import React from 'react';
import { Link } from 'react-router-dom';

const course = (props) => {
    const { course_id, title, img } = props.course;
    console.log(img)
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl ">
                <figure><img className='w-30 h-64' src={img} alt="img not found" /></figure>
                <div className="card-body">
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${course_id}`}><button className="btn btn-primary">Explore</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default course;