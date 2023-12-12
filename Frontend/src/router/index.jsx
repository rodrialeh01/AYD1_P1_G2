import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
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
    }
]);