import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='md:w-10/12 mx-auto space-y-3 my-2'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;