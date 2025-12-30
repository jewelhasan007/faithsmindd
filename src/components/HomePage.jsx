"use client";
import React from 'react';
import HomePageBanner from './HomePageBanner';
import FindInner from './FindInner'


const HomePage = () => {
 
    return (
        <div className='sm:text-center md:text-left lg:text-left mt-[70px]'>
       {/* Title  */}
            
           <div className='text-center m-3 p-3 min-h-[1.25rem]'>
  
                 <h1 className=' text-7xl px-3 mt-3 sm:text-center md:text-left lg:text-left  '><span className='font-bold'>A Safe Space for Getting </span>  </h1>
                 <h1 className=' text-7xl px-3 mb-3 sm:text-center md:text-left lg:text-left  '><span className='text-yellow-400'>Through Life’s Difficult Transitions</span> </h1>
                                                            
                    </div>    
              <div>
                <HomePageBanner></HomePageBanner>
            <FindInner></FindInner>
              </div>
                
            
        </div>
    );
};

export default HomePage;