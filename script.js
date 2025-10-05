// DOM Elements
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const messagesContainer = document.getElementById('messages');

// AI responses for friend.com-like interaction
const aiResponses = [
    "I'm here for you! Tell me more.",
    "That's interesting. How does that make you feel?",
    "I understand. I'm listening.",
    "Thank you for sharing that with me.",
    "I'm always here to chat whenever you need.",
    "That sounds important to you.",
    "I appreciate you opening up to me.",
    "Let's explore that together."
];

// Add a message to the chat
function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Get random AI response
function getAIResponse() {
    return aiResponses[Math.floor(Math.random() * aiResponses.length)];
}

// Send message
function sendMessage() {
    const message = messageInput.value.trim();
    
    if (message) {
        // Add user message
        addMessage(message, true);
        messageInput.value = '';
        
        // Simulate AI response after a short delay
        setTimeout(() => {
            addMessage(getAIResponse(), false);
        }, 1000);
    }
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Welcome message
addMessage('Hello! I\'m your AI friend. How can I support you today?', false);
