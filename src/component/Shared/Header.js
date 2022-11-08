import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navItem = <>
        <Link to='/'><li className='mx-2 font-semibold hover:text-blue-500'>Home</li></Link>
        { user &&
            <>
                <Link to=''><li className='mx-2 font-semibold hover:text-blue-500'>My-Reviews</li></Link>
                <Link to='add-service'><li className='mx-2 font-semibold hover:text-blue-500'>Add-Service</li></Link>
            </>
        }
        <Link to=''><li className='mx-2 font-semibold hover:text-blue-500'>Blog</li></Link>
    </>
    const handleLogout = () => {
        logOut().then().catch(err => console.log(err.message))
    }
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <img className='hidden lg:block w-12 rounded' src="https://images.freeimages.com/images/large-previews/52e/fast-camara-1243005.jpg" alt="" />
                <Link to='/'><p className="text-2xl normal-case font-semibold lg:ml-2">PHoTo <span className='text-blue-500'>FesTival</span></p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <button onClick={handleLogout} className='btn btn-accent lg:mr-2'>Logout</button>
                        : <Link to='/login'><button className='btn btn-primary lg:mr-2'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;