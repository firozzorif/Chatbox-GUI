const ws = new WebSocket("ws://localhost:3000");

const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");

ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    displayMessage(msg.user, msg.message, false); // Always false for received messages
};

function sendMessage() {
    const message = messageInput.value;
    if (message.trim() === "") return;

    // Display your own message immediately on the right
    displayMessage("You", message, true);

    ws.send(JSON.stringify({ message }));
    messageInput.value = "";
}

function displayMessage(user, text, isSelf = false) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message");
    msgDiv.classList.add(isSelf ? "self" : "other");
    msgDiv.textContent = (user === "anonymous" ? "Anonymous: " : user === "You" ? "" : user + ": ") + text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
// Add Enter key support
messageInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});