import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    let datos = false;
    if (user) {
        datos = true;
    }

    const [logged, setLogged] = useState(datos);

    return (
        <UserContext.Provider value={{ logged, setLogged }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);