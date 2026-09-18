import fs from "node:fs";
import assert from "node:assert";

console.log("Running repository setup verification...");

// 1. Verify next.config.ts has output: 'export'
const nextConfig = fs.readFileSync("next.config.ts", "utf-8");
assert(nextConfig.includes(`output: "export"`), "next.config.ts must contain output: 'export'");
assert(nextConfig.includes(`unoptimized: true`), "next.config.ts must contain unoptimized: true");

// 2. Verify directories exist
assert(fs.existsSync("app"), "Directory 'app/' must exist");
assert(fs.existsSync("components/ui"), "Directory 'components/ui/' must exist");
assert(fs.existsSync("components/layout"), "Directory 'components/layout/' must exist");
assert(fs.existsSync("data"), "Directory 'data/' must exist");
assert(fs.existsSync("public/images"), "Directory 'public/images/' must exist");

// 3. Verify static export output files
assert(fs.existsSync("out/index.html"), "out/index.html must be generated");
assert(fs.existsSync("out/robots.txt"), "out/robots.txt must be generated");
assert(fs.existsSync("out/sitemap.xml"), "out/sitemap.xml must be generated");

const sitemap = fs.readFileSync("out/sitemap.xml", "utf-8");
assert(sitemap.includes("<loc>https://daswel.com</loc>"), "Sitemap must include root url");
assert(sitemap.includes("<loc>https://daswel.com/products</loc>"), "Sitemap must include products url");

console.log("All setup verification checks passed successfully!");
