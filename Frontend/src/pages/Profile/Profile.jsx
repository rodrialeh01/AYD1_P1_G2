import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
const Profile = () => {
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
                <div class="flex items-center justify-center p-12">
                    <div class="mx-auto w-full max-w-[550px]">
                        <form>
                            <div class="mb-5 pt-3">
                                <label class="mb-5 block text-base font-semibold text-white sm:text-xl">
                                    Nombre Completo
                                </label>
                                <div class="-mx-3 flex flex-wrap">
                                    <div class="w-full px-3 sm:w-1/2">
                                        <div class="mb-5">
                                        <label for="name" class="mb-3 block text-base font-medium text-white">
                                            Nombre
                                        </label>
                                            <h2 className="text-4xl text-white font-light">Nombre x</h2>
                                        </div>
                                    </div>
                                    <div class="w-full px-3 sm:w-1/2">
                                        <div class="mb-5">
                                        <label for="name" class="mb-3 block text-base font-medium text-white">
                                            Apellido
                                        </label>
                                        <h2 className="text-4xl text-white font-light">Apellido</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-5">
                                <label for="phone" class="mb-3 block text-base font-medium text-white">
                                    Número de Teléfono
                                </label>
                                <h2 className="text-4xl text-white font-light">+502 12345678</h2>
                            </div>
                            <div class="mb-5">
                                <label for="email" class="mb-3 block text-base font-medium text-white">
                                    Dirección de correo electrónico
                                </label>
                                <h2 className="text-4xl text-white font-light">prueba@gmail.com</h2>
                            </div>
                            <div class="mb-5">
                                <label for="name" class="mb-3 block text-base font-medium text-white">
                                    Contraseña
                                </label>
                                <h2 className="text-4xl text-white font-light">********</h2>
                            </div>
                            
                            <div class="mb-5">
                                <label for="date" class="mb-3 block text-base font-medium text-white">
                                    Fecha de Nacimiento
                                </label>
                                <h2 className="text-4xl text-white font-light">01/01/2023</h2>
                            </div>

                            <div>
                                <button
                                    class="hover:shadow-form w-full rounded-md bg-rojo2 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                    onClick={handlerEdit}
                                    >
                                    Editar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;