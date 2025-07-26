const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "*", // or whitelist domains
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);

  // Auth Middleware Example
  socket.use(([event, ...args], next) => {
    // You can validate JWT here
    next();
  });

  // Example events
  socket.on("join", (room) => {
    socket.join(room);
    console.log(`${socket.id} joined ${room}`);
  });

  socket.on("message", ({ room, message }) => {
    io.to(room).emit("message", { from: socket.id, message });
  });

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

server.listen(3001, () => {
  console.log("WebSocket server running on port 3001");
});
