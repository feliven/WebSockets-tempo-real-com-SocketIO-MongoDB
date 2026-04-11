import { ObjectId } from "mongodb";
import { documentosColecao } from "./dbConnect.ts";

export const criarDocumento = (nomeDocumento: string) => {
  const docCriado = documentosColecao.insertOne({ nome: nomeDocumento, conteudo: "" });
  return docCriado;
};

export const obterDocumentos = () => {
  const docs = documentosColecao.find().toArray();
  return docs;
};

export const encontrarDocumento = (idDocumento: string) => {
  const docProcurado = documentosColecao.findOne({ _id: new ObjectId(idDocumento) });

  return docProcurado;
};

export const atualizarDocumento = (idDocumento: string, texto: string) => {
  const resultadoAtualizacao = documentosColecao.updateOne(
    {
      _id: new ObjectId(idDocumento),
    },
    { $set: { conteudo: texto } },
  );

  return resultadoAtualizacao;
};

export const excluirDocumento = (idDocumento: string) => {
  const docExcluido = documentosColecao.deleteOne({ _id: new ObjectId(idDocumento) });
  return docExcluido;
};
