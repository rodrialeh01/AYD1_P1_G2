import { createBrowserRouter } from "react-router-dom";
import Book from "../pages/Book/Book";
import EditProfile from "../pages/EditProfile/EditProfile";
import History from "../pages/History/History";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyBooks from "../pages/MyBooks/MyBooks";
import Profile from "../pages/Profile/Profile";
import Registro from "../pages/Registro/Registro";

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