import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate(); 
    return (
        <>
            <div className="navbar w-[90%] mx-auto">
                <div className="flex-1">
                    <a onClick={()=>navigate('/')} className="btn btn-ghost normal-case text-xl">Coffee Shop</a>
                </div>
                <div className="flex-none">
                    <ul className="menu gap-4 font-bold menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/coffees'}>Coffees</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                      
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;