import ChatApp from "../../components/chat-app/ChatApp";
import Navbar from "../../components/navbar/Navbar";
import RightSidebar from "../../components/right-side/RightSide";
import Sidebar from "../../components/sidebar/Sidebar";
import React from "react";
// import "./Mainapp.css";

function MainApp() {
    return (
        <div className="app">
            <Navbar />
            <div className="content">
                <Sidebar />
                <ChatApp />
                <RightSidebar />
            </div>
        </div>
    );
}

export default MainApp;
