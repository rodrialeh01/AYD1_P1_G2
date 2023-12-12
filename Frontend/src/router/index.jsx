import { createBrowserRouter } from "react-router-dom";
import Book from "../pages/Book/Book";
import EditProfile from "../pages/EditProfile/EditProfile";
import History from "../pages/History/History";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyBooks from "../pages/MyBooks/MyBooks";
import Profile from "../pages/Profile/Profile";
import Registro from "../pages/Registro/Registro";
import CRUDLibros from "../pages/Admin/CRUDLibros";
import ELIMUsers from "../pages/Admin/ElimUsers";
export const router = createBrowserRouter([
    {
        path:'/',
        element: <Login />
    },
    {
        path:'/registro',
        element: <Registro />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/AdminLibros',
        element: <CRUDLibros />
    },
    {
        path: '/AdminUsers',
        element: <ELIMUsers />
    },
    {
        path:'/myprofile',
        element: <Profile/>
    },
    {
        path: '/editprofile',
        element: <EditProfile />
    },
    {
        path:'/mybooks',
        element: <MyBooks/>
    },
    {
        path:'/history',
        element: <History/>
    },
    {
        path: '/book',
        element: <Book />
    }
]);