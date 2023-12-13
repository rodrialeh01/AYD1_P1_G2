import React, { useEffect, useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineAddShoppingCart, MdOutlineSell } from "react-icons/md";
import { useParams } from "react-router-dom";
import Service from "../../Service/Service";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Desencriptar } from "../../utils/main";
import toast, { Toaster } from "react-hot-toast";

const Book = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editorial, setEditorial] = useState("");
  const [yearDate, setYearDate] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [bookState, setBookState] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const [response, setResponse] = useState(null);

  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({
    idBook: "",
    idUser: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    console.log("DATA");
    console.log(data);

    data.idBook = Desencriptar(id);
    const user = JSON.parse(localStorage.getItem("data_user"));
    data.idUser = user.id;
    console.log("DATA GOOD:");
    console.log(data);
    try {
      const res = await Service.createComment(data);
      console.log(res);
      if (res.status === 200) {
        setResponse("comment");
        toast.success("Comentario agregado");
        setLoading(true);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const idbook = Desencriptar(id);
    console.log("IDBOOK");
    console.log(idbook);
    Service.getBook(idbook).then((res) => {
      console.log("RES");
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

        console.log("COMMENTS");
        fetchData();
      }
    });
    setResponse(null);
  }, [id, response]);

  const handledeleteComment = async (id) => {
    console.log("ID");
    console.log(id);
    try {
      const res = await Service.deleteComment(id);
      console.log(res);
      if (res.status === 200) {
        setResponse("commentDeleted");
        toast.success("Comentario eliminado");
        setLoading(true);
        setTimeout(() => {
          window.location.reload();
        }, 500);

      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      console.log("ID");
      const idbook = Desencriptar(id);
      const res = await Service.getComments(idbook);
      console.log(res);
      if (res.status === 200) {
        const updatedComments = await Promise.all(
          res.data.data.map(async (comment) => {
            const user = await Service.getUser(comment.idUser);
            const users = user.data.data;
            console.log("USERS");
            console.log(users);
            const mine =
              JSON.parse(localStorage.getItem("data_user")).id === users._id;
            return {
              ...comment,
              user: users,
              mine: mine,
            };
          })
        );
        setComments(updatedComments);
        setLoading(false);

        console.log("COMMENTS");
        console.log(comments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex bg-zinc-900">
      <Toaster />
      <Sidebar />
      <div className="p-7 text-2xl font-semibold flex-1 h-screen overflow-y-scroll scrollbar-hide">
        <div>
          <h1 className="text-white text-3xl">
            <FaBookReader className="text-3xl inline-block mr-2" />
            Detalles
          </h1>
        </div>
        <div class="max-w-2xl mx-auto my-10 bg-white rounded-lg shadow-md p-5">
          <img
            class=" w-40 h-40 rounded-full mx-auto"
            src="https://i.postimg.cc/4xRKZVBJ/pila-libros-ilustracion-diseno-plano-556708-2364.jpg"
            alt="Profile picture"
          />
          <h2 class="text-center text-2xl font-semibold mt-3">{title}</h2>
          <p class="text-center mt-1 text-xl">{author}</p>
          <p class="text-left mt-1 text-xl">Año de Publicación: {yearDate}</p>
          <p class="text-left mt-1 text-xl">Editorial: {editorial}</p>
          <p class="text-left text-gray-600 mt-1 text-xl">
            Precio de Venta: Q{purchasePrice}
          </p>
          <p class="text-left text-gray-600 mt-1 text-xl">
            Precio de Renta: Q{rentalPrice}
          </p>
          <div
            className={`flex justify-center mt-5 ${
              bookState !== 0 ? "hidden" : ""
            }`}
          >
            <button
              className="mb-2 sm:mb-0 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-900 hover:bg-blue-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              <MdOutlineAddShoppingCart className="inline-block mr-2 text-lg" />{" "}
              Comprar
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
          <div
            id="commentContainer"
            class="bg-white p-4 my-4 rounded shadow-md"
          >
            {loading ? (
              <div class="flex items-center justify-center">
                <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            ) : (
              <div>
                {comments.map((comment) => (
                  <div>
                    <div className="flex items-center relative mt-4">
                      <div>
                        <div className="font-semibold text-rojo2 text-xl">
                          {comment.user?.name + " " + comment.user?.lastName}{" "}
                        </div>
                        <div className="font-semibold text-gray-700 text-xs">
                          {comment.user?.email}
                        </div>
                        <div className="mt-2 text-sm font-light">
                          {comment.comment}
                        </div>
                      </div>
                      {comment.mine && (
                        <button
                          class="ml-2 text-red-400 hover:text-red-700 absolute top-0 right-0"
                        
                          onClick={() => handledeleteComment(comment._id)}
                        >
                          x
                        </button>
                      )}
                    </div>

                    <hr class="my-2 border-t-1 border-gray-300" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <form
            id="commentForm"
            class="mt-4"
            onSubmit={(e) => handleAddComment(e)}
          >
            <div class="flex flex-col space-y-2">
              <label for="comment" class="font-semibold text-xl">
                Agrega tu Comentario:
              </label>
              <textarea
                id="comment"
                name="comment"
                rows="4"
                class="p-2 border rounded text-sm font-light"
                required
                onChange={handleInputChange}
              ></textarea>

              <button type="submit" className="bg-rojo2 text-white p-2 rounded">
                Agregar Comentario
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;