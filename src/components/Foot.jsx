"use client"
import React, { useEffect, useState } from 'react';
import DayDate from './DayDate';
import Link from 'next/link';
import FotTop from './FotTop';

const Foot = () => {
    return (
      <footer className="footer bg-[#E0EDC3] sm:footer-horizontal footer-center text-base-content p-4 pt-30">
  <aside>
   <FotTop></FotTop>
  <DayDate></DayDate>
    <p>Copyright © {new Date().getFullYear()} - Designed & Built by FAITHSMINDD <Link href='mailto:jewelhasan.eee@outlook.com'><span className='text-blue-500 mx-1'>u.f.akpatang@liverpool.ac.uk</span> </Link></p>
     
  </aside>
</footer>
    );
};

export default Foot;