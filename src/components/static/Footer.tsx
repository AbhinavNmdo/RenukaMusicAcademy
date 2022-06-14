import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    const location = useLocation();
    return (
        <>
        <div className='bg-slate-100 flex justify-center items-center flex-col'>
            <h1 className='font-[Courgette] text-3xl mt-5 mb-3'><span className='text-[#FF6F0B]'>Follow</span> Us On</h1>
            <div className='flex justify-center items-center gap-5 mt-4'>
                <a href="https://www.facebook.com/profile.php?id=100006493741383" target="_blank">
                    <i className="bi bi-facebook text-2xl text-slate-800 border border-[#FF6F0B] p-2 rounded-full px-3"></i>
                </a>
                <a href="https://instagram.com/vermaalok880?igshid=YmMyMTA2M2Y=" target="_blank">
                    <i className="bi bi-instagram text-2xl text-slate-800 border border-[#FF6F0B] p-2 rounded-full px-3"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCAsCi0R5J5WRmWK14vRqR_g" target="_blank">
                    <i className="bi bi-youtube text-2xl text-slate-800 border border-[#FF6F0B] p-2 rounded-full px-3"></i>
                </a>
            </div>
            <div className='flex justify-center items-center gap-5 md:gap-10 lg:gap-14 mt-7 mb-4'>
                {(()=>{
                    if(location.pathname !== '/'){
                        return(
                            <Link to="/" className='font-bold'>Home</Link>
                        )
                    }else if(location.pathname === '/'){
                        return(
                            <HashLink to="#home" className='font-bold'>Home</HashLink>
                        )
                    }
                })()}
                <a href="#about" className='font-bold'>About</a>
                <a href="#courses" className='font-bold'>Courses</a>
                <Link to="/contact" className='font-bold'>Contact</Link>
            </div>
            <div className="flex justify-center items-center mb-4 mt-4">
                <a href='tel:7828566675'>Website Developer: <span className='font-bold '>Abhinav Namdeo</span></a>
            </div>
        </div>
        </>
    )
}

export default Footer