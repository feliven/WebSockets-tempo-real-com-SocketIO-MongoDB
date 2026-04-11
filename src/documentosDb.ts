import { documentosColecao } from "./dbConnect.ts";

export const criarDocumento = (nomeDocumento: string) => {
  const docCriado = documentosColecao.insertOne({ nome: nomeDocumento, conteudo: "" });
  return docCriado;
};

export const obterDocumentos = () => {
  const docs = documentosColecao.find().toArray();
  return docs;
};

export const encontrarDocumento = (nomeDocumento: string) => {
  const docProcurado = documentosColecao.findOne({ nome: nomeDocumento });

  return docProcurado;
};

export const atualizarDocumento = (nomeDocumento: string, texto: string) => {
  const resultadoAtualizacao = documentosColecao.updateOne(
    {
      nome: nomeDocumento,
    },
    { $set: { conteudo: texto } },
  );

  return resultadoAtualizacao;
};
