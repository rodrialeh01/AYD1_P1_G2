import React, { useEffect, useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineAddShoppingCart, MdOutlineSell } from "react-icons/md";
import { useParams } from 'react-router-dom';
import Service from "../../Service/Service";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Desencriptar } from "../../utils/main";
const Book = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [editorial, setEditorial] = useState("");
    const [yearDate, setYearDate] = useState("");
    const [purchasePrice, setPurchasePrice] = useState("");
    const [rentalPrice, setRentalPrice] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [bookState, setBookState] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const idbook = Desencriptar(id);
        console.log("IDBOOK")
        console.log(idbook);
        Service.getBook(idbook).then((res) => {
            console.log("RES")
            console.log(res);
            if (res.status === 200) {
                setTitle(res.data.data.title);
                setAuthor(res.data.data.author);
                setEditorial(res.data.data.editorial);
                setYearDate(res.data.data.yearDate);
                setPurchasePrice(res.data.data.purchasePrice);
                setRentalPrice(res.data.data.rentalPrice);
                setSynopsis(res.data.data.synopsis);
                setBookState(res.data.data.bookState);
            }
        });
    }, [id]);
    return (
        <div className="flex bg-zinc-900">
            <Sidebar />
            <div className="p-7 text-2xl font-semibold flex-1 h-screen overflow-y-scroll scrollbar-hide">
                <div>
                    <h1 className="text-white text-3xl">
                    <FaBookReader className="text-3xl inline-block mr-2"/>
                    Detalles
                    </h1>
                </div>
                <div class="max-w-2xl mx-auto my-10 bg-white rounded-lg shadow-md p-5">
                    <img class=" w-40 h-40 rounded-full mx-auto" src="https://i.postimg.cc/4xRKZVBJ/pila-libros-ilustracion-diseno-plano-556708-2364.jpg" alt="Profile picture"/>
                    <h2 class="text-center text-2xl font-semibold mt-3">{title}</h2>
                    <p class="text-center mt-1 text-xl">{author}</p>
                    <p class="text-left mt-1 text-xl">Año de Publicación: {yearDate}</p>
                    <p class="text-left mt-1 text-xl">Editorial: {editorial}</p>
                    <p class="text-left text-gray-600 mt-1 text-xl">Precio de Venta: Q{purchasePrice}</p>
                    <p class="text-left text-gray-600 mt-1 text-xl">Precio de Renta: Q{rentalPrice}</p>
                    <div className={`flex justify-center mt-5 ${bookState !== 0?'hidden':''}`}>
                        <button
                            className="mb-2 sm:mb-0 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-900 hover:bg-blue-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button"
                        >
                            <MdOutlineAddShoppingCart className="inline-block mr-2 text-lg" /> Comprar
                        </button>
                        <button
                            className="ml-2 mb-2 sm:mb-0 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-900 hover:bg-green-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button"
                            >
                            <MdOutlineSell className="inline-block mr-2 text-lg" /> Alquilar
                        </button>
                    </div>
                    <div class="mt-5">
                        <h3 class="text-xl font-semibold">Sinopsis</h3>
                        <p class="text-gray-600 mt-2 text-lg font-light">{synopsis}</p>
                    </div>
                    <h3 class="text-xl font-semibold">Comentarios</h3>
                    <div id="commentContainer" class="bg-white p-4 my-4 rounded shadow-md">
                        <div class="flex items-center relative">
                            <div>
                                <div class="font-semibold text-rojo2 text-xl">Usuario1</div>
                                <div class="font-semibold text-gray-700 text-xs">u1@gmail.com</div>
                                <div class="mt-2 text-sm font-light">¡Este es un comentario de ejemplo!</div>
                            </div>
                        </div>

                        <hr class="my-2 border-t-1 border-gray-300"/>

                        <div class="flex items-center relative mt-4">
                            <div>
                                <div class="font-semibold text-rojo2 text-xl">Usuario2</div>
                                <div class="font-semibold text-gray-700 text-xs">u2@gmail.com</div>
                                <div class="mt-2 text-sm font-light">Otro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.</div>
                            </div>
                            <button class="ml-2 text-red-500 hover:text-red-700 absolute top-0 right-0" onclick="cerrarComentario(this)">x</button>
                        </div>
                        <hr class="my-2 border-t-1 border-gray-300"/>

                        <div class="flex items-center relative mt-4">
                            <div>
                                <div class="font-semibold text-rojo2 text-xl">Usuario2</div>
                                <div class="font-semibold text-gray-700 text-xs">u2@gmail.com</div>
                                <div class="mt-2 text-sm font-light">Otro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.</div>
                            </div>
                            <button class="ml-2 text-red-500 hover:text-red-700 absolute top-0 right-0" onclick="cerrarComentario(this)">x</button>
                        </div>
                        <hr class="my-2 border-t-1 border-gray-300"/>

                        <div class="flex items-center relative mt-4">
                            <div>
                                <div class="font-semibold text-rojo2 text-xl">Usuario2</div>
                                <div class="font-semibold text-gray-700 text-xs">u2@gmail.com</div>
                                <div class="mt-2 text-sm font-light">Otro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.tro comentario de ejemplo para ilustrar el diseño.</div>
                            </div>
                            <button class="ml-2 text-red-500 hover:text-red-700 absolute top-0 right-0" onclick="cerrarComentario(this)">x</button>
                        </div>
                    </div>

                    <form id="commentForm" class="mt-4">
                        <div class="flex flex-col space-y-2">
                            <label for="comment" class="font-semibold text-xl">Agrega tu Comentario:</label>
                            <textarea id="comment" name="comment" rows="4" class="p-2 border rounded text-sm font-light" required></textarea>

                            <button type="submit" class="bg-rojo2 text-white p-2 rounded">Agregar Comentario</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Book;