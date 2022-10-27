import React from 'react';

const course = (props) => {
    const { title, img, details } = props.course;
    console.log(img)
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl ">
                <figure><img className='w-30 h-64' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className='text-xl font-bold'>{title}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default course;