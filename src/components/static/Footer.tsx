import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <div className='bg-slate-100 flex justify-center items-center flex-col'>
            <h1 className='font-[Courgette] text-3xl mt-5 mb-3'><span className='text-[#FF6F0B]'>Follow</span> Us On</h1>
            <div className='flex justify-center items-center gap-5 mt-4'>
                <a href="">
                    <i className="bi bi-facebook text-2xl text-slate-800 border border-[#FF6F0B] p-2 rounded-full px-3"></i>
                </a>
                <a href="">
                    <i className="bi bi-instagram text-2xl text-slate-800 border border-[#FF6F0B] p-2 rounded-full px-3"></i>
                </a>
                <a href="">
                    <i className="bi bi-youtube text-2xl text-slate-800 border border-[#FF6F0B] p-2 rounded-full px-3"></i>
                </a>
            </div>
            <div className='flex justify-center items-center gap-14 mt-7 mb-4'>
                <Link to="/" className='font-bold'>Home</Link>
                <a href="#about" className='font-bold'>About</a>
                <a href="#courses" className='font-bold'>Courses</a>
                <Link to="/contact" className='font-bold'>Contact</Link>
            </div>
        </div>
        </>
    )
}

export default Footer