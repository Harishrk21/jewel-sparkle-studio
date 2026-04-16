import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

async function main() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const projectRoot = path.resolve(__dirname, "..");

  const serverEntryPath = path.resolve(projectRoot, "dist/server/index.js");
  const clientDir = path.resolve(projectRoot, "dist/client");
  const indexPath = path.resolve(clientDir, "index.html");
  const notFoundPath = path.resolve(clientDir, "404.html");

  const serverEntryModule = await import(pathToFileURL(serverEntryPath).href);
  const server = serverEntryModule.default;

  if (!server || typeof server.fetch !== "function") {
    throw new Error("Failed to load SSR server entry from dist/server/index.js");
  }

  const response = await server.fetch(
    new Request("https://example.netlify.app/", { method: "GET" }),
  );

  if (!response.ok) {
    throw new Error(`SSR render failed with status ${response.status}`);
  }

  const html = await response.text();
  if (!html || !html.includes("<html")) {
    throw new Error("SSR output did not contain valid HTML");
  }

  await mkdir(clientDir, { recursive: true });
  await writeFile(indexPath, html, "utf8");
  await writeFile(notFoundPath, html, "utf8");

  console.log("Generated dist/client/index.html and dist/client/404.html for Netlify.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
