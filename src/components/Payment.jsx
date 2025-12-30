import Image from 'next/image';
import React from 'react';

const Payment = () => {
    return (
        <div className='w-2/3 grid place-items-center bg-faithsmindd_footer_bg'>
                           <Image  src="/payment.jpg"
                         alt="Banner Image"
                         width={300}
                         height={300}></Image>
                         </div>
    );
};

export default Payment;