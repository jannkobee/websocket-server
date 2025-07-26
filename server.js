const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// ➕ HTTP route on /
app.get("/", (req, res) => {
  res.send("🚀 WebSocket server is running");
});

// 🔌 Socket.IO logic
io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);

  socket.on("join", (room) => {
    socket.join(room);
    console.log(`${socket.id} joined room: ${room}`);
  });

  socket.on("message", ({ room, message }) => {
    io.to(room).emit("message", { from: socket.id, message });
  });

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

// ✅ Listen on port 3001
server.listen(3001, () => {
  console.log("✅ WebSocket server listening on port 3001");
});
