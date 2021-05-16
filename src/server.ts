import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { routes } from "./routes";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket: Socket) => {
  console.log("Successfully connected!");
  socket.on("client_show", (msg) => console.log(msg));
});

app.use(express.json());
app.use(routes);

export { httpServer, io };
