import type { WithId } from "mongodb";

export type Documento = {
  nome: string;
  conteudo: string;
};

export type DocumentoResposta = {
  existe: boolean;
  conteudo: string | null;
};

export type ServerToClientEvents = {
  texto_para_clients: (texto: string) => void;
  documento_excluido: (idDocumento: string) => void;
  atualizar_homepage: (doc: Partial<WithId<Documento>>) => void;
};

export type ClientToServerEvents = {
  criar_documento: (nomeDocumento: string) => void;
  excluir_documento: (idDocumento: string) => void;
  obter_documentos: (callback: (retornarDocs: WithId<Documento>[]) => void) => void;
  selecionar_documento: (idDocumento: string, callback: (resposta: DocumentoResposta) => void) => void;
  texto_editor: (dados: WithId<Documento>) => void;
};

export type InterServerEvents = {
  ping: () => void;
};

export type SocketData = {
  name: string;
  age: number;
};
