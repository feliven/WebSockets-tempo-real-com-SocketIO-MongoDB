import { criarDocumento } from "./socket-frontend-index.js";

const elemListaDocumentos = document.getElementById("lista-documentos");

export const listarDocumentos = (docs) => {
  docs.forEach((doc) => {
    const nomeArquivo = doc.nome;
    const nomeArquivoUrl = nomeArquivo.replaceAll(" ", "+");
    const idArquivo = doc._id;

    // <a href="documento.html?nome=JavaScript" class="list-group-item list-group-item-action"> JavaScript </a>

    const linkDocumento = document.createElement("a");
    linkDocumento.textContent = nomeArquivo;
    linkDocumento.href = `documento.html?id=${idArquivo}&nome=${nomeArquivoUrl}`;
    linkDocumento.classList.add("list-group-item", "list-group-item-action");

    elemListaDocumentos.appendChild(linkDocumento);
  });
};

const elemNomeNovoDocumento = document.getElementById("input-documento");
const elemFormNovoDocumento = document.getElementById("form-adiciona-documento");

elemFormNovoDocumento.addEventListener("submit", () => {
  const nomeNovoDoc = elemNomeNovoDocumento.value;

  criarDocumento(nomeNovoDoc);
});
