import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import slider1 from '../assets/slider-1.webp'
import slider2 from '../assets/slider-2.webp'


const Hero = () => {
    return (
        <>
           
            <Swiper navigation={true}
                loop={true}
                autoplay={{
                    delay: 3000, // 3 seconds
                    disableOnInteraction: false, // Keeps autoplay active even after manual navigation
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper">
                    <SwiperSlide>
                        <div
                            className="relative h-full flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${slider1})`,
                            }}
                        >
                            {/* 🔹 Overlay with secondary color */}
                            <div className="absolute inset-0 bg-secondary/80"></div>

                            {/* 🔹 Content (z-index above overlay) */}
                            <div className="relative z-10">
                                <h4 className="text-lg uppercase tracking-wide text-accent">Start learning from home</h4>
                                <h1 className="text-6xl font-bold mt-3">
                                    Connect With Our Expert And<br></br> Start Learning Today
                                </h1>
                                <button className="btn btn-primary mt-6">Explore Courses</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                        className="relative h-full flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${slider2})`,
                            }}
                        >
                            {/* 🔹 Overlay with secondary color */}
                            <div className="absolute inset-0 bg-secondary/80"></div>

                            {/* 🔹 Content (z-index above overlay) */}
                            <div className="relative z-10">
                            <h4 className="text-lg uppercase tracking-wide text-accent">Start learning from home</h4>
                            <h1 className="text-6xl font-bold mt-3">
                                Start Learning from home <br/>with expert instructors
                            </h1>
                                <button className="btn btn-primary mt-6">Explore Courses</button>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
          
        </>
    );
};

export default Hero;