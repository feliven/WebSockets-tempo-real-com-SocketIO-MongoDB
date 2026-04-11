import { emitirTextoDigitado, excluirDocumento, selecionarDocumento } from "./socket-frontend-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");
const idDocumento = parametros.get("id");

const elemTituloDocumento = document.getElementById("titulo-documento");
elemTituloDocumento.textContent = nomeDocumento || "Documento sem título";
selecionarDocumento(idDocumento);

const elemEditorTexto = document.getElementById("editor-texto");

elemEditorTexto.addEventListener("keyup", (e) => {
  const textoDigitado = e.target.value;

  const doc = { _id: idDocumento, conteudo: textoDigitado, nome: nomeDocumento };

  emitirTextoDigitado(doc);
});

export const atualizarTextoEditor = (texto) => {
  elemEditorTexto.value = texto;
};

const elemBotaoExcluir = document.getElementById("excluir-documento");

elemBotaoExcluir.addEventListener("click", () => {
  excluirDocumento(idDocumento);
  window.location.assign("/public/index.html");
});
