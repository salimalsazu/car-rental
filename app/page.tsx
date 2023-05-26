import React from 'react';
import "../styles/globals.css"
import Hero from '@/components/Navbar/Hero';
import Booking from '@/components/Navbar/booking';


const page = () => {
    return (
        <div className='text-center '>
            <div className='p-2'>
                <Hero />
                <Booking />
            </div>
        </div>
    );
};

export default page;