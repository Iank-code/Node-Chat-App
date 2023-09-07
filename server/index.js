const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const router = require("./router");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(router);
io.on("connection", (socket) => {
  console.log("We have a new connectionq");

  socket.on("disconnect", () => {
    console.log("User just disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
