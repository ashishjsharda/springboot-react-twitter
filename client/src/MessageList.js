import React, { useState, useEffect } from 'react';

function MessageList() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('/api/messages')
            .then(response => response.json())
            .then(data => setMessages(data));
    }, []);

    return (
        <ul>
            {messages.map(message => (
                <li key={message.id}>{message.content}</li>
            ))}
        </ul>
    );
}

export default MessageList;
