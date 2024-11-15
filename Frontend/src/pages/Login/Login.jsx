import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Service from "../../Service/Service";
import { useUser } from "../../userCtx/User";

import "./Login.css";
function Login() {
  const { logged, setLogged } = useUser();
  const [emailU, setEmailU] = useState("");
  const [passwordU, setPasswordU] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    console.log(logged);
    if (logged) {
      navigate("/user/home");
    } else {
      navigate("/");
    }
  }, [logged]);

  const handleLogin = async () => {
    const data = {
      email: emailU,
      password: passwordU,
    };
    try {
      console.log(data);
      const res = await Service.login(data);
      console.log(res.data.data);
      console.log("xd");
      if (res.status === 200) {
        const savedData = {
          id: res.data.data._id,
          rol: res.data.data.role
        }
        console.log("ESTO ES LO QUE SE GUARDA:")
        console.log(savedData);
        localStorage.setItem("data_user", JSON.stringify(savedData));
        
        setLogged(true);
        toast.success("Inicio de sesión exitoso",{
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate("/user/home");
        }
        , 3000);

      } else {
        toast.error("Error al iniciar sesión - Revisa tus credenciales e Intenta de nuevo.",{
          position: "upper-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Error al iniciar sesión - Revisa tus credenciales e Intenta de nuevo.",{
        position: "upper-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Toaster/>
      <div className="min-h-screen loginbg text-white flex justify-center fuente">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-gris3 shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <form className="bg-gris3"
              onSubmit={(e) => {handleLogin(); e.preventDefault();}}
            >
              <div className="flex flex-col items-center">
                <div style={{ width: "200px", height: "200px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="opacity-60 mx-auto text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-bold">
                  Inicia Sesión
                </h1>
                <div className="w-full flex-1 mt-8">
                  <div className="mx-auto max-w-xs">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium text-black bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="email"
                      placeholder="Email"
                      id="email_user"
                      name="email_user"
                      value={emailU}
                      onChange={(e) => setEmailU(e.target.value)}
                    />
                    <input
                      className="w-full px-8 mt-5 py-4 rounded-lg font-medium text-black bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="password"
                      placeholder="Contraseña"
                      id="pass_user"
                      name="pass_user"
                      value={passwordU}
                      onChange={(e) => setPasswordU(e.target.value)}
                    />
                    <button
                      className="mt-5 tracking-wide font-semibold bg-red-600 text-gray-100 w-full py-4 rounded-lg hover:bg-red-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      type="button"
                      onClick={handleLogin}
                    >
                      <span className="ml-3">Iniciar Sesión</span>
                    </button>
                    <p className="mt-6 text-xs text-white text-center">
                      Si no tienes una cuenta,{" "}
                      <Link
                        to="/registro"
                        className="border-b border-rojo1 border-dotted text-red-500 hover:text-red-800 transition-all duration-300 ease-in-out"
                      >
                        Registrate Aqui
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="flex-1 bg-strongPurple text-center hidden lg:flex">
            <div className="flex flex-1 items-center justify-center">
              <div
                className="w-full h-full bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://i.postimg.cc/Fs8Z8XxD/imagen-2023-12-08-131302997.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;