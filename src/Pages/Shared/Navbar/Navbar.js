import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(err => console.log(err))
    }
    const menuItems =
        <>
            <li><Link className='text-stone-50 font-bold text-xl' to="/">Home</Link></li>
            <li><Link className='text-stone-50 font-bold text-xl' to="/blog">Blog</Link></li>

            {user?.uid ?
                <>
                    <li><Link to="dashboard" className='text-stone-50 font-bold text-xl'>Dashboard</Link></li>
                    <li><button className='text-stone-50 font-bold text-xl' onClick={handleLogOut}>Sign Out</button></li>
                </>
                :
                <li><Link to="/login" className='text-stone-50'>Login</Link></li>
            }

        </>

    return (
        <div className="navbar bg-primary flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={1} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-primary  normal-case text-xl">Change-Your-Phone</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;