"use client"
import Image from 'next/image';
import React from 'react';
import heroImage from "../../public/assets/banner_car.png"
import { useScramble } from "use-scramble";
import { AiFillCar } from 'react-icons/ai';
import { GoChevronRight } from 'react-icons/go';



const Hero = () => {

    const { ref } = useScramble({
        text: "big"
    });


    return (
        <div className='flex justify-center items-center text-left mt-20 '>
            <div className=' w-full lg:w-2/3 flex flex-col'>

                <h3 className='text-xl font-bold'>Plan your trip now</h3>
                <h1 className='text-3xl lg:text-6xl font-extrabold my-5'>Save <span className='text-red-500' ref={ref} ></span> with our  car rental</h1>
                <p className='text-gray-400 my-10 text-lg'>To Contribute to positive change and achieve our sustainability goals with many extraordinary</p>

                <div className='flex flex-col lg:flex-row gap-4 '>
                    <button className='bg-orange-400 shadow-lg text-white px-8 py-3 rounded-sm flex items-center' >Book Ride <span className='ml-3 text-2xl'> <AiFillCar /> </span> </button>
                    <button className='bg-black text-white px-8 py-3 rounded-sm flex items-center ' >Learn More <span className='ml-3 text-2xl'> < GoChevronRight/> </span> </button>
                </div>
            </div>
            <div className='w-3/3 bounce-in-right lg:block hidden'>
                <Image src={heroImage} width={1000} height={1000} alt='Car Image' />
            </div>
        </div>
    );
};

export default Hero;


