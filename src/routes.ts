import { Router } from "express";
import { ClientsController } from "./controllers/ClientsController";
import { io, Socket } from "socket.io-client";

const routes = Router();

const clientsController = new ClientsController();

//  Routes
routes.get("/", clientsController.index);
routes.get("/client", clientsController.show);

export { routes };
