document.getElementById('send-button').addEventListener('click', async function() {
    const inputField = document.getElementById('message-input');
    const messageText = inputField.value.trim();
    
    if (messageText) {
        addMessage(messageText, 'outgoing');
        inputField.value = '';

        // Send message to the server and get response from the bot
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: messageText }),
            });

            const data = await response.json();
            addMessage(data.message, 'incoming');
        } catch (error) {
            console.error('Error:', error);
            addMessage("Sorry, I couldn't respond at this time.", 'incoming');
        }
    }
});

// Function to add messages to the chat
function addMessage(text, type) {
    const chatMessages = document.getElementById('chat-messages');
    
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', type);
    
    newMessage.innerHTML = `<p>${text}</p>`;
    
    chatMessages.appendChild(newMessage);
    
    // Scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight; 
}
