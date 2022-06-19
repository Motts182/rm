import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='h-screen'>
            <div className="flex h-2/4 p-5 bg-blue-900 ">
                <div className="w-3/6">
                    <div className="bg-blue-900"> 1</div>
                </div>
                <div className="w-3/6 h-2/4">
                    <div className="bg-blue-900"> 2</div>
                </div>
            </div>
            <div className="w-full p-5  h-2/4 bg-blue-300 ">
                <Outlet/>
            </div>
        </div>
    );
}

export default Layout;