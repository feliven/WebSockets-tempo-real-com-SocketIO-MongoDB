import type { Documento } from "./types.ts";
import io from "./Server.ts";
// When using nodenext module resolution, you need to import the .ts file, not .js.

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

const encontrarDocumento = (nomeDocumento: string) => {
  return documentos.find((doc) => {
    return doc.nome === nomeDocumento;
  });
};

io.on("connection", (socket) => {
  console.log("um usuário se conectou", socket.id);

  socket.on("selecionar_documento", (nomeDocumento, retornarTexto) => {
    socket.join(nomeDocumento);

    const doc = encontrarDocumento(nomeDocumento);

    if (doc) {
      retornarTexto(doc.conteudo);
    }
  });

  socket.on("texto_editor", ({ texto, nomeDocumento }) => {
    const doc = encontrarDocumento(nomeDocumento);

    if (doc) {
      doc.conteudo = texto;

      socket.to(nomeDocumento).emit("texto_para_clients", texto);
    }
  });

  socket.on("disconnect", (motivo) => {
    console.log(`Cliente "${socket.id}" desconectado!
    Motivo: ${motivo}`);
  });
});
