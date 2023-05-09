import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee  , setDeleted }) => {
   
    // console.log(coffee)
    const { name, chef_name, supplier, taste, category, details, img, _id } = coffee;
    const navigate = useNavigate(); 
    // ! delete a  coffee 
    const handelDelete = _id => {
        // console.log(_id)
        fetch(`http://localhost:5000/coffees/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            setDeleted(true); 
                        }
                    })
                }
            })
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='w-[180px] h-[250px]'><img src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}!</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>navigate(`/coffees/details/${_id}`)} className="btn btn-primary">View</button>
                        <button onClick={()=>navigate(`/coffees/${_id}`)} className="btn btn-secondary">Update</button>
                        <button onClick={() => handelDelete(_id)} className="btn btn-accent">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;