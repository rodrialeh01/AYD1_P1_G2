import { createBrowserRouter } from "react-router-dom";
import EditProfile from "../pages/EditProfile/EditProfile";
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
    }
]);