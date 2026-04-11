import { listarDocumentos } from "./index.js";

const socket = io("http://localhost:3000");

socket.emit("obter_documentos", (docs) => {
  console.log({ docs });
  listarDocumentos(docs);
});
