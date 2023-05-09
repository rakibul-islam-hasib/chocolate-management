import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Coffees = () => {
    document.title = 'All Coffee';
    const coffeesLoaded = useLoaderData();
    const [coffees, setCoffees] = useState(coffeesLoaded);
    // console.log(coffees)
    const [deleted, setDeleted] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/coffees')
            .then(res => res.json())
            .then(data => {
                setCoffees(data)
                setDeleted(false)
            })
    }, [deleted])
    return (
        <div className='w-[85%] mx-auto'>
            <h1 className='text-2xl font-bold text-center text-blue-600 my-6'>Total Coffee : {coffees?.length}</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    coffees.map(item => <CoffeeCard key={item._id} setDeleted={setDeleted} coffee={item} />)
                }
            </div>
        </div>
    );
};

export default Coffees;