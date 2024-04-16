import React, { createContext, useContext, useState } from "react";
import { chatUsers } from "./../dummy-users/DummyUsersChat";

const ChatContext = createContext();

export const useChat = () => {
    return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState(chatUsers);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === "") return;
        const newMessage = {
            id: messages.length + 1,
            user: "MateiDascalu",
            message: inputValue,
        };
        setMessages([...messages, newMessage]);
        setInputValue("");
    };

    const handleEmoticonClick = (emoticon) => {
        setInputValue(inputValue + emoticon);
    };

    return (
        <ChatContext.Provider value={{ messages, inputValue, handleInputChange, handleSubmit, handleEmoticonClick }}>
            {children}
        </ChatContext.Provider>
    );
};
