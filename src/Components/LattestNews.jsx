import React from 'react';
import Marquee from 'react-fast-marquee';

const LattestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 '>
            <p className='p-2 bg-secondary text-base-100 px-3 py-2'>Latest</p>
            <Marquee className='gap-4 ' pauseOnHover={true} speed={60}>
             <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisic ing elit. In, voluptates.</p>
            </Marquee>
           
        </div>
    );
};

export default LattestNews;