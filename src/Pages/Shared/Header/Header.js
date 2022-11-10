import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navItem = <>
        <li className='font-bold'><Link to='/'>Home</Link></li>
        <li className='font-bold'><Link to='/allservices'>Services</Link></li>
        <li className='font-bold'><Link to='/blog'>Blog</Link></li>

    </>

    return (
        <div className="navbar h-20 p-10 bg-base-200 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                    <p className='text-3xl mb-2'>Color Canvas</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <ul className=" normal-case ">
                    {
                        user?.email ?
                            <>
                                <li className='font-bold btn btn-ghost'><Link to='/reviews'>My Reviews</Link></li>
                                <li className='font-bold btn btn-ghost'><Link>My Cart</Link></li>
                                <button onClick={handleLogOut} className='font-bold btn btn-ghost'><Link>Sign Out</Link></button>
                            </>
                            :
                            <li className='font-bold '><Link to='/login'>Login</Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;