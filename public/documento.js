import { emitirTextoDigitado } from "./socket-frontend.js";

const elEditorTexto = document.getElementById("editor-texto");

elEditorTexto.addEventListener("keyup", (e) => {
  const textoDigitado = e.target.value;

  emitirTextoDigitado(textoDigitado);
});

export const atualizarTextoEditor = (texto) => {
  elEditorTexto.value = texto;
};
