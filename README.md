# Real-Time Chat Application

A simple, real-time chat application built with Socket.io that allows users to communicate instantly in a shared chat room.

[check out here!]https://chat-app-l5n9.onrender.com

## Features

- Real-time messaging using Socket.io
- Simple username setup
- Clean and responsive user interface
- Message history display
- Visual distinction between sent and received messages
- Mobile-friendly design

## Technologies Used

- **Frontend:**
  - HTML5
  - CSS3
  - Vanilla JavaScript
- **Backend:**
  - Node.js
  - Socket.io
  - Express.js

## Prerequisites

Before running this application, ensure you have:
- Node.js installed (v12.0.0 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd chat-app
```

2. Install dependencies:
```bash
npm install express socket.io
```

3. Start the server:
```bash
node server.js
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
chat-app/
├── server.js
├── public/
│   ├── index.html
│   └── style.css
├── package.json
└── README.md
```

## Usage

1. Open the application in your web browser
2. Enter your username in the input field
3. Click "Set Name" to join the chat
4. Type your message in the input field
5. Click "Send" or press Enter to send your message
6. Messages will appear in the chat window, with your messages aligned to the right

## Server Implementation

Create a `server.js` file with the following basic setup:

```javascript
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
    socket.on('user-message', (data) => {
        io.emit('message', data);
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Potential Improvements

- Add user typing indicators
- Implement private messaging
- Add emoji support
- Store message history
- Add user authentication
- Implement different chat rooms
- Add file sharing capabilities
- Add read receipts

## Acknowledgments

- Socket.io documentation and team
- Express.js community
- Node.js community
