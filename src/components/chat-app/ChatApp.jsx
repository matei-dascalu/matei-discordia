import React, { useState } from "react";
import "./Chat-App.css";

const dummyMessages = [
    { id: 1, user: "Alice", message: "Hey there!" },
    { id: 2, user: "Bob", message: "Hi, how are you?" },
    { id: 3, user: "Alice", message: "I'm good, thanks!" },
    { id: 4, user: "Charlie", message: "What's up?" },
];

const ChatApp = () => {
    const [messages, setMessages] = useState(dummyMessages);
    const [inputValue, setInputValue] = useState("");
    const [selectedEmoticon, setSelectedEmoticon] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === "") return;
        const newMessage = {
            id: messages.length + 1,
            user: "You",
            message: inputValue,
        };
        setMessages([...messages, newMessage]);
        setInputValue("");
    };

    const handleEmoticonClick = (emoticon) => {
        setInputValue(inputValue + emoticon);
    };

    return (
        <div className="wrapper-chat">
            <div className="chat-container">
                <div className="messages">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`message ${msg.user === "You" ? "you" : "other"}`}>
                            <span className="user">{msg.user}: </span>
                            <span className="text">{msg.message}</span>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="input-form">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="         Message #fun"
                        className="input"
                    />
                    <button type="submit" className="send-button">
                        MateiDiscordia
                    </button>
                    <div className="emoticons">
                        <button className="emoticon" onClick={() => handleEmoticonClick("🦝")}>
                            <span role="img" aria-label="raton">
                                🦝
                            </span>
                        </button>
                        <button className="emoticon" onClick={() => handleEmoticonClick("🎮")}>
                            <span role="img" aria-label="ps5">
                                🎮
                            </span>
                        </button>
                        <button className="emoticon" onClick={() => handleEmoticonClick("🦾")}>
                            <span role="img" aria-label="forta">
                                🦾
                            </span>
                        </button>
                        <button className="emoticon" onClick={() => handleEmoticonClick("🩶")}>
                            <span role="img" aria-label="forta">
                                🩶
                            </span>
                        </button>
                        {/* Add more emoticon buttons here */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatApp;
