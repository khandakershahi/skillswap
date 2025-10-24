import React, { useContext } from 'react';
import logoImg from '../assets/logo.png';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import userIcon from '../assets/user.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('You logged out successfully');
                navigate('/');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const links = (
        <>
            <li>
                <NavLink className="text-md font-semibold" to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className="text-md font-semibold" to="/skills">
                    Skills
                </NavLink>
            </li>
            <li>
                <NavLink className="text-md font-semibold flex items-center gap-2" to="/my-profile">
                    My Profile
                    <img
                        className="w-8 h-8 rounded-full object-cover"
                        src={user?.photoURL || userIcon}
                        alt="user"
                    />
                </NavLink>
            </li>
        </>
    );

    const signOutLink = (
        <button onClick={handleLogout} className="btn btn-accent text-white">
            Sign Out
        </button>
    );

    const signInLink = (
        <>
            <li key="signup">
                <NavLink to="/auth/signup" className="btn btn-accent text-white">
                    Signup
                </NavLink>
            </li>
            <li key="signin">
                <NavLink to="/auth/signin" className="btn btn-accent text-white">
                    Signin
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar w-[1320px] mx-auto">
                <div className="navbar-start">
                    {/* Mobile dropdown */}
                    <div className="dropdown z-20">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow items-start gap-2"
                        >
                            {links}
                            {user ? (
                                <li key="signout">
                                    {signOutLink}
                                </li>
                            ) : (
                                signInLink
                            )}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link to="/">
                        <img className="w-[165px] h-[37px]" src={logoImg} alt="Logo" />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 items-center">{links}</ul>
                </div>

                <div className="navbar-end space-x-2">
                    {user ? signOutLink : (
                        <>
                            <NavLink to="/auth/signup" className="btn btn-accent text-white">
                                Signup
                            </NavLink>
                            <NavLink to="/auth/signin" className="btn btn-accent text-white">
                                Signin
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;