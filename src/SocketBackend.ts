import io from "./Server.ts";
// When using nodenext module resolution, you need to import the .ts file, not .js.

io.on("connection", (socket) => {
  console.log("um usuário se conectou", socket.id);

  socket.on("selecionar_documento", (nomeDocumento) => {
    socket.join(nomeDocumento);
  });

  socket.on("texto_editor", (texto) => {
    socket.broadcast.emit("texto_para_clients", texto);
  });

  socket.on("disconnect", (motivo) => {
    console.log(`Cliente "${socket.id}" desconectado!
    Motivo: ${motivo}`);
  });
});
