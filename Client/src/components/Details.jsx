import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    document.title = 'Details'
    const data = useLoaderData(); 
    // console.log(data)
    const {img , name} = data ; 
    return (
        <div className='w-[80%] mx-auto '>
            <div className="w-[50%] mx-auto">
                <img src={img} className='mx-auto' alt="" />
            </div>
            <div className="text-center">
                <h1 className='text-3xl font-bold '>{name}</h1>
            </div>
        </div>
    );
};

export default Details;