import { Link, NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { BsCartCheckFill } from "react-icons/bs";

const Header = () => {

  const {user, userSignOut} = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink className='text-lg font-semibold' to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink className='text-lg font-semibold' to='/collection'>Collection</NavLink>
      </li>
      <li>
        <NavLink className='text-lg font-semibold' to='/product'>Product</NavLink>
      </li>
      <li>
        {user ? <NavLink className='text-lg font-semibold' to='/account'>Account</NavLink> : ''}
      </li>
    </>
  );

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
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <h1 className="text-xl font-bold flex items-center gap-2 border"><FaShoppingBag /> Dates<span className="text-white bg-black p-2">Shop</span></h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal gap-5">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <div className="flex items-center gap-5"><Link  to='/cart' ><BsCartCheckFill className="text-3xl" /></Link><button onClick={userSignOut} className="text-xl font-extrabold bg-black text-white py-3 px-5">Logout</button></div> : <Link to='/login'><button className="text-xl font-extrabold bg-black text-white py-3 px-5">Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Header;
