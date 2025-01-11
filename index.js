const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Socket.IO Logic
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("user-message", (data) => {
    const { user, message } = data;
    io.emit("message", { user, message }); // Broadcast message with user name
    console.log(`${user}: ${message}`);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html
app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
server.listen(3000, () => {
  console.log("Server is running on port: 3000");
});
