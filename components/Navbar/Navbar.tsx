import React from 'react';
import Image from 'next/image';
import logo from "../../public/assets/logo_v4.png"
import Link from 'next/link';

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font mt-2">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src={logo} alt="" width={160} height={160} />
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap gap-8 items-center text-[16px] justify-center font-bold text-black ">
                    <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
                    <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
                    <Link href="/models" className="mr-5 hover:text-gray-900">Vehicle Models</Link>
                    <Link href="/team" className="mr-5 hover:text-gray-900">Our Team</Link>
                </nav>
                <div className='flex gap-5'>
                    <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 font-bold text-black">
                        Sign In
                    </button>
                    <button className=" items-center py-4 px-8 shadow-lg  bg-orange-600 text-white  border-0 focus:outline-none hover:bg-gray-200 rounded font-bold">
                        Register
                    </button>
                </div>
            </div>
        </header >
    );
};

export default Navbar;