import { Request, Response } from "express";
import { io, Socket } from "socket.io-client";

const URL = "http://localhost:3000";

class ClientsController {
  async index(request: Request, response: Response) {
    const socket: Socket = io(URL);
    socket.on("connect", () => console.log("User id:", socket.id));
    response.json({ ok: "Index Success" });
  }

  async show(request: Request, response: Response) {
    const socket: Socket = io(URL);
    socket.emit("client_show", `Client emit response`);
    response.json({ ok: "Client response success" });
  }
}

export { ClientsController };
