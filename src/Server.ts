import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

const port = Number(process.env.port || 3000);

const pathAtual = url.fileURLToPath(import.meta.url);
const pathPublic = path.join(pathAtual, "../../public");
app.use(express.static(pathPublic));

io.on("connection", (socket) => {
  console.log("um usuário se conectou");
});

httpServer.listen(port, () => {
  console.log("Server running on port 3000");
});
