import React from 'react'
import placeholder from '../Images/placeholder.png';

const Gallery = () => {
    return (
        <>
        <h1>Gallery</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3 sm:mx-6 md:mx-9 lg:mx-32'>
            <div className='flex justify-center items-center'>
                <img src={placeholder} alt="Image" className='w-full h-full' />
            </div>
        </div>
        </>
    )
}

export default Gallery;