import React from "react";
import MyCardBook from "../../components/MyCardBook/MyCardBook";
import RentCardBook from "../../components/RentCardBook/RentCardBook";
import Sidebar from "../../components/Sidebar/Sidebar";
const MyBooks = () => {
    const arrayprueba = [
        {titulo:"titulo1", sinopsis:"sinopsis1", renta:100, compra:200},
        {titulo:"titulo2", sinopsis:"sinopsis2", renta:100, compra:200},
        {titulo:"titulo3", sinopsis:"sinopsis3", renta:100, compra:200},
        {titulo:"titulo4", sinopsis:"sinopsis4", renta:100, compra:200},
        {titulo:"titulo5", sinopsis:"sinopsis5", renta:100, compra:200},
        {titulo:"titulo6", sinopsis:"sinopsis6", renta:100, compra:200},
    ]
    return (
        <div className="flex bg-zinc-900">
            <Sidebar />
            <div className="p-7 text-2xl font-semibold flex-1 h-screen overflow-y-scroll scrollbar-hide">
                <div>
                <h1 className="text-white text-3xl">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`inline-block mr-2 w-10 h-10 text-white`}
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                  </svg>
                  Mis Libros
                </h1>
                </div>
                <div className="pt-4">
                    <h2 className="text-white text-2xl">Alquilados</h2>
                    <div id="cartas" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {arrayprueba.map((book, index) => (
                            <RentCardBook key={index} book={book} />
                        ))}
                    </div>
                </div>
                <div className="pt-4">
                    <h2 className="text-white text-2xl">De mi propiedad</h2>
                    <div id="cartas" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {arrayprueba.map((book, index) => (
                            <MyCardBook key={index} book={book} />
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default MyBooks;