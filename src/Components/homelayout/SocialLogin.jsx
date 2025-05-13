import React from 'react';
import { FaGoogle,FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold mb-5'>Login With</h1>
            <div className=''>
                <button className='btn btn-outline btn-primary mb-3 w-full'> <FaGoogle size={20}/>Login With Google</button>
                <button className='btn btn-outline btn-secondary w-full '><FaGithub size={20} /> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;