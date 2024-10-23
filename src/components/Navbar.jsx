// src/Navbar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import toast from 'react-hot-toast';

const Navbar = () => {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext);

    const logOutHandler = () => {
        localStorage.removeItem("token");
        navigate("/");
        setIsAuthenticated(false);
        toast.success("Logged out.");
    };

    return (
        <nav className="w-11/12 max-w-maxContent mx-auto flex justify-between items-center p-4 md:p-6 text-black border-b border-gray-200">
            <Link to="/">
                <div className='flex items-center space-x-2'>
                    <h1 className='text-xl md:text-2xl font-bold tracking-wide font-bricolage'>DevXpress</h1>
                </div>
            </Link>

            <ul className="hidden md:flex space-x-8">
                    <li className="hover:text-[#257180] transition duration-300">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="hover:text-[#257180] transition duration-300">
                        <Link to="/about us">About Us</Link>
                    </li>
                    <li className="hover:text-[#257180] transition duration-300">
                        <Link to="/testimonial">Testimonial</Link>
                    </li>
                    <li className="hover:text-[#257180] transition duration-300">
                        <Link to="/faq">FAQ</Link>
                    </li>
            </ul>

            <div className="space-x-4">
                    <button className="border font-bricolage border-[#257180] text-[#257180] px-6 py-2 rounded-full hover:bg-[#eaf6f5] transition duration-300" onClick={logOutHandler}>
                        Sign In
                    </button>
                    <button className="bg-[#257180] font-bricolage text-white px-6 py-2 rounded-full hover:bg-[#1c5560] transition duration-300" onClick={logOutHandler}>
                        Sign Up
                    </button>
            </div>
        </nav>
    );
};

export default Navbar;
