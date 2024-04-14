import React from "react";
import { users } from "../dummy-users/DummyUsers.jsx";
import "./RightSide.css";

function RightSidebar() {
    const onlineUsers = users.slice(0, 4);
    const offlineUsers = users.slice(4);

    return (
        <div className="right-sidebar">
            <div className="online">
                <div className="right-sidebar-header">
                    <h5 className="header">Online — 4</h5>
                </div>
                <div className="right-sidebar-users">
                    {onlineUsers.map((user) => (
                        <div className="user user-container" key={user.id}>
                            <div className="avatar-wrapper">
                                <img src={user.avatar} alt={user.name} className="user-avatar" />
                                <div className="status-holder">
                                    <div className="user-status-icon"></div>
                                </div>
                            </div>
                            <span className="user-name">{user.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="offline">
                <div className="right-sidebar-header">
                    <h5 className="header">Offline — 11</h5>
                </div>
                <div className="right-sidebar-users">
                    {offlineUsers.map((user) => (
                        <div className="user user-container" key={user.id}>
                            <img src={user.avatar} alt={user.name} className="user-avatar" />
                            <span className="user-name">{user.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RightSidebar;
