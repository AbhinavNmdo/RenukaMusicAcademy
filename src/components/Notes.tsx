import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Notes = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200
        });
    }, []);
    
    return (
        <>
        <h1 data-aos="slide-right" className="text-4xl md:text-5xl font-[Courgette] font-bold text-center mt-16 mb-10">Notes</h1>

        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-2 sm:mx-4 md:mx-7 lg:mx-32 mt-6 justify-items-center mb-14'>
            <div data-aos="zoom-in" className="flex justify-center items-center flex-col bg-white rounded-2xl shadow-3xl h-52 w-full px-5 pb-3">
                <div className='text-center mb-5'>
                    <h1 className='text-3xl mb-[0.20rem]'>Sangeet Kala Madhyama</h1>
                    <h1 className='text-lg'>(3<sup>rd</sup> Year)</h1>
                </div>
                <a target="_blank" href='https://firebasestorage.googleapis.com/v0/b/renukamusic-academy.appspot.com/o/Madhyama%20third%20year.pdf?alt=media&token=66cfdea8-7939-485d-988e-38d6c870f44c' className='text-white bg-[#FF6F0B] w-full h-10 rounded-xl hover:bg-[#ff6a00] hover:scale-95 transition-all duration-300 flex justify-center items-center'>Download PDF</a>
            </div>
            <div data-aos="zoom-in" className="flex justify-center items-center flex-col bg-white rounded-2xl shadow-3xl h-52 w-full px-5 pb-3">
                <div className='text-center mb-5'>
                    <h1 className='text-3xl mb-[0.20rem]'>Sangeet Kala Madhyama</h1>
                    <h1 className='text-lg'>(4<sup>th</sup> Year)</h1>
                </div>
                <a target="_blank" href='https://firebasestorage.googleapis.com/v0/b/renukamusic-academy.appspot.com/o/Madhyama%20fourth%20year.pdf?alt=media&token=f7fdbf12-44f3-4f9a-8c1c-9605bd51275e' className='text-white bg-[#FF6F0B] w-full h-10 rounded-xl hover:bg-[#ff6a00] hover:scale-95 transition-all duration-300 flex justify-center items-center'>Download PDF</a>
            </div>
            <div data-aos="zoom-in" className="flex justify-center items-center flex-col bg-white rounded-2xl shadow-3xl h-52 w-full px-5 pb-3">
                <div className='text-center mb-5'>
                    <h1 className='text-3xl mb-[0.20rem]'>Sangeet Kala Vid</h1>
                    <h1 className='text-lg'>(5<sup>th</sup> Year)</h1>
                </div>
                <a target="_blank" href='https://firebasestorage.googleapis.com/v0/b/renukamusic-academy.appspot.com/o/Vid%20fifth%20year.pdf?alt=media&token=61ff8d0a-aa5b-45bd-908e-3dbb7b0bbfb3' className='text-white bg-[#FF6F0B] w-full h-10 rounded-xl hover:bg-[#ff6a00] hover:scale-95 transition-all duration-300 flex justify-center items-center'>Download PDF</a>
            </div>
            <div data-aos="zoom-in" className="flex justify-center items-center flex-col bg-white rounded-2xl shadow-3xl h-52 w-full px-5 pb-3">
                <div className='text-center mb-5'>
                    <h1 className='text-3xl mb-[0.20rem]'>Sangeet Kala Vid</h1>
                    <h1 className='text-lg'>(6<sup>th</sup> Year) Paper I</h1>
                </div>
                <a target="_blank" href='https://firebasestorage.googleapis.com/v0/b/renukamusic-academy.appspot.com/o/Vid%20sixth%20year%20paper%201.pdf?alt=media&token=953e7bb4-3402-42ce-abfe-fccd874d530b' className='text-white bg-[#FF6F0B] w-full h-10 rounded-xl hover:bg-[#ff6a00] hover:scale-95 transition-all duration-300 flex justify-center items-center'>Download PDF</a>
            </div>
            <div data-aos="zoom-in" className="flex justify-center items-center flex-col bg-white rounded-2xl shadow-3xl h-52 w-full px-5 pb-3">
                <div className='text-center mb-5'>
                    <h1 className='text-3xl mb-[0.20rem]'>Sangeet Kala Vid</h1>
                    <h1 className='text-lg'>(6<sup>th</sup> Year) Paper II</h1>
                </div>
                <a target="_blank" href='https://firebasestorage.googleapis.com/v0/b/renukamusic-academy.appspot.com/o/Vid%20sixth%20year%20paper%202.pdf?alt=media&token=14b17b0c-3051-4cfb-9049-60b7d9df8a89' className='text-white bg-[#FF6F0B] w-full h-10 rounded-xl hover:bg-[#ff6a00] hover:scale-95 transition-all duration-300 flex justify-center items-center'>Download PDF</a>
            </div>
            <div data-aos="zoom-in" className="flex justify-center items-center flex-col bg-white rounded-2xl shadow-3xl h-52 w-full px-5 pb-3">
                <div className='text-center mb-5'>
                    <h1 className='text-3xl mb-[0.20rem]'>Sangeet Kala Vid</h1>
                    <h1 className='text-lg'>(6<sup>th</sup> Year) (Verma sir)</h1>
                </div>
                <a target="_blank" href='https://firebasestorage.googleapis.com/v0/b/renukamusic-academy.appspot.com/o/Vid%20sixth%20year.pdf?alt=media&token=c467dc88-c402-4ec6-b942-286f76a26371' className='text-white bg-[#FF6F0B] w-full h-10 rounded-xl hover:bg-[#ff6a00] hover:scale-95 transition-all duration-300 flex justify-center items-center'>Download PDF</a>
            </div>
            <div data-aos="zoom-in" className="flex justify-center items-center flex-col bg-white rounded-2xl shadow-3xl h-52 w-full px-5 pb-3">
                <div className='text-center mb-5'>
                    <h1 className='text-3xl mb-[0.20rem]'>Sangeet Visharad</h1>
                    <h1 className='text-lg'>(Theory Book)</h1>
                </div>
                <a target="_blank" href='https://archive.org/details/in.ernet.dli.2015.442381/mode/2up' className='text-white bg-[#FF6F0B] w-full h-10 rounded-xl hover:bg-[#ff6a00] hover:scale-95 transition-all duration-300 flex justify-center items-center'>Open Link</a>
            </div>
        </div>
        </>
    );
};

export default Notes;
