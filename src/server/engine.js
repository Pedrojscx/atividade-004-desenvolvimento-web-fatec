import { readFile } from "node:fs/promises";
import { pathHeader } from "./paths.js";

// Monta a página com o cabeçalho compartilhado
export async function renderPagina(filePath, _options, callback) {
  try {
    const htmlPagina = await readFile(filePath, "utf8");
    const htmlHeader = await readFile(pathHeader, "utf8");
    const paginaCompleta = htmlPagina.replace("<!-- shared-header -->", htmlHeader);

    callback(null, paginaCompleta);
  } catch (error) {
    callback(error);
  }
}
