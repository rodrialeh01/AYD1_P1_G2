import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const EditProfile = () => {
    const navigate = useNavigate();

    const handlerRegresar = () => {
        navigate("/myprofile");
    }
    return (
        <div className="flex bg-zinc-900">
            <Sidebar />
            <div className="p-7 text-2xl font-semibold flex-1 h-screen overflow-y-scroll scrollbar-hide">
                <div>
                    <h1 className="text-white text-3xl">
                    <FaUserLarge className="text-3xl inline-block mr-2"/>
                    Editar Mi Perfil
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
                                            <input type="text" name="area" id="area" placeholder="Ingresa tu Nombre"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>
                                    <div class="w-full px-3 sm:w-1/2">
                                        <div class="mb-5">
                                        <label for="name" class="mb-3 block text-base font-medium text-white">
                                            Apellido
                                        </label>
                                            <input type="text" name="city" id="city" placeholder="Ingresa tu Apellido"
                                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-5">
                                <label for="phone" class="mb-3 block text-base font-medium text-white">
                                    Número de Teléfono
                                </label>
                                <input type="text" name="phone" id="phone" placeholder="Ingresa tu número de teléfono"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div class="mb-5">
                                <label for="email" class="mb-3 block text-base font-medium text-white">
                                    Dirección de correo electrónico
                                </label>
                                <input type="email" name="email" id="email" placeholder="Ingresa tu correo"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div class="mb-5">
                                <label for="name" class="mb-3 block text-base font-medium text-white">
                                    Contraseña
                                </label>
                                <input type="text" name="name" id="name" placeholder="Ingresa tu contraseña"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            
                            <div class="mb-5">
                                <label for="date" class="mb-3 block text-base font-medium text-white">
                                    Fecha de Nacimiento
                                </label>
                                <input type="date" name="date" id="date"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>

                            <div>
                                <button
                                    class="hover:shadow-form w-full rounded-md bg-rojo2 py-3 px-8 mb-3 text-center text-base font-semibold text-white outline-none"
                                    >
                                    Aplicar Cambios
                                </button>
                                <button
                                    class="hover:shadow-form w-full rounded-md bg-white py-3 px-8 text-center text-base font-semibold text-rojo2 outline-none"
                                    onClick={handlerRegresar}
                                    >
                                    Regresar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;