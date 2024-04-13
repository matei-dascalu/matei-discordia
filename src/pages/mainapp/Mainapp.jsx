import Navbar from "../../components/navbar/Navbar";
import RightSidebar from "../../components/right-side/RightSide";
import Sidebar from "../../components/sidebar/Sidebar";
import React from "react";

function MainApp() {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <RightSidebar />
        </div>
    );
}

export default MainApp;
