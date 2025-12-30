import Link from 'next/link';
import React from 'react';

const ConsultBtn = () => {
    return (
       <div className='m-1'>
         <button className="btn btn-md hover:scale-110 transition-transform duration-300 text-faithsmindd_btn_text bg-faithsmindd_btn "> <Link href="/contact">Book a Consult</Link></button> 
        </div>
    );
};

export default ConsultBtn;