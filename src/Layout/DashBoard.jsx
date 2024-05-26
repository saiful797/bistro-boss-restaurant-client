import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
    const [ cart ] = useCart();

    //get isAdmin value from the database
    const[ isAdmin ]= useAdmin();

    return (
        <div className="flex">
            {/* Dashboard side bar */}
            <div className=" w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/adminHome'> 
                                <FaHome />
                                    Admin Home 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/addItems'> 
                                    <FaUtensils />
                                     Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItems'> 
                                <FaList />
                                    Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/bookings'> 
                                <FaBook />
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/allUser'> 
                                <FaUsers />
                                    All Users
                                </NavLink>
                            </li>
                        </>
                        :
                        <>
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
                        </>
                    }
                    {/* Shared NavLink */}
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
                    <li>
                        <NavLink to='/Contact'> 
                            <FaEnvelope />
                            Contact
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