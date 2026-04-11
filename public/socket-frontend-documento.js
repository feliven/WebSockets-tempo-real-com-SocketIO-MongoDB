import { atualizarTextoEditor, desabilitarEdicao } from "./documento.js";

const socket = io("http://localhost:3000");

export const selecionarDocumento = (idDocumento) => {
  socket.emit("selecionar_documento", idDocumento, (texto) => {
    atualizarTextoEditor(texto);
  });
};

export const emitirTextoDigitado = (dados) => {
  socket.emit("texto_editor", dados);
};

export const excluirDocumento = (idDocumento) => {
  socket.emit("excluir_documento", idDocumento);
};

socket.on("texto_para_clients", (texto) => {
  atualizarTextoEditor(texto);
});

socket.on("documento_excluido", (idDocumentoExcluido) => {
  desabilitarEdicao(idDocumentoExcluido);
});

socket.on("disconnect", (motivo) => {
  console.log(`Servidor desconectado!
  Motivo: ${motivo}`);
});
