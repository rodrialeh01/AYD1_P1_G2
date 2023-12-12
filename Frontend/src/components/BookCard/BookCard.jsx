import React from "react";
import { FaEye } from "react-icons/fa";
import { MdOutlineAddShoppingCart, MdOutlineSell } from "react-icons/md";
const BookCard = ({book, rol}) => {
  return (
    <div className="relative flex flex-col mt-6 text-white bg-red-900 shadow-md bg-clip-border rounded-xl max-w-full sm:max-w-96 p-4">
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {book.titulo}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {book.sinopsis}
        </p>
        <p className="block font-sans text-lg antialiased font-semi-bold leading-relaxed text-inherit">
          Renta: Q<span> {book.renta}</span><br />
          Compra: Q<span> {book.compra}</span>
        </p>
      </div>
      <div className={`${rol?'hidden':''}`}>
        <div className="p-6 pt-0 flex flex-col sm:flex-row justify-center sm:justify-between items-center">
          <button
            className="mb-2 sm:mb-0 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-900 hover:bg-blue-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            <MdOutlineAddShoppingCart className="inline-block mr-2 text-lg" /> Comprar
          </button>
          <button
            className="mb-2 sm:mb-0 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-900 hover:bg-green-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            <MdOutlineSell className="inline-block mr-2 text-lg" /> Alquilar
          </button>
        </div>
        <div className="p-6 pt-0 flex justify-center">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-zinc-900 hover:bg-zinc-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            <FaEye className="inline-block mr-2 text-lg" /> Ver Más
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
