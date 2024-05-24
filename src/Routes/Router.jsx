import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage'
import Main from '../Layout/Main';
import HomePage from '../pages/Home/HomePage/HomePage';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/OrderPage/Order/Order';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Secret from '../Shared/Secret/Secret';
import PrivateRoute from './PrivateRoute';
import DashBoard from '../Layout/DashBoard';
import Cart from '../pages/DashBoard/Cart/Cart';
import AllUsers from '../pages/DashBoard/AllUsers/AllUsers';
import AddItems from '../pages/DashBoard/AddItems/AddItems';
import AdminRoute from './AdminRoute'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element: <HomePage />
        },
        {
          path: '/menu',
          element: <Menu />
        },
        {
          path:'/order',
          element: <Order />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path:'/signUp',
          element: <SignUp />
        },
        {
          path:'/secret',
          element: <PrivateRoute>
            <Secret />
          </PrivateRoute>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute>
        <DashBoard />
      </PrivateRoute>,
      children:[
        // normal user routes
        {
          path:'cart',
          element: <Cart />
        },

        // Admin only Routes
        {
          path: 'addItems',
          element: <AdminRoute>
            <AddItems />
          </AdminRoute>
        },
        {
          path:'allUser',
          element: <AllUsers />
        }
      ]
    }
  ]);

export default router;