import Image from 'next/image';
import React from 'react';

const Social = () => {
    return (
         <div className='w-2/3 grid place-items-center'>
                    <Image  src="/follow us.jpg"
                  alt="Banner Image"
                  width={300}
                  height={300}></Image>
                  </div>
    );
};

export default Social;