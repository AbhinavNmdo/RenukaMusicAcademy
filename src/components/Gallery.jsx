import React from 'react';

const Gallery = () => {
    return (
        <>
        <h1 className='text-4xl font-bold my-10 text-center'>Gallery</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 mx-2 sm:mx-4 md:mx-7 lg:mx-32 justify-items-center gap-7'>

            {/* Column span 1 */}
            <div className='col-span-1 flex justify-center items-center flex-col'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/B6q6TS9SF-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='rounded-2xl'></iframe>
            </div>

            {/* Column span 1 */}
            <div className='col-span-1 flex justify-center items-center flex-col'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/B6q6TS9SF-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='rounded-2xl'></iframe>
            </div>

        </div>
        </>
    );
};

export default Gallery;
