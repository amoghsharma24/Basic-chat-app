const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server); // will handle the sockets

//socket.io

io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    io.emit("message", message);
  });
});

// trial commit

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});

server.listen(3000, () => {
  console.log("Server is running on port: 3000");
});
