import React from "react";
import "./Chat-App.css";
import { ChatProvider, useChat } from "./../../contexts/ChatContext";

const ChatApp = () => {
    const { messages, inputValue, handleInputChange, handleSubmit, handleEmoticonClick } = useChat();

    return (
        <div className="wrapper-chat">
            <div className="chat-container">
                <div className="messages">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`message ${msg.user === "You" ? "you" : "other"}`}>
                            <div className="message-content">
                                <div className="user-info">
                                    {msg.user !== "You" && <img src={msg.avataryo} className="avataryo" />}
                                    <span className="user">{msg.user}</span>
                                </div>
                                <span className="text">{msg.message}</span>
                            </div>
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
                    </div>
                </form>
            </div>
        </div>
    );
};

const ChatWrapper = () => {
    return (
        <ChatProvider>
            <ChatApp />
        </ChatProvider>
    );
};

export default ChatWrapper;
