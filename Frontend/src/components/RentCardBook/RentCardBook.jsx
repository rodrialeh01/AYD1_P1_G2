import React from "react";
import { FaEye } from "react-icons/fa";
import { RiContactsBookUploadFill } from "react-icons/ri";
const RentCardBook = ({book}) => {
  return (
    <div className="relative flex flex-col mt-6 text-white bg-red-900 shadow-md bg-clip-border rounded-xl max-w-full sm:max-w-96 p-4">
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {book.title}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {book.synopsis}
        </p>
        <p className="block font-sans text-base antialiased font-semibold leading-relaxed text-inherit">
          Fecha de devolución:  <span className="font-light">{book.returnDate}</span>
        </p>
      </div>
      <div className="p-6 pt-0 flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <button
          className="mb-2 sm:mb-0 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-yellow-900 hover:bg-yellow-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          <RiContactsBookUploadFill  className="inline-block mr-2 text-lg" /> Devolver
        </button>
        <button
          className="mb-2 sm:mb-0 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-zinc-900 hover:bg-zinc-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          <FaEye className="inline-block mr-2 text-lg" /> Ver más
        </button>
      </div>
    </div>
  );
};

export default RentCardBook;