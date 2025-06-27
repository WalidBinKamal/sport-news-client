import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/SportNews.png'
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    // console.log(user)
    const links = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/newsList'}>News List</Link></li>
        <li><Link to={'/userList'}>User List</Link></li>
        <li><Link to={'/addNews'}>Add News</Link></li>

    </>

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Sign Out Successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl"><img src={icon} /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={handleSignOut} className="btn btn-primary">Sign Out</button> : <button className="btn btn-primary"><Link to={'/login'}>Login</Link></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;