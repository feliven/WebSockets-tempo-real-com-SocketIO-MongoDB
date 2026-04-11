import { Collection, MongoClient } from "mongodb";
import type { Documento } from "./types.ts";

const cliente = new MongoClient(
  "mongodb+srv://feliven_db_user:ArynxqC0R1Q3Caw5@custard.f2uk5gh.mongodb.net/?appName=custard",
);

export let documentosColecao: Collection<Documento>;

try {
  await cliente.connect();
  const db = cliente.db("alurawebsockets");
  documentosColecao = db.collection<Documento>("documentos");

  console.log("conexão ao db bem-sucedida");
} catch (error) {
  console.error(error);
}
