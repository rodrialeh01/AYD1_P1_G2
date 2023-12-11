import React, { useState } from "react";
import { FaUserLarge, FaUserLargeSlash } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdOutlineHistory } from "react-icons/md";
import { PiBookBookmarkFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        {
            name: "Home",
            icon: <IoIosHome className="text-3xl"/>,
            path: "/home",
        },
        {
            name: "Mis Libros",
            icon: <PiBookBookmarkFill className="text-3xl"/>,
            path: "/",
        },
        {
            name: "Historial",
            icon: <MdOutlineHistory className="text-3xl"/>,
            path: "/",
        },
        {
            name: "Mi Perfil",
            icon: <FaUserLarge className="text-3xl"/>,
            path: "/myprofile",
        },
        {
            name: "Cerrar Sesión",
            icon: <IoLogOut className="text-3xl"/>,
            path: "/",
        }
    ]
    const MenuAdmin = [
        {
            name: "Home",
            icon: <IoIosHome className="text-3xl"/>,
            path: "/home",
        },
        {
            name: "Administración de Libros",
            icon: <GiBookshelf className="text-3xl"/>,
            path: "/",
        },
        {
            name: "Eliminar Usuarios",
            icon: <FaUserLargeSlash className="text-3xl"/>,
            path: "/",
        },
        {
            name: "Mi Perfil",
            icon: <FaUserLarge className="text-3xl"/>,
            path: "/myprofile",
        },
        {
            name: "Cerrar Sesión",
            icon: <IoLogOut className="text-3xl"/>,
            path: "/",
        }
    ]
    const navigate = useNavigate();

    const handlerGoTo = (path) => {
        navigate(path);
    }

    return(
        <div className="flex">
            <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen p-5 pt-8 bg-rojo2 relative`}>
                <img
                    src="https://png.pngtree.com/png-vector/20190423/ourlarge/pngtree-left-direction-arrow-icon-png-image_971494.jpg"
                    className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-rojo2 ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center mb-9">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`cursor-pointer duration-500 w-10 h-10 text-white ${open && "rotate-[360deg]"}`}
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                  </svg>
                  <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'hidden'}`}>MyLibrary</h1>
                </div>
                <ul>
                    {Menus.map((item, index) => (
                        <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer pt-2 mt-2 pb-2 mb-2 hover:bg-rojo1 rounded-md`} onClick={() => handlerGoTo(item.path)}>
                            <div className={`${!open ? 'mr-4' : ''}`}>{item.icon}</div>
                            <span className={`${!open && 'hidden'} origin-left duration-200`}>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;