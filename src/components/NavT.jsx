"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const NavT = () => {
    return (
         <div className='fixed top-0 left-0 w-full h-[30px] flex justify-center items-center z-50 bg-faithsmindd_booking_btn text-faithsmindd_btn_text text-[14px] font-semibold'>
            <a href="/">  <TypeAnimation
        sequence={[
            "Accepting", 200,
            "Accepting new", 200,
            "Accepting new patients.", 200,
            "Accepting new patients. Reach", 200,
            "Accepting new patients. Reach out", 200,
            "Accepting new patients. Reach out today !", 1500,

                  ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '1em' }}
      /> </a>
          
        </div>
    );
};

export default NavT;