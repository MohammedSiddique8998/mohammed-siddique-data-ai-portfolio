import { copyFileSync, cpSync, existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const root = resolve(".");
const dist = join(root, "dist");
const required = [
  "index.html",
  "styles.css",
  "app.js",
  "assets/Mohammed_Siddique_Master_CV.pdf",
  "assets/Mohammed_Siddique_Master_CV.docx",
  "README.md",
];

const checks = [];
function pass(name, detail = "") {
  checks.push({ status: "PASS", name, detail });
}
function fail(name, detail = "") {
  checks.push({ status: "FAIL", name, detail });
}

for (const file of required) {
  const path = join(root, file);
  if (existsSync(path) && statSync(path).size > 0) pass(`Required file: ${file}`, `${statSync(path).size} bytes`);
  else fail(`Required file: ${file}`, "Missing or empty");
}

const html = readFileSync(join(root, "index.html"), "utf8");
const css = readFileSync(join(root, "styles.css"), "utf8");
const js = readFileSync(join(root, "app.js"), "utf8");

[
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "certifications",
  "resume",
  "contact",
].forEach((id) => {
  html.includes(`id="${id}"`) ? pass(`Section exists: #${id}`) : fail(`Section exists: #${id}`);
});

[
  "./assets/Mohammed_Siddique_Master_CV.pdf",
  "./assets/Mohammed_Siddique_Master_CV.docx",
].forEach((asset) => {
  html.includes(asset) ? pass(`CV link present: ${asset}`) : fail(`CV link present: ${asset}`);
});

["Contact Bot", "capability matrix", "portfolio intelligence", "AI Fit"].forEach((oldText) => {
  html.toLowerCase().includes(oldText.toLowerCase()) || js.toLowerCase().includes(oldText.toLowerCase())
    ? fail(`Removed old wording: ${oldText}`, "Still present")
    : pass(`Removed old wording: ${oldText}`);
});

if (html.includes("mailto:siddique.infra08091998@gmail.com")) pass("Chatbot mailto fallback present");
else fail("Chatbot mailto fallback present");

if (js.includes("document.querySelectorAll(\"a[download]\")")) pass("Download fallback handler present");
else fail("Download fallback handler present");

if (css.includes("@media (max-width: 980px)") && css.includes("@media (max-width: 640px)")) {
  pass("Responsive breakpoints present");
} else fail("Responsive breakpoints present");

if (css.includes("motion-portal") && js.includes("replayMotion")) pass("3D replay animation present");
else fail("3D replay animation present");

if (checks.some((item) => item.status === "FAIL")) {
  console.table(checks);
  process.exitCode = 1;
} else {
  rmSync(dist, { recursive: true, force: true });
  mkdirSync(dist, { recursive: true });
  ["index.html", "styles.css", "app.js", "README.md", "package.json"].forEach((file) => {
    copyFileSync(join(root, file), join(dist, file));
  });
  cpSync(join(root, "assets"), join(dist, "assets"), { recursive: true });
  mkdirSync(join(dist, "scripts"), { recursive: true });
  copyFileSync(join(root, "scripts", "server.mjs"), join(dist, "scripts", "server.mjs"));
  const output = checks.map((item) => `${item.status}: ${item.name}${item.detail ? ` - ${item.detail}` : ""}`).join("\n");
  writeFileSync(join(root, "build-output.txt"), `${output}\n\nBuild output copied to dist/.\n`, "utf8");
  console.log(output);
  console.log("\nBuild output copied to dist/.");
}
