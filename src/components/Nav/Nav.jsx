import { NavLink } from 'react-router-dom';
import { RiMenu5Fill} from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import './Nav.css'
const Nav = () => {
    const [open,setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className='bg-yellow-200 py-2 ps-6'>
            <div className=' md:hidden'>
                <button onClick={handleClick} className='text-4xl text-black'>
                    {open ? <RxCross2></RxCross2> :  <RiMenu5Fill></RiMenu5Fill>}
                </button>
            </div>
            <nav className={`font-semibold duration-1000 absolute md:static ms-10 text-black ${open ? 'top-16' : '-top-60'}`}>
                <NavLink className='bg-yellow-100 py-1 mr-5 mb-1 block md:inline-block px-5 rounded hover:bg-yellow-200 duration-500 hover:text-blue-500' to="/">Home</NavLink>
                <NavLink className='bg-yellow-100 py-1 mr-5 mb-1 block md:inline-block px-5 rounded hover:bg-yellow-200 duration-500 hover:text-blue-500' to="/about">About</NavLink>
                <NavLink className='bg-yellow-100 py-1 mr-5 mb-1 block md:inline-block px-5 rounded hover:bg-yellow-200 duration-500 hover:text-blue-500' to="/contact">Contact</NavLink>
                <NavLink className='bg-yellow-100 py-1 mr-5 mb-1 block md:inline-block px-5 rounded hover:bg-yellow-200 duration-500 hover:text-blue-500' to="/foods">Our Food</NavLink>
            </nav>
        </div>
    );
};

export default Nav;