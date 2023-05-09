import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const loadedData = useLoaderData();
    // console.log(loadedData)
    const handelFormSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const chef_name = e.target.chef_name.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const img = e.target.photo.value;
        const allInfo = { name, chef_name, supplier, taste, category, details, img };
        fetch(`http://localhost:5000/coffees/${loadedData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Coffee is added to our database!',
                        'success'
                    )
                    e.target.reset()
                }
                else {
                    Swal.fire(
                        'Aww..!',
                        'Something is wrong . Please change something..! ',
                        'error'
                    )
                }
            })
    }

    const { name, chef_name, supplier, taste, category, details, img, _id } = loadedData;

    return (
        <div className=' px-[100px] w-full bg-orange-200'>
            <form onSubmit={handelFormSubmit} className='py-4 '>
                {/* Name part  */}
                <div className="w-full gap-4 mb-3    md:flex ">
                    <span className='w-full'>
                        <h1 className='text-[20px] mb-2 ml-2 font-bold'>Name </h1>
                        <input type="text" name='name' required placeholder="Coffee Name" defaultValue={name} className="input input-primary w-full input-bordered" />
                    </span>
                    <span className='w-full'>
                        <h1 className='text-[20px] mb-2 ml-2 font-bold'>Chef </h1>
                        <input type="text" name='chef_name' required placeholder="Coffee chef name" defaultValue={chef_name} className="input input-bordered input-primary w-full" />
                    </span>
                </div>
                {/* Supplier taste   */}
                <div className="w-full gap-4 mb-3    md:flex ">
                    <span className='w-full'>
                        <h1 className='text-[20px] mb-2 ml-2 font-bold'> Supplier </h1>
                        <input type="text" defaultValue={supplier} name='supplier' required placeholder="Supplier name" className="input input-primary w-full input-bordered" />
                    </span>
                    <span className='w-full'>
                        <h1 className='text-[20px] mb-2 ml-2 font-bold'>Taste </h1>
                        <input type="text" name='taste' required defaultValue={taste} placeholder="Coffee taste" className="input input-bordered input-primary w-full" />
                    </span>
                </div>
                {/* category details  */}
                <div className="w-full gap-4 mb-3    md:flex ">
                    <span className='w-full'>
                        <h1 className='text-[20px] mb-2 ml-2 font-bold'>Category</h1>
                        <input type="text" name='category' defaultValue={category} required placeholder="Category" className="input input-primary w-full input-bordered" />
                    </span>
                    <span className='w-full'>
                        <h1 className='text-[20px] mb-2 ml-2 font-bold'>Details </h1>
                        <input type="text" name='details' defaultValue={details} required placeholder="Details" className="input input-bordered input-primary w-full" />
                    </span>
                </div>
                {/* Photo URL */}
                <span className='w-full'>
                    <h1 className='text-[20px] mb-2 ml-2 font-bold'>Photo URL </h1>
                    <input type="text" defaultValue={img} name='photo' required placeholder="Photo URL" className="input input-bordered input-primary w-full" />
                </span>
                <button className='btn btn-block btn-primary mt-6'>Add Coffee</button>
            </form>
        </div>
    );
};

export default Update;