import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
const History = () => {
    const navigate = useNavigate();

    const handlerEdit = () => {
        navigate("/editprofile");
    }
    return (
        <div className="flex bg-zinc-900">
            <Sidebar />
            <div className="p-7 text-2xl font-semibold flex-1 h-screen overflow-y-scroll scrollbar-hide">
                <div>
                    <h1 className="text-white text-3xl">
                    <FaUserLarge className="text-3xl inline-block mr-2"/>
                    Mi Perfil
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default History;