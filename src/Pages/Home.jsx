import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TopRated from '../components/TopRated';
import HowItWorks from '../components/HowItWorks';

const Home = () => {



    return (
        <section className='w-full'>

            <Hero></Hero>
            <div className='w-auto lg:w-[1320px] mx-auto p-4 lg:p-0'>
                <Services></Services>
                <TopRated></TopRated>
                <HowItWorks></HowItWorks>
            </div>

        </section>
    );
};

export default Home;