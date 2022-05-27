import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        <p className='text-red-500'><small>{error?.message}</small></p>
    }

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const mainMenu = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/tools">Tools</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        
        {
            user &&
            <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{
            user ?

                <button onClick={logout} >Logout</button>


                :
                <Link to="/login">Login</Link>
        }</li>


    </>

    return (
        <div className="navbar bg-sky-300 rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52 ">
                        {mainMenu}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <div>
                        <Link to="/" className="btn btn-ghost font-bold "> Manufacture <span className='text-red-600'>. DSLR .</span> Tools</Link>
                    </div>
                    <div>
                        {
                            user && <p className='font-bold text-center bg-red-600 rounded-lg p-2  text-white'>{user.displayName}</p>
                        }
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {mainMenu}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;