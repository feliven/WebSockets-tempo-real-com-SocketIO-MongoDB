import { atualizarTextoEditor } from "./documento.js";

const socket = io();

export const emitirTextoDigitado = (textoDigitado) => {
  socket.emit("texto_editor", textoDigitado);
};

socket.on("texto_para_clients", (texto) => {
  atualizarTextoEditor(texto);
});

socket.on("disconnect", (motivo) => {
  console.log(`Servidor desconectado!
  Motivo: ${motivo}`);
});
