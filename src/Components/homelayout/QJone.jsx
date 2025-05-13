import React from 'react';
import swimming from '../../../assets/swimming.png';
import cl from '../../../assets/class.png'
import play from '../../../assets/playground.png'
const QJone = () => {
    return (
        <div className='bg-base-200 mt-3'>
           <h2 className='font-bold'>QZone</h2>
           <div className='mb-5 mt-4'>
                <img src={swimming} alt="" />
           </div>
           <div className='mb-5'>
            <img src={cl} alt="" />
           </div>
           <div>
            <img src={play} alt="" />
           </div>
        </div>
    );
};

export default QJone;