export type TextoENomeDocumento = {
  texto: string;
  nomeDocumento: string;
};

export type Documento = {
  nome: string;
  conteudo: string;
};

export type ServerToClientEvents = {
  texto_para_clients: (texto: string) => void;
};

export type ClientToServerEvents = {
  selecionar_documento: (nomeDocumento: string, callback: (texto: string) => void) => void;
  texto_editor: (dados: TextoENomeDocumento) => void;
};

export type InterServerEvents = {
  ping: () => void;
};

export type SocketData = {
  name: string;
  age: number;
};
