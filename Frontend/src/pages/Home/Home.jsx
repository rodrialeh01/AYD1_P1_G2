import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
const Home = () => {
    return(
        <div className="flex">
            <Sidebar />
            <div className="p-7 text-2xl font-semibold flex-1 h-screen">
                <h1>Home</h1>
            </div>
        </div>
    )
}

export default Home;