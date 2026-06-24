import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = `file://${path.join(root, "index.html")}`;
const outputPath = path.join(root, "assets", "Benjamin_Berta_CV_2026.pdf");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1800 }, deviceScaleFactor: 1 });

await page.goto(htmlPath, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: outputPath,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  margin: {
    top: "10mm",
    right: "10mm",
    bottom: "12mm",
    left: "10mm"
  }
});

await browser.close();
console.log(outputPath);

