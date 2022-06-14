import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200
        });
    }, []);
    
    return (
        <>
        <div className='relative flex justify-center items-center flex-col-reverse mt-14'>

            <iframe className='contrast-50 grayscale w-full h-screen' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1834.0212679795268!2d79.91235587848266!3d23.1686475904147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1e7d58153f7%3A0x76e5573f4b2071cb!2sRenuka%20Music%20Academy%20Jabalpur%20MP!5e0!3m2!1sen!2sin!4v1644740620900!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>

            <div className='md:h-screen flex mmd:justify-center justify-end items-center w-full md:absolute bottom-0 right-0 mmd:my-16'>
                <div className='bg-white rounded-2xl flex justify-center items-start max-w-md md:mr-16 p-4 flex-col shadow-3xl'>
                    <h1 className='font-[Courgette] text-3xl mb-7 m-auto'><span className='text-[#FF6F0B]'>Contact</span> Information</h1>
                    <div className='flex flex-col justify-start items-start'>
                        <h1 className='font-[Courgette] text-[#FF6F0B] text-xl'>Address: </h1>
                        <h1 className='pl-20'>2324, Prabhat Colony, Labour Chowk, Madhya Pradesh 482002</h1>
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <h1 className='font-[Courgette] text-[#FF6F0B] text-xl text-left'>Phone: </h1>
                        <h1 className='pl-20'><span className='text-[#FF6F0B]'>Alok Sir :</span> <a href="tel:+919301202682">+919301202682</a></h1>
                        <h1 className='pl-20'><span className='text-[#FF6F0B]'>Verma Ma'am :</span> <a href="tel:+919329441985">+919329441985</a></h1>
                    </div>
                    {/* <div className='flex flex-col justify-start items-start'>
                        <h1 className='font-[Courgette] text-[#FF6F0B] text-xl'>Email: </h1>
                        <h1 className='pl-20'><a href="mailto:abhaynam22@gmail.com">alokvermasir@gmail.com</a></h1>
                    </div> */}
                </div>
            </div>

        </div>
        </>
    )
}

export default Contact