import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='bg-slate-300'>
            <nav className='p-5 '>
                <Link to='/' className="">Info</Link>
                <Link to='/home' className="ml-9">APP</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;