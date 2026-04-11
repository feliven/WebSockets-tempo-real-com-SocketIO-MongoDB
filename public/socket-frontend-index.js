import { listarLinkDocumento, listarTodosOsDocumentos, removerLinkDocumento } from "./index.js";

const socket = io("http://localhost:3000");

socket.emit("obter_documentos", (docs) => {
  console.log({ docs });
  listarTodosOsDocumentos(docs);
});

export const criarDocumento = (nomeDoc) => {
  socket.emit("criar_documento", nomeDoc);
};

socket.on("atualizar_homepage", (doc) => {
  // alert(`Documento com id ${id} foi adicionado. Recarregando página...`);
  // window.location.reload();

  if (doc && !doc.nome) {
    removerLinkDocumento(doc._id);
  } else {
    listarLinkDocumento(doc);
  }
});
