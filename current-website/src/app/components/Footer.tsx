"use client"

import Image from 'next/image';
import SignImage from '../../../public/fakesignature.png';

const Footer = () => {
    return (
        <div className='flex flex-col w-full items-center justify-end sm:pb-20 pb-15 sm:h-85 h-70 bg-gradient-to-t from-black'>
            <p className='font-poppins sm:text-2xl text-md font-bold sm:mb-10 mb-4'>Looking forward to getting in touch!</p>
            <Image
                src={SignImage}
                alt='Signing Off'
                width={"150"}
                />
        </div>
    );
}

export default Footer;