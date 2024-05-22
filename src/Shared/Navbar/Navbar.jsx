import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { HiOutlineShoppingCart } from "react-icons/hi";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
    const {user, logOut} = useAuth();
    const [ cart ] = useCart();

    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order'>Order Food</Link></li>
        <li><Link to='/secret'>Secret</Link></li>
        <li>
            <Link to='/dashboard/cart'>
            <button className="flex justify-center items-center">
                <HiOutlineShoppingCart className="text-2xl font-medium" />
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
            </Link>
        </li>

    </>

    const handleLogout = () => {
        logOut();
    }
    return (
        <div className="navbar fixed z-50 bg-opacity-30 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                    { navLinks }
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    Bistro Boss
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {  navLinks }
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    user? <div className="flex justify-center items-center gap-2">
                        <div>
                            <img className="w-16 h-16 rounded-full" src={user.photoURL} alt="user" />
                        </div>
                        <Link onClick={handleLogout} className="btn btn-sm bg-slate-400 btn-outline border-0 border-b-blue-950 text-orange-600">Logout</Link>
                    </div>
                    :
                    <div className="">
                        <Link className="btn btn-sm bg-slate-400 btn-outline border-0 border-b-blue-950 text-orange-600 mr-2" to='/login'>Login</Link>
                        <Link className="btn btn-sm bg-slate-400 btn-outline border-0 border-b-blue-950 text-orange-600" to='/signUp'>Sign Up</Link>
                    </div>
                }  
            </div>
        </div>
    );
};

export default Navbar;