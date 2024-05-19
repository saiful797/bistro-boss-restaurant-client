import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage'
import Main from '../Layout/Main';
import HomePage from '../pages/Home/HomePage/HomePage';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/OrderPage/Order/Order';

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
        }
      ]
    },
  ]);

export default router;