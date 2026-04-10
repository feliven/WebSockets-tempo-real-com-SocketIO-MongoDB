import { emitirTextoDigitado, selecionarDocumento } from "./socket-frontend.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const elTituloDocumento = document.getElementById("titulo-documento");
elTituloDocumento.textContent = nomeDocumento || "Documento sem título";
selecionarDocumento(nomeDocumento);

const elEditorTexto = document.getElementById("editor-texto");

elEditorTexto.addEventListener("keyup", (e) => {
  const textoDigitado = e.target.value;

  emitirTextoDigitado(textoDigitado, nomeDocumento);
});

export const atualizarTextoEditor = (texto) => {
  elEditorTexto.value = texto;
};
