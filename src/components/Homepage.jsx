import React from 'react';
import saraswatiji from '../Images/saraswati_mata_ji.png';
import aloksir from '../Images/alok_sir.jpg';
import renukamam from '../Images/verma_mam.png';



const Homepage = () => {
    return (
        <>
        {/* Hero Section */}
        <div className='h-[29rem] grid grid-cols-1 md:grid-cols-2'>
            <div className="col-span-1 flex justify-center items-center md:items-start md:pl-10 flex-col">
                <img src={saraswatiji} alt="" className='opacity-25 md:hidden' />
                <div className='h-full flex justify-center items-center md:items-start flex-col -translate-y-72 md:-translate-y-0'>
                    <h1 className='text-4xl mb-2 text-center md:text-left'>Renuka Music Academy</h1>
                    <p className='text-center md:text-left px-4 md:px-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, qui facilis cumque, accusantium officiis velit fugiat ullam porro aliquid quis mollitia suscipit incidunt, beatae nulla ab illo eum modi! At.</p>
                </div>
            </div>
            <div className='col-span-1 md:flex justify-center items-center hidden'>
                <img src={saraswatiji} alt="SaraswatiJi" className='object-fill' />
            </div>
        </div>


        {/* Introduction */}
        {/* Sir */}
        <div className='flex justify-center items-center mt-10 my-5'>
            <div className='mx-3 sm:mx-4 md:mx-7 lg:mx-32 md:min-h-72 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 max-w-lg md:max-w-none bg-white shadow-3xl rounded-2xl md:bg-none md:shadow-none md:rounded-none'>
                <div className='col-span-3 h-auto flex justify-center items-center my-3 md:my-0'>
                    <img src={aloksir} alt="" className='w-52 md:w-96 object-cover rounded-full' />
                </div>
                <div className='col-span-3 h-full p-4 md:bg-white md:shadow-3xl md:rounded-3xl'>
                    <h1 className='text-3xl font-bold mb-1 text-center md:text-left'>Alok Verma Sir</h1>
                    <p className='text-slate-500 text-center md:text-left'>Teacher of Classical Music, Lite Music</p>
                    <p className='text-slate-800 mt-2 text-center md:text-left md:leading-8 text-md md:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, doloremque. Possimus eaque fugiat ab non deserunt. Enim temporibus, pariatur recusandae praesentium ipsa facere magnam dolorum, totam minus nam ipsum optio expedita quidem id inventore tempora in consequatur laudantium, eum a. Quam nihil praesentium quidem sapiente omnis esse dolorem maxime ab, fugiat tempora iure totam consequuntur quisquam libero exercitationem, error a iste beatae eum amet. Deleniti impedit laudantium tempora quibusdam repellendus maxime veniam? Repellendus qui iste labore temporibus est! Dicta, repellat?</p>
                </div>
            </div>
        </div>
        {/* Ma'am */}
        <div className='flex justify-center items-center mt-10 my-5'>
            <div className='mx-3 sm:mx-4 md:mx-7 lg:mx-32 md:min-h-72 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 max-w-lg md:max-w-none bg-white shadow-3xl rounded-2xl md:bg-none md:shadow-none md:rounded-none'>
                <div className='col-span-3 h-full p-4 md:bg-white md:shadow-3xl md:rounded-3xl order-2 md:order-1'>
                    <h1 className='text-3xl font-bold mb-1 text-center md:text-left'>Renuka Verma Ma'am</h1>
                    <p className='text-slate-500 text-center md:text-left'>Teacher of Classical Music, Lite Music</p>
                    <p className='text-slate-800 mt-2 text-center md:text-left md:leading-8 text-md md:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, doloremque. Possimus eaque fugiat ab non deserunt. Enim temporibus, pariatur recusandae praesentium ipsa facere magnam dolorum, totam minus nam ipsum optio expedita quidem id inventore tempora in consequatur laudantium, eum a. Quam nihil praesentium quidem sapiente omnis esse dolorem maxime ab, fugiat tempora iure totam consequuntur quisquam libero exercitationem, error a iste beatae eum amet. Deleniti impedit laudantium tempora quibusdam repellendus maxime veniam? Repellendus qui iste labore temporibus est! Dicta, repellat?</p>
                </div>
                <div className='col-span-3 h-auto flex justify-center items-center order-1 md:order-2 my-3 md:my-0'>
                    <img src={renukamam} alt="" className='w-52 md:w-96 object-cover rounded-full' />
                </div>
            </div>
        </div>


        {/* Learning */}
        <h1 className='text-2xl md:text-3xl text-center mt-28'>Let's Learn Something About Indian Music</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-2 sm:mx-4 md:mx-7 lg:mx-32 mt-10 justify-items-center'>
            <div className='col-span-1 bg-white shadow-3xl p-4 flex flex-col justify-start items-center rounded-2xl max-w-lg md:max-w-none'>
                <h1 className='text-lg font-bold text-center'>Q:- What is Western Classical Music ?</h1>
                <p className='text-center mt-4'>Indian classical music's magic is primarily experienced with different melodies constructed within the framework of the ragas, while Western classical music's magic lies to a great extent in polyphonic composition, where counterpoint, harmony, and the texture created using multiple voices is critical.</p>
            </div>
            <div className='col-span-1 bg-white shadow-3xl p-4 flex flex-col justify-start items-center rounded-2xl max-w-lg md:max-w-none'>
                <h1 className='text-lg font-bold text-center'>Q:- What is Raga in Indian Classical Music ?</h1>
                <p className='text-center mt-4'>Raga , also spelled rag (in northern India) or ragam (in southern India), (from Sanskrit, meaning “colour” or “passion”), in the classical music of India, Bangladesh, and Pakistan, a melodic framework for improvisation and composition.</p>
            </div>
            <div className='col-span-1 bg-white shadow-3xl p-4 flex flex-col justify-start items-center rounded-2xl max-w-lg md:max-w-none'>
                <h1 className='text-lg font-bold text-center'>Q:- What is Shruti in Indian Classical Music ?</h1>
                <p className='text-center mt-4'>Shruti or śruti[ɕrʊtɪ] is a Sanskrit word, found in the Vedic texts of Hinduism where it means lyrics and "what is heard" in general. A shruti is the smallest gradation of pitch available, while a swara is the selected pitches from which the musician constructs the scales, melodies and ragas.</p>
            </div>
        </div>


        <div className='h-52'></div>
        </>
    );
};

export default Homepage;
