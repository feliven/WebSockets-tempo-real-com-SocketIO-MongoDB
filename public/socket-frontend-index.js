import { listarLinkDocumento, listarTodosOsDocumentos, removerLinkDocumento } from "./index.js";

const socket = io("http://localhost:3000");

socket.emit("obter_documentos", (docs) => {
  console.log({ docs });
  listarTodosOsDocumentos(docs);
});

export const criarDocumento = (nomeDoc) => {
  socket.emit("criar_documento", nomeDoc);
};

socket.on("adicionar_doc_homepage", (doc) => {
  listarLinkDocumento(doc);
});

socket.on("remover_doc_homepage", (id) => {
  removerLinkDocumento(id);
});
