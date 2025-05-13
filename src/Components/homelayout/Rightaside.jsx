import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QJone from './QJone';

const Rightaside = () => {
    return (
        <div className='space-y-3'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QJone></QJone>
        </div>
    );
};

export default Rightaside;