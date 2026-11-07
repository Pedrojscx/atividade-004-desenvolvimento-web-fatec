import path from "node:path";

export const publicPath = path.join(import.meta.dirname, "..", "public");
export const pathHeader = path.join(import.meta.dirname, "partials", "header.html");
