import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LattestNews from '../Components/LattestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/homelayout/LeftAside';
import Rightaside from '../Components/homelayout/Rightaside';

const HomeLayout = () => {
    return (
        <div>
            <header>
              <Header></Header>
              <section className='mx-auto w-11/12 my-5'>
                <LattestNews></LattestNews>
              </section>
              <nav className='mx-auto w-11/12 my-5'>
                <Navbar></Navbar>
              </nav>
            </header>
           <main className='mx-auto w-11/12 my-5 grid grid-cols-12 gap-5'>
             <aside className='col-span-3'>
              <LeftAside></LeftAside>
             </aside >
            <section className='main col-span-6'>
                <Outlet></Outlet>
            </section>
           <aside className='col-span-3'>
              <Rightaside></Rightaside>
             </aside>
           </main>
        </div>
    );
};

export default HomeLayout;