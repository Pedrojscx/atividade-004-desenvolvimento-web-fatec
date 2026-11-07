import express from "express";
import dotenv from "dotenv";
import path from "node:path";
import { publicPath } from "./paths.js";
import { renderPagina } from "./engine.js";
import { listRoutes } from "./routes.js";

dotenv.config({ quiet: true });

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Engine que inclui o cabeçalho compartilhado nas páginas
app.engine("html", renderPagina);
app.set("view engine", "html");
app.set("views", publicPath);

app.use("/assets", express.static(path.join(publicPath, "assets")));

app.use(listRoutes);

app.use(function (_req, res) {
  res.status(404).send("Página não encontrada");
});

app.listen(PORT, function () {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
