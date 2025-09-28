const http = require("http");
const WebSocket = require("ws");
const mysql = require("mysql");

const server = http.createServer();
const wss = new WebSocket.Server({ server });

const db = mysql.createConnection({
    host: "localhost",
    user: "chatuser",
    password: "chatpass123",
    database: "chatapp"
});


db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected!");
});

wss.on("connection", ws => {
    console.log("New client connected");

    ws.on("message", data => {
        const parsed = JSON.parse(data);
        const message = parsed.message;

        // Save to DB (anonymous user_id = 1 for example)
        db.query("INSERT INTO messages (group_id, user_id, message) VALUES (1, 1, ?)", [message]);

        // Broadcast to all
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ user: "anonymous", message }));
            }
        });
    });
});

server.listen(3000, () => console.log("Server running on http://localhost:3000"));
