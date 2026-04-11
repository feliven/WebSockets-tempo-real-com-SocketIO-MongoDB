import { criarDocumento } from "./socket-frontend-index.js";

const elemListaDocumentos = document.getElementById("lista-documentos");

export const listarLinkDocumento = (doc) => {
  const nomeArquivo = doc.nome;
  const nomeArquivoUrl = nomeArquivo.replaceAll(" ", "+");
  const idArquivo = doc._id;

  // <a href="documento.html?nome=JavaScript" class="list-group-item list-group-item-action"> JavaScript </a>

  const linkDocumento = document.createElement("a");
  linkDocumento.textContent = nomeArquivo;
  linkDocumento.href = `documento.html?id=${idArquivo}&nome=${nomeArquivoUrl}`;
  linkDocumento.classList.add("list-group-item", "list-group-item-action");
  linkDocumento.id = idArquivo;

  elemListaDocumentos.appendChild(linkDocumento);
};

export const listarTodosOsDocumentos = (docs) => {
  docs.forEach((doc) => {
    listarLinkDocumento(doc);
  });
};

export const removerLinkDocumento = (id) => {
  const linkDocumento = document.getElementById(id);
  linkDocumento.remove();
};

const elemNomeNovoDocumento = document.getElementById("input-documento");
const elemFormNovoDocumento = document.getElementById("form-adiciona-documento");

elemFormNovoDocumento.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nomeNovoDoc = elemNomeNovoDocumento.value;
  criarDocumento(nomeNovoDoc);
  elemNomeNovoDocumento.value = "";
});
