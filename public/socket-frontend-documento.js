import { atualizarTextoEditor } from "./documento.js";

const socket = io("http://localhost:3000");

export const selecionarDocumento = (nomeDocumento) => {
  socket.emit("selecionar_documento", nomeDocumento, (texto) => {
    atualizarTextoEditor(texto);
  });
};

export const emitirTextoDigitado = (dados) => {
  socket.emit("texto_editor", dados);
};

socket.on("texto_para_clients", (texto) => {
  atualizarTextoEditor(texto);
});

socket.on("disconnect", (motivo) => {
  console.log(`Servidor desconectado!
  Motivo: ${motivo}`);
});
