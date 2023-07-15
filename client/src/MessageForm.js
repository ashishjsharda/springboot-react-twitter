import React, { useState } from 'react';

function MessageForm() {
    const [content, setContent] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content })
        });
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={content}
                onChange={e => setContent(e.target.value)}
            />
            <button type="submit">Post</button>
        </form>
    );
}

export default MessageForm;
