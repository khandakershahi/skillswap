import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='bg-base-200'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet>

                </Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            <Toaster />
        </div>
    );
};

export default MainLayout;