import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
    const [ cart ] = useCart();
    return (
        <div className="flex">
            {/* Dashboard side bar */}
            <div className=" w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu">
                    <li>
                        <NavLink to='/dashboard/userHome'> 
                           <FaHome />
                            User Home 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'> 
                           <FaCalendar />
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'> 
                           <FaShoppingCart />
                            My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reviews'> 
                           <FaAd />
                            Add a Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'> 
                           <FaList />
                            My Bookings
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'> 
                            <FaHome />
                            Home 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'> 
                            <FaSearch />
                            Menu 
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Dashboard content */}
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;