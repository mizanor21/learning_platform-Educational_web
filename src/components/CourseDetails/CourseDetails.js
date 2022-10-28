import React from 'react';
import Pdf from "react-to-pdf";

import { Link, useLoaderData } from 'react-router-dom';
const ref = React.createRef();

const CourseDetails = () => {
    const course = useLoaderData();
    // console.log(course)
    return (
        <div className='flex justify-center container mx-auto my-10'>

            <div ref={ref} className="">
                <img className='rounded-lg w-full' src={course.img} alt="img not found" />
                <div className="flex justify-between my-5">
                    <h3 className='font-bold text-2xl'>{course.title}</h3>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button className="btn btn-outline btn-sm btn-success" onClick={toPdf}>Download Pdf</button>}
                    </Pdf>
                </div>
                <p>{course.details}</p>
                <div className="text-end mt-10">
                    <Link to={`/premium/${course.course_id}`}>
                        <button className="btn btn-outline btn-primary">Get premium access</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;