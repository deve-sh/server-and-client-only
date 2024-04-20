const moduleName = process.argv[2];

if (!moduleName) throw new Error("Module name not specified for publishing");

const { execSync } = require("node:child_process");
const { readFileSync, writeFileSync } = require("node:fs");

writeFileSync(`${moduleName}/README.md`, readFileSync("README.md", "utf-8"));
execSync(`cd ${moduleName}`);
execSync('npm publish');

process.exit(0);