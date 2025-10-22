import React from 'react';
import instructorImg1 from '../assets/Michael.jpg';
import instructorImg2 from '../assets/Priya.jpg';
import instructorImg3 from '../assets/Alex.jpg';
import instructorImg4 from '../assets/Sara.jpg';


const TopRated = () => {
    return (
        <div className='flex flex-col py-15 justify-center '>
            <div className='text-center pb-8'>
                <h5 className='text-accent text-lg' >Instructors</h5>
                <h2 className='text-5xl'>Top Rated Providers</h2>
            </div>
            <div className='grid grid-cols-4 gap-5'>
                <div className='card flex flex-col justify-center items-center p-4 gap-4 bg-white rounded-md'>
                    <img className='rounded-md w-[275px] h-[285px]' src={instructorImg1} alt="" />
                    <h5 className='text-3xl font-semibold'>Michael Tan</h5>
                    <p className='text-gray-400'>Instructor</p>
                </div>
                <div className='card flex flex-col justify-center items-center p-4 gap-4 bg-white rounded-md'>
                    <img className='rounded-md w-[275px] h-[285px]' src={instructorImg2} alt="" />
                    <h5 className='text-3xl font-semibold'>Priya Sharma</h5>
                    <p className='text-gray-400'>Instructor</p>
                </div>
                <div className='card flex flex-col justify-center items-center p-4 gap-4 bg-white rounded-md'>
                    <img className='rounded-md w-[275px] h-[285px]' src={instructorImg3} alt="" />
                    <h5 className='text-3xl font-semibold'>Alex Martin</h5>
                    <p className='text-gray-400'>Instructor</p>
                </div>
                <div className='card flex flex-col justify-center items-center p-4 gap-4 bg-white rounded-md'>
                    <img className='rounded-md w-[275px] h-[285px]' src={instructorImg4} alt="" />
                    <h5 className='text-3xl font-semibold'>Sara Hossain</h5>
                    <p className='text-gray-400'>Instructor</p>
                </div>
            </div>
        </div>
    );
};

export default TopRated;