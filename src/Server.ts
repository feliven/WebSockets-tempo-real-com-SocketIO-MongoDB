import express from "express";
import url from "url";
import path from "path";

const app = express();
const port = Number(process.env.port || 3000);

const pathAtual = url.fileURLToPath(import.meta.url);
const pathPublic = path.join(pathAtual, "../../public");
app.use(express.static(pathPublic));

app.listen(port);
