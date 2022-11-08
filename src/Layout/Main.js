import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Shared/Footer';
import Header from '../component/Shared/Header';

const Main = () => {
    return (
        <div className='px-1 lg:mx-20 bg-slate-50'>
            <Header></Header>
            <div className='min-h-[90vh] flex items-center'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;