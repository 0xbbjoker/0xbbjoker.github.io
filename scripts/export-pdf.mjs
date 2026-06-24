// Renders the dedicated /cv resume route from the built site to a print PDF.
// Run after `astro build` (the npm script chains them). Writes the canonical
// copy to public/assets and mirrors it into dist/assets for local preview.
import { chromium } from "playwright";
import http from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const fileName = "Benjamin_Berta_CV_2026.pdf";

const types = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".json": "application/json",
  ".webmanifest": "application/manifest+json",
};

const server = http.createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(req.url.split("?")[0]);
    if (p.endsWith("/")) p += "index.html";
    let fp = path.join(dist, p);
    let data;
    try {
      data = await readFile(fp);
    } catch {
      fp = path.join(dist, p, "index.html");
      data = await readFile(fp);
    }
    res.writeHead(200, {
      "content-type": types[path.extname(fp)] || "application/octet-stream",
    });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end("404");
  }
});

await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`${base}/cv/`, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });

const pdf = await page.pdf({
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
});

await browser.close();
server.close();

const targets = [
  path.join(root, "public", "assets", fileName),
  path.join(dist, "assets", fileName),
];
for (const t of targets) {
  await mkdir(path.dirname(t), { recursive: true });
  await writeFile(t, pdf);
  console.log(t);
}
