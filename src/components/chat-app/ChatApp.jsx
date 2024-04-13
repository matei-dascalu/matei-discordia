import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
import Navbar from "./Navbar";
import "./Chat-App.css"; // Import your CSS file for styling

const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    // Load messages from local storage on component mount
    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem("messages"));
        if (storedMessages) {
            setMessages(storedMessages);
        }
    }, []);

    // Save messages to local storage whenever they change
    useEffect(() => {
        localStorage.setItem("messages", JSON.stringify(messages));
    }, [messages]);

    const handleMessageChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
            setMessages([...messages, newMessage]);
            setNewMessage("");
        }
    };

    return (
        <div className="chat-app">
            <div className="message-list">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        {message}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={handleMessageChange}
                placeholder="Type your message..."
                className="message-input"
            />
            <button onClick={handleSendMessage} className="send-button">
                Send
            </button>
        </div>
    );
};

const MainApp = () => {
    return (
        <div>
            <Navbar />
            <div className="main-content">
                <Sidebar />
                <ChatApp />
                <RightSidebar />
            </div>
        </div>
    );
};

export default MainApp;
