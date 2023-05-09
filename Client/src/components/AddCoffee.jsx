import React from 'react';
import Swal from 'sweetalert2'
const AddCoffee = () => {
    document.title = 'Home'
    const handelFormSubmit = e => { 
        e.preventDefault(); 
        const name = e.target.name.value ; 
        const chef_name = e.target.chef_name.value ; 
        const supplier = e.target.supplier.value ; 
        const taste = e.target.taste.value ; 
        const category = e.target.category.value ; 
        const details = e.target.details.value ; 
        const img = e.target.photo.value ; 
        const allInfo = {name , chef_name , supplier , taste , category , details , img }; 
        // console.log(allInfo) 
        fetch('http://localhost:5000/coffees' , {
            method: 'POST', 
            headers: { 
                'content-type' : 'application/json'
            },
            body : JSON.stringify(allInfo)
        })
        .then(res => res.json())
        .then(data => { 
            // console.log(data)
            if (data.insertedId) {
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
                    'Something is wrong..!',
                    'error'
                  )
            }
        })
    }
    return (
        <div className=' px-[100px] w-full bg-orange-200'>
            <form onSubmit={handelFormSubmit} className='py-4 '>
                {/* Name part  */}
                <div className="w-full gap-4 mb-3    md:flex ">
                    <span className='w-full'>
                        <h1 className='text-[20px] mb-2 ml-2 font-bold'>Name </h1>
                        <input type="text" name='name' required placeholder="Coffee Name" className="input input-primary w-full input-bordered" />
                    </span>
                    <span className='w-full'>
                        <h1 className='text-[20px] mb-2 ml-2 font-bold'>Chef </h1>
                        <input type="text" name='chef_name' required placeholder="Coffee chef name" className="input input-bordered input-primary w-full" />
                    </span>
                </div>
                {/* Supplier taste   */}
                <div className="w-full gap-4 mb-3    md:flex ">
                    <span className='w-full'>
                        <h1 className='text-[20px] mb-2 ml-2 font-bold'> Supplier </h1>
                        <input type="text" name='supplier' required placeholder="Supplier name" className="input input-primary w-full input-bordered" />
                    </span>
                    <span className='w-full'>
                        <h1 className='text-[20px] mb-2 ml-2 font-bold'>Taste </h1>
                        <input type="text" name='taste' required placeholder="Coffee taste" className="input input-bordered input-primary w-full" />
                    </span>
                </div>
                {/* category details  */}
                <div className="w-full gap-4 mb-3    md:flex ">
                    <span className='w-full'>
                        <h1 className='text-[20px] mb-2 ml-2 font-bold'>Category</h1>
                        <input type="text" name='category' required placeholder="Category" className="input input-primary w-full input-bordered" />
                    </span>
                    <span className='w-full'>
                        <h1 className='text-[20px] mb-2 ml-2 font-bold'>Details </h1>
                        <input type="text" name='details' required placeholder="Details" className="input input-bordered input-primary w-full" />
                    </span>
                </div>
                {/* Photo URL */}
                <span className='w-full'>
                    <h1 className='text-[20px] mb-2 ml-2 font-bold'>Photo URL </h1>
                    <input type="text" name='photo' required placeholder="Photo URL" className="input input-bordered input-primary w-full" />
                </span>
                <button className='btn btn-block btn-primary mt-6'>Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;