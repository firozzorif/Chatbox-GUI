# Chatbox GUI

A real-time group chat application built with WebSocket and MySQL.

## Features

- Real-time messaging using WebSocket
- Anonymous chat functionality
- MySQL database integration for message persistence
- Clean and responsive UI

## Prerequisites

- Node.js (v14 or higher)
- MySQL database
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone https://github.com/firozzorif/Chatbox-GUI.git
cd Chatbox-GUI
```

2. Install dependencies:

```bash
npm install
```

3. Set up MySQL database:

   - Create a database named `chatapp`
   - Create a user `chatuser` with password `chatpass123`
   - Create the required tables (messages table with group_id, user_id, message columns)

4. Start the server:

```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

- Open the application in your browser
- Type messages in the input field and press Enter or click the send button
- Messages are displayed in real-time for all connected users
- All messages are stored in the MySQL database

## Technologies Used

- Node.js
- WebSocket (ws library)
- MySQL
- HTML/CSS/JavaScript
- HTTP Server

## License

MIT License
