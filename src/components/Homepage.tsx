import React, { useEffect } from 'react';
import saraswatiji from '../Images/saraswati_mata_ji_3.png';
import aloksir from '../Images/alok_sir.jpg';
import renukamam from '../Images/verma_mam.png';
import tabla from '../Images/tabla.png';
import tanpura from '../Images/tanpura.png';
import flute from '../Images/flute.png';
import lataJi from '../Images/Lata-Mangeshkar.jpg';
import raviJi from '../Images/pandit_ravi_shankar.jpg';
import zakirJi from '../Images/ustad_zakir_husain.jpg';
import quote from '../Images/quotes.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 200
        });
        console.log(window.scrollY);
    }, []);
    
    return (
        <>
        {/* Hero Section */}
        <div className="h-[29rem] grid grid-cols-1 md:grid-cols-2 md:bg-[url(Images/notes-static-opacity2.png)] bg-no-repeat bg-left bg-opacity-0 mt-14">
            <div className="col-span-1 flex justify-center items-center md:items-start md:pl-10 flex-col">
            <img src={saraswatiji} alt="" className="opacity-25 md:hidden" />
            <div className="h-full flex justify-center items-center md:items-start flex-col -translate-y-72 md:-translate-y-0">
                <h1
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-offset="-600"
                className="text-4xl md:text-5xl mb-2 text-center md:text-left font-[Courgette]"
                >
                <span className="text-[#FF6F0B] text-5xl md:text-6xl block md:inline-block underline">
                    Renuka
                </span>{" "}
                Music Academy
                </h1>
                <p
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-delay="200"
                data-aos-offset="-600"
                className="text-center text-sm md:text-base md:text-left px-4 md:px-0 text-slate-900"
                >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                laboriosam, unde temporibus in doloribus quidem beatae, ipsa sequi
                fugiat expedita qui soluta corporis sint dolores facere fugit
                illo! Est, minus!
                </p>
            </div>
            </div>
            <div className="col-span-1 md:flex justify-center items-center hidden">
            <img src={saraswatiji} alt="SaraswatiJi" className="object-fill" />
            </div>
        </div>


        {/* Quotes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-32 gap-16 lg:gap-14 ml-[3rem] sm:ml-[3rem] md:ml-[3rem] mx-3 sm:mx-4 md:mx-7 lg:mx-32">

            {/* Card */}
            <div data-aos="zoom-in" data-aos-offset="100" className="flex justify-center items-end relative bg-slate-300 shadow-3xl rounded-2xl p-5 max-w-sm md:max-w-none flex-col">
                <p className='whitespace-pre-wrap text-xl text-slate-700'>                संगीत आत्मा की आवाज है, गायक केवल शब्दों को बोलता है, भावनाएं अंतरात्मा की आवाज बनती है। ।</p>
                <img src={lataJi} alt="LataJi" className='w-24 rounded-full ring-4 ring-[#FF6F0B] ring-offset-2 absolute -top-12 -left-10 whitespace-pre' />
                <img src={quote} alt="Quote" className='absolute top-3 left-16 w-5' />
                <p className='text-right text-slate-700 mt-2'>-- Lata Mangeshkar Ji</p>
            </div>

            {/* Card */}
            <div data-aos="zoom-in" data-aos-offset="100" className="flex justify-center items-end relative bg-slate-300 shadow-3xl rounded-2xl p-5 max-w-sm md:max-w-none flex-col">
                <p className='whitespace-pre-wrap text-xl text-slate-700'>                The Magic Happens only when the artist serves with love and the listener receives with the same spirit.</p>
                <img src={raviJi} alt="LataJi" className='w-24 rounded-full ring-4 ring-[#FF6F0B] ring-offset-2 absolute -top-12 -left-10 whitespace-pre' />
                <img src={quote} alt="Quote" className='absolute top-3 left-16 w-5' />
                <p className='text-right text-slate-700 mt-2'>-- Pandit Ravi Shankar</p>
            </div>

            {/* Card */}
            <div data-aos="zoom-in" data-aos-offset="100" className="flex justify-center items-end relative bg-slate-300 shadow-3xl rounded-2xl p-5 max-w-sm flex-col md:col-span-2 md:max-w-[50%] lg:col-span-1 lg:max-w-none">
                <p className='whitespace-pre-wrap text-xl text-slate-700'>                Each Instrument has a spirit that can guide you to say what they want to say. So that's what we are discovering with Tabla.</p>
                <img src={zakirJi} alt="LataJi" className='w-24 rounded-full ring-4 ring-[#FF6F0B] ring-offset-2 absolute -top-12 -left-10 whitespace-pre' />
                <img src={quote} alt="Quote" className='absolute top-3 left-16 w-5' />
                <p className='text-right text-slate-700 mt-2'>-- Ustad Zakir Hussain</p>
            </div>

        </div>


        {/* Introduction */}
        {/* Sir */}
        <div className="overflow-hidden mt-20">
            <div
            data-aos="fade-up-left"
            id="about"
            className="flex justify-center items-center mt-10 my-5"
            >
            <div className="mx-3 sm:mx-4 md:mx-7 lg:mx-32 md:min-h-72 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 max-w-lg md:max-w-none bg-[rgb(107, 191, 224)] shadow-3xl rounded-2xl md:bg-none md:shadow-none md:rounded-none">
                <div className="col-span-3 h-auto flex justify-center items-center mt-8 md:mt-0 my-3 md:my-0">
                <img
                    src={aloksir}
                    alt=""
                    className="w-52 md:w-96 object-cover rounded-[3rem] md:rounded-[6rem] ring-4 ring-[#FF6F0B] ring-offset-2"
                />
                </div>
                <div className="col-span-3 h-full p-4 md:bg-slate-300 md:shadow-3xl md:rounded-3xl">
                <h1 className="text-4xl font-bold mb-1 text-center md:text-left font-[Courgette]">
                    <span className="text-[#FF6F0B]">Alok</span> Verma Sir
                </h1>
                <p className="text-slate-500 text-center md:text-left">
                    Teacher of Classical Music, Lite Music
                </p>
                <p className="text-slate-800 mt-5 text-center md:text-left md:leading-8 text-md md:text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellat, doloremque. Possimus eaque fugiat ab non deserunt.
                    Enim temporibus, pariatur recusandae praesentium ipsa facere
                    magnam dolorum, totam minus nam ipsum optio expedita quidem id
                    inventore tempora in consequatur laudantium, eum a. Quam nihil
                    praesentium quidem sapiente omnis esse dolorem maxime ab, fugiat
                    tempora iure totam consequuntur quisquam libero exercitationem,
                    error a iste beatae eum amet. Deleniti impedit laudantium
                    tempora quibusdam repellendus maxime veniam? Repellendus qui
                    iste labore temporibus est! Dicta, repellat?
                </p>
                </div>
            </div>
            </div>
        </div>
        {/* Ma'am */}
        <div className="overflow-hidden">
            <div
            data-aos="fade-up-right"
            className="flex justify-center items-center mt-10 my-5"
            >
            <div className="mx-3 sm:mx-4 md:mx-7 lg:mx-32 md:min-h-72 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 max-w-lg md:max-w-none bg-[rgb(107, 191, 224)] shadow-3xl rounded-2xl md:bg-none md:shadow-none md:rounded-none">
                <div className="col-span-3 h-full p-4 md:bg-slate-300 md:shadow-3xl md:rounded-3xl order-2 md:order-1">
                <h1 className="text-4xl font-bold mb-1 text-center font-[Courgette] md:text-left">
                    <span className="text-[#FF6F0B]">Renuka</span> Verma Ma'am
                </h1>
                <p className="text-slate-500 text-center md:text-left">
                    Teacher of Classical Music, Lite Music
                </p>
                <p className="text-slate-800 mt-5 text-center md:text-left md:leading-8 text-md md:text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellat, doloremque. Possimus eaque fugiat ab non deserunt.
                    Enim temporibus, pariatur recusandae praesentium ipsa facere
                    magnam dolorum, totam minus nam ipsum optio expedita quidem id
                    inventore tempora in consequatur laudantium, eum a. Quam nihil
                    praesentium quidem sapiente omnis esse dolorem maxime ab, fugiat
                    tempora iure totam consequuntur quisquam libero exercitationem,
                    error a iste beatae eum amet. Deleniti impedit laudantium
                    tempora quibusdam repellendus maxime veniam? Repellendus qui
                    iste labore temporibus est! Dicta, repellat?
                </p>
                </div>
                <div className="col-span-3 h-auto flex justify-center items-center order-1 md:order-2 my-3 md:my-0 mt-8 md:mt-0">
                <img
                    src={renukamam}
                    alt=""
                    className="w-52 md:w-96 object-cover rounded-[3rem] md:rounded-[6rem] ring-4 ring-[#FF6F0B] ring-offset-2"
                />
                </div>
            </div>
            </div>
        </div>

        {/* Courses */}
        <div className='overflow-hidden'>
        <h1 id="courses" data-aos="slide-right" className="text-4xl md:text-5xl font-[Courgette] font-bold text-center mt-16 mb-10"><span className='text-[#FF6F0B]'>Our</span> Courses</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 sm:mx-4 md:mx-7 lg:mx-32 mt-4 justify-items-center">

            <div data-aos="zoom-in" className="flex flex-col justify-center items-center border rounded-2xl p-2 mmd:max-w-sm">
            <img src={tanpura} alt="Tabla" className="h-56" />
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-2xl font-[Courgette] my-2">Classical Music</h1>
                <p className="text-center text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                sapiente dolore vitae accusamus hic quae?
                </p>
            </div>
            </div>

            <div data-aos="zoom-in" className="flex flex-col justify-center items-center border rounded-2xl p-2 mmd:max-w-sm">
            <img src={tabla} alt="Tabla" className="h-56" />
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-2xl font-[Courgette] my-2">Lite Music</h1>
                <p className="text-center text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                sapiente dolore vitae accusamus hic quae?
                </p>
            </div>
            </div>

            <div data-aos="zoom-in" className="flex flex-col justify-center items-center border rounded-2xl p-2 md:col-span-2 lg:col-span-1 md:max-w-[50%] lg:max-w-none mmd:max-w-sm">
            <img src={flute} alt="Tabla" className="h-56" />
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-2xl font-[Courgette] my-2">Instruments</h1>
                <p className="text-center text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                sapiente dolore vitae accusamus hic quae?
                </p>
            </div>
            </div>

        </div>

        {/* Learning */}
        <div className='overflow-hidden'>
        <h1 id="learning" data-aos="slide-left" className="text-2xl md:text-4xl font-[Courgette] text-center mt-24">Let's Learn Something About <span className='text-[#FF6F0B]'>Indian Music</span></h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 sm:mx-4 md:mx-7 lg:mx-32 mt-10 justify-items-center overflow-hidden p-4 mb-10">

            <div data-aos="slide-up" className="col-span-1 bg-slate-300 shadow-3xl p-4 flex flex-col justify-start items-center rounded-2xl max-w-lg md:max-w-none">
            <h1 className="text-lg font-bold text-center">
                <span className='text-[#FF6F0B]'>Q:-</span> What is Western Classical Music ?
            </h1>
            <p className="text-center mt-4">
                Indian classical music's magic is primarily experienced with
                different melodies constructed within the framework of the ragas,
                while Western classical music's magic lies to a great extent in
                polyphonic composition, where counterpoint, harmony, and the texture
                created using multiple voices is critical.
            </p>
            </div>

            <div data-aos="slide-up" className="col-span-1 bg-slate-300 shadow-3xl p-4 flex flex-col justify-start items-center rounded-2xl max-w-lg md:max-w-none">
            <h1 className="text-lg font-bold text-center">
                <span className='text-[#FF6F0B]'>Q:-</span> What is Raga in Indian Classical Music ?
            </h1>
            <p className="text-center mt-4">
                Raga , also spelled rag (in northern India) or ragam (in southern
                India), (from Sanskrit, meaning “colour” or “passion”), in the
                classical music of India, Bangladesh, and Pakistan, a melodic
                framework for improvisation and composition.
            </p>
            </div>

            <div data-aos="slide-up" className="col-span-1 bg-slate-300 shadow-3xl p-4 flex flex-col justify-start items-center rounded-2xl max-w-lg md:max-w-[50%] md:col-span-2 lg:col-span-1 lg:max-w-none">
            <h1 className="text-lg font-bold text-center">
                <span className='text-[#FF6F0B]'>Q:-</span> What is Shruti in Indian Classical Music ?
            </h1>
            <p className="text-center mt-4">
                Shruti or śruti[ɕrʊtɪ] is a Sanskrit word, found in the Vedic texts
                of Hinduism where it means lyrics and "what is heard" in general. A
                shruti is the smallest gradation of pitch available, while a swara
                is the selected pitches from which the musician constructs the
                scales, melodies and ragas.
            </p>
            </div>
            
        </div>
        </>
    );
};

export default Homepage;
