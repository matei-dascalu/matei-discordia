import React from "react";
import { users } from "./DummyUsers.jsx";
import "./RightSide.css";

function RightSidebar() {
    return (
        <div className="right-sidebar">
            <div className="right-sidebar-header">
                <h3>Users</h3>
            </div>
            <div className="right-sidebar-users">
                {users.map((user) => (
                    <div className="user" key={user.id}>
                        <img src={user.avatar} alt={user.name} className="user-avatar" />
                        <span className="user-name">{user.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RightSidebar;
