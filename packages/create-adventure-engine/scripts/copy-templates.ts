import fs from "node:fs/promises";
import path from "node:path";
import { execa } from "execa";
import { glob } from "glob";

(async () => {
  const packageDir = path.resolve(__dirname, "..");
  const rootDir = path.resolve(packageDir, "../..");

  console.log("rootDir:", rootDir);
  console.log("packageDir:", packageDir);

  console.log("Starting to retrieve MUD package names...");
  const mudPackageNames = await (async () => {
    const files = await glob("packages/*/package.json", { cwd: rootDir });
    console.log(`Found ${files.length} package.json files`);
    const packages = await Promise.all(
      files.map(async (file) => {
        const content = await fs.readFile(path.join(rootDir, file), "utf-8");
        console.log(`Reading file: ${file}`);
        return JSON.parse(content);
      }),
    );
    const filteredPackages = packages.filter((p) => !p.private);
    console.log(`Filtered down to ${filteredPackages.length} public packages`);
    return filteredPackages.map((p) => p.name);
  })();

  console.log("Retrieving template file list...");
  const files = (await execa("git", ["ls-files", "templates"], { cwd: rootDir })).stdout.trim().split("\n");
  console.log(`Found ${files.length} template files`);

  for (const file of files) {
    const sourcePath = path.resolve(rootDir, file);
    const destPath = path.resolve(
      packageDir,
      "dist",
      file.replace(/\.gitignore$/, "gitignore"),
    );

    console.log(`Processing file: ${file}`);
    await fs.mkdir(path.dirname(destPath), { recursive: true });
    console.log(`Created directory: ${path.dirname(destPath)}`);

    if (/package.json$/.test(destPath)) {
      console.log(`Processing package.json file: ${file}`);
      const source = await fs.readFile(sourcePath, "utf-8");
      const updatedSource = source.replace(/"([^"]+)":\s*"(link|file):[^"]+"/g, (match, packageName) =>
        mudPackageNames.includes(packageName) ? `"${packageName}": "{{mud-version}}"` : match,
      );
      await fs.writeFile(destPath, updatedSource);
      console.log(`Written updated package.json to: ${destPath}`);
    } else if (/templates\/[^/]+\/tsconfig.json/.test(destPath)) {
      console.log(`Replacing tsconfig.json file: ${file}`);
      await fs.copyFile(path.join(__dirname, "tsconfig.base.json"), destPath);
      console.log(`Copied tsconfig.base.json to: ${destPath}`);
    } else {
      console.log(`Copying file: ${file}`);
      await fs.copyFile(sourcePath, destPath);
      console.log(`Copy completed: ${destPath}`);
    }
  }
  console.log("All files processed successfully");
})();
