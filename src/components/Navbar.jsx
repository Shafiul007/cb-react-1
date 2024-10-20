import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from '../Context/AuthProvider';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogout=()=>{
    logOut()
    .then(() => {
      // Sign-out successful.
      console.log('log out successfully');
    }).catch((error) => {
      // An error happened.
    });
  }
    const navbar=<>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/products'}>Products</NavLink>
    </>

    return (
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
        {navbar}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Cb-React-1</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal space-x-3 px-1">
      {navbar}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?<button onClick={handleLogout}>Logout</button>:<Link to={"/login"}><button>Login</button></Link>
    }
    
  </div>
</div>
    );
};

export default Navbar;