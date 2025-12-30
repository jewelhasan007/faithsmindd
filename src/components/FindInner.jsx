import React from 'react';
import ConsultBtn from './ConsultBtn';
import Image from 'next/image';


const FindInner = () => {
    return (
         <div className='bg-faithsmindd_banner_bg flex flex-row-reverse m-3 p-5'>
          <div className='w-2/3 grid place-items-center'>
            <Image  src="/email.jpg"
          alt="Banner Image"
          width={300}
          height={300}></Image>
          </div>
            <div className='w-4/5 text-center space-y-3 m-3'>  
            <h1 className='text-4xl'>Does this feel like your story?</h1>
            <ul className='list-disc list-outside pl-5 text-[14px]'>
              <li>The very anxiety that fuels your vigilance now paralyzes you from moving forward.</li>
              <li>You live in fear of a depressive collapse, unable to shake the persistent sadness beneath the surface.</li>
              <li>You lose hours to doomscrolling each night, seeking a numbing escape from your own mind.</li>
              <li>You exhaust yourself maintaining a perfect facade, perpetually fearing exposure as an imposter.</li>
              <li> Despite every accomplishment, a core sense of being "not enough" remains stubbornly unchanged.</li>
            <li>At work, your above-and-beyond efforts never translate into a genuine feeling of security or confidence.</li>
           <li>No regimen of diet or exercise can quiet the critical voice and make you feel at home in your body.</li> 
            <li>Dating feels impossible, or the relationships you find only amplify your anxiety and leave you unfulfilled.</li>
            <li>Ultimately, you feel lost, disconnected from your true self and unable to build the deeply fulfilling relationships you long for.</li>
            </ul>
            <h2 className='font-semibold mt-3'>Most of all, you feel lost and confused as to why you can’t escape these feelings. You don’t know who you are and you can’t seem to develop the type of loving and caring relationships you desperately long for. </h2>
            <ConsultBtn ></ConsultBtn>
        
            </div>
        </div>
    );
};

export default FindInner;