import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ConsultBtn from './ConsultBtn';

const HomePageBanner = () => {
    return (
        <div className='bg-faithsmindd_banner_bg grid lg:grid-cols-2 md:grid-cols-1 m-3 p-3'>
          <div className='w-1/2'>
            <Image  src="/email.jpg"
          alt="Banner Image"
          width={300}
          height={300}></Image>
          </div>
            <div className='w-1/2 text-center space-y-3'>  
            <h1 className='text-xl'>"Find your freedom and claim your inner peace."</h1>
            <p className='text-2xl'>Anxious Achievers: Find Your Calm</p>
            <ConsultBtn></ConsultBtn>
        
            </div>
        </div>
    );
};

export default HomePageBanner;