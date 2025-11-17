let chatbotMsgList = [
    "Hi",
    "Hello dear ❤️",
    "Good Morning ☀️",
    "Good Evening 🌙",
    "How can I help you?",
    "Thank You 😊",
    "I am always here for you ❤️"
];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");

function sendMsgToChatbot() {

    let userMsg = userInputEl.value.trim();

    // Prevent empty message
    if (userMsg === "") {
        return;
    }

    // USER message container
    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    // USER message bubble
    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(userMsgEl);

    // Clear input
    userInputEl.value = "";

    // Scroll to bottom
    chatContainerEl.scrollTop = chatContainerEl.scrollHeight;

    // Bot Reply
    getReplyFromChatbot();
}

function getReplyFromChatbot() {

    let index = Math.floor(Math.random() * chatbotMsgList.length);
    let chatbotMsg = chatbotMsgList[index];

    // BOT message container
    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgContainerEl);

    // BOT message bubble
    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatbotMsg;
    chatbotMsgEl.classList.add("msg-from-chatbot");
    msgContainerEl.appendChild(chatbotMsgEl);

    // Auto scroll
    chatContainerEl.scrollTop = chatContainerEl.scrollHeight;
}