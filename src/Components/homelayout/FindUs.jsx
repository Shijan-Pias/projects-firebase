import React from 'react';
import { FaFacebook ,FaTwitter ,FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mt-5'>Find Us on</h2>
            <div className="join join-vertical w-full">
  <button className="btn join-item gap-3 bg-base-100 justify-start"><FaFacebook size={20}/> FaceBook</button>
  <button className="btn join-item gap-3 bg-base-100 justify-start"><FaTwitter size={20} /> Twitter</button>
  <button className="btn join-item gap-3 bg-base-100 justify-start"><FaInstagram size={20} /> Instagram</button>
</div>

        </div>
    );
};

export default FindUs;