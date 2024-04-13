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

//e bun asta

// function MainApp() {
//     return (
//         <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
//             <Navbar />
//             <div style={{ display: "flex", flex: "1" }}>
//                 <Sidebar />
//                 <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
//                     <div style={{ flex: "1", overflow: "auto" }}>
//                         <ChatApp />
//                     </div>
//                     <RightSidebar />
//                 </div>
//                 {window.innerWidth <= 588 ? null : <Sidebar />}
//             </div>
//         </div>
//     );
// }
