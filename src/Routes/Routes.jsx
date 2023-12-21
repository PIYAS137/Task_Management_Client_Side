import { createBrowserRouter } from 'react-router-dom'
import RootPage from '../Pages/RootPage/RootPage'
import HomePage from '../Pages/HomePage/HomePage'
import LoginPage from '../Pages/LoginPage/LoginPage';
import SignupPage from '../Pages/SignupPage/SignupPage';
import AdminPage from '../Pages/AdminPage/AdminPage';
import AdminHomePage from '../Pages/AdminHomePage/AdminHomePage';
import PrivateRoute from './PrivateRoute';
import AboutPage from '../Pages/AboutPage/AboutPage';

const router = createBrowserRouter([
    {
        path:'/',
        element:<RootPage/>,
        children:[
            {
                path: '/',
                element:<HomePage/>
            },
            {
                path:'/login',
                element:<LoginPage/>
            },
            {
                path:'/signup',
                element:<SignupPage/>
            },
            {
                path:'/about',
                element:<PrivateRoute><AboutPage/></PrivateRoute>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<AdminPage/>,
        children:[
            {
                path:'/dashboard',
                element:<PrivateRoute><AdminHomePage/></PrivateRoute>
            }
        ]
    }
])

export default router;