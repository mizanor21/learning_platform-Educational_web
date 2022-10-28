import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumPage = () => {

    const handleConfirm = () => {
        alert('Congratulation, successfully premium access!!')
    }
    const premium = useLoaderData();
    return (
        <div className='flex justify-center items-center min-h-screen'>

            <div className="my-10">
                <img src={premium.img} alt="" />
                <h3 className='font-extrabold text-5xl'>{premium.title}</h3>
                <button onClick={handleConfirm} className="btn btn-outline btn-primary">Confirm</button>
            </div>
        </div>
    );
};

export default PremiumPage;