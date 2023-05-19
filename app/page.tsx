import React from 'react';
import "../styles/globals.css"
import Hero from '@/components/Navbar/Hero';


const page = () => {
    return (
        <div className='text-center'>
            <div className='flex justify-center items-center'>
                <Hero />
            </div>
        </div>
    );
};

export default page;