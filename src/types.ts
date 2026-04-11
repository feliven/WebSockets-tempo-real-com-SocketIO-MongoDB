import type { WithId } from "mongodb";

export type Documento = {
  nome: string;
  conteudo: string;
};

export type ServerToClientEvents = {
  texto_para_clients: (texto: string) => void;
};

export type ClientToServerEvents = {
  criar_documento: (nomeDocumento: string) => void;
  excluir_documento: (idDocumento: string) => void;
  obter_documentos: (callback: (retornarDocs: WithId<Documento>[]) => WithId<Documento>[]) => void;
  selecionar_documento: (idDocumento: string, callback: (texto: string) => void) => void;
  texto_editor: (dados: WithId<Documento>) => void;
};

export type InterServerEvents = {
  ping: () => void;
};

export type SocketData = {
  name: string;
  age: number;
};
