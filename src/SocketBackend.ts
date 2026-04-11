import type { Documento } from "./types.ts";
import io from "./Server.ts";
import {
  atualizarDocumento,
  criarDocumento,
  encontrarDocumento,
  excluirDocumento,
  obterDocumentos,
} from "./documentosDb.ts";
import type { WithId } from "mongodb";
// When using nodenext module resolution, you need to import the .ts file, not .js

const documentos: Documento[] = [
  {
    nome: "JavaScript",
    conteudo: "teste js",
  },
  {
    nome: "Node",
    conteudo: "teste node",
  },
  {
    nome: "Socket.io",
    conteudo: "teste socketIO",
  },
];

io.on("connection", (socket) => {
  console.log("um usuário se conectou", socket.id);

  socket.on("obter_documentos", async (retornarDocs) => {
    const docs = await obterDocumentos();

    retornarDocs(docs);
  });

  socket.on("criar_documento", async (nomeDocumento) => {
    await criarDocumento(nomeDocumento);
  });

  socket.on("excluir_documento", async (idDocumento) => {
    await excluirDocumento(idDocumento);
  });

  socket.on("selecionar_documento", async (idDocumento, retornarTexto) => {
    const doc = await encontrarDocumento(idDocumento);

    if (doc) {
      socket.join(doc._id.toString());

      retornarTexto(doc.conteudo);
    }
  });

  socket.on("texto_editor", async ({ _id, conteudo }) => {
    const resultadoAtualizacao = await atualizarDocumento(_id.toString(), conteudo);

    if (resultadoAtualizacao.modifiedCount) {
      socket.to(_id.toString()).emit("texto_para_clients", conteudo);
    }
  });

  socket.on("disconnect", (motivo) => {
    console.log(`Cliente "${socket.id}" desconectado!
    Motivo: ${motivo}`);
  });
});
