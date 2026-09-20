import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const siteContentPath = path.join(rootDir, "app/content/site.ts");
const outputDir = path.join(rootDir, "build/client");
const dotEnvPath = path.join(rootDir, ".env");

function normalizeSiteUrl(value) {
  if (!value) return null;

  const trimmed = value.trim();

  if (!trimmed) return null;

  return trimmed.startsWith("http://") || trimmed.startsWith("https://")
    ? trimmed.replace(/\/+$/, "")
    : `https://${trimmed.replace(/\/+$/, "")}`;
}

function extractPaths(source) {
  const hiddenPaths = new Set(["/team"]);

  return [...source.matchAll(/path:\s*"([^"]+)"/g)]
    .map((match) => match[1])
    .filter((routePath) => !hiddenPaths.has(routePath));
}

function parseDotEnvValue(value) {
  const trimmed = value.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

async function readDotEnvSiteUrl() {
  try {
    const source = await readFile(dotEnvPath, "utf8");

    for (const line of source.split(/\r?\n/)) {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith("#")) continue;

      const separatorIndex = trimmed.indexOf("=");

      if (separatorIndex === -1) continue;

      const key = trimmed.slice(0, separatorIndex).trim();

      if (key !== "SITE_URL") continue;

      const value = trimmed.slice(separatorIndex + 1);

      return normalizeSiteUrl(parseDotEnvValue(value));
    }
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return null;
    }

    throw error;
  }

  return null;
}

async function resolveSiteUrl() {
  return (
    normalizeSiteUrl(
      process.env.SITE_URL ??
        process.env.URL ??
        process.env.DEPLOY_PRIME_URL ??
        process.env.DEPLOY_URL ??
        process.env.VERCEL_PROJECT_PRODUCTION_URL ??
        process.env.VERCEL_URL
    ) ?? (await readDotEnvSiteUrl())
  );
}

async function main() {
  const siteContentSource = await readFile(siteContentPath, "utf8");
  const paths = extractPaths(siteContentSource);
  const siteUrl = (await resolveSiteUrl()) ?? "https://example.com";

  if (siteUrl === "https://example.com") {
    console.warn(
      "generate-seo-files: SITE_URL is not set, using https://example.com"
    );
  }

  const robotsBody = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  const sitemapBody = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((routePath) => `  <url><loc>${new URL(routePath, `${siteUrl}/`).toString()}</loc></url>`).join("\n")}
</urlset>
`;

  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "robots.txt"), robotsBody);
  await writeFile(path.join(outputDir, "sitemap.xml"), sitemapBody);

  console.log(
    `generate-seo-files: wrote robots.txt and sitemap.xml to ${outputDir}`
  );
}

await main();
