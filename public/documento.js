import { emitirTextoDigitado, excluirDocumento, selecionarDocumento } from "./socket-frontend-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");
const idDocumento = parametros.get("id");

const elemTituloDocumento = document.getElementById("titulo-documento");
elemTituloDocumento.textContent = nomeDocumento || "Documento sem título";

const elemEditorTexto = document.getElementById("editor-texto");
const elemBotaoExcluir = document.getElementById("excluir-documento");

elemEditorTexto.addEventListener("keyup", (e) => {
  if (elemEditorTexto.disabled) return;

  const textoDigitado = e.target.value;
  const doc = { _id: idDocumento, conteudo: textoDigitado, nome: nomeDocumento };
  emitirTextoDigitado(doc);
});

elemBotaoExcluir.addEventListener("click", () => {
  excluirDocumento(idDocumento);
  window.location.assign("/public/index.html");
});

export const atualizarTextoEditor = (texto) => {
  elemEditorTexto.value = texto;
};

export const desabilitarEdicao = (idDocumentoExcluido) => {
  elemBotaoExcluir.disabled = true;

  if (idDocumentoExcluido === idDocumento) {
    elemEditorTexto.disabled = true;
    elemEditorTexto.placeholder = "Este documento foi excluído.";
    alert("Este documento foi excluído por outro usuário!");
  }
};

selecionarDocumento(idDocumento, (resposta) => {
  if (!resposta.existe) {
    elemBotaoExcluir.disabled = true;

    elemTituloDocumento.textContent = "(Documento inexistente)";
    elemEditorTexto.disabled = true;
    elemEditorTexto.placeholder = "Documento não existe ou foi removido.";
    return;
  }
  elemEditorTexto.value = resposta.conteudo;
});
