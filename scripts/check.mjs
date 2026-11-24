import { existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const errors = [];
const requiredFiles = [
  ".github/agents/build-engineer.agent.md",
  ".github/skills/project-scaffold/SKILL.md",
  ".github/skills/build-and-test/SKILL.md",
  ".github/skills/github-actions/SKILL.md",
  ".github/workflows/ci.yml",
  "package.json",
  "tsconfig.json",
  "src/greeting.ts",
  "src/hello.ts",
  "tests/greeting.test.ts",
  "ci.bat",
  "ci.sh",
];

for (const file of requiredFiles) {
  if (!existsSync(file)) errors.push(`Відсутній файл: ${file}`);
}

const promptFiles = [
  "git-init.prompt.md", "create-project.prompt.md", "create-build.prompt.md",
  "create-actions.prompt.md", "check.prompt.md", "init.prompt.md",
];
for (const file of promptFiles) {
  if (!existsSync(`.github/prompts/${file}`)) errors.push(`Відсутня command: ${file}`);
}

if (existsSync(".github/workflows/ci.yml")) {
  const workflow = readFileSync(".github/workflows/ci.yml", "utf8");
  for (const os of ["ubuntu-latest", "windows-latest", "macos-latest"]) {
    if (!workflow.includes(os)) errors.push(`Workflow не містить ${os}`);
  }
}

if (existsSync(".gitignore")) {
  const gitignore = readFileSync(".gitignore", "utf8");
  for (const entry of ["node_modules/", "dist/", "build/"]) {
    if (!gitignore.includes(entry)) errors.push(`.gitignore не містить ${entry}`);
  }
}

if (errors.length === 0) {
  try {
    const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
    execFileSync(npmCommand, ["run", "ci"], {
      stdio: "inherit",
      shell: process.platform === "win32",
    });
  } catch {
    errors.push("Команда npm run ci завершилася помилкою");
  }
}

if (errors.length) {
  console.error("Перевірка не пройшла:");
  errors.forEach((error, index) => console.error(`${index + 1}. ${error}`));
  process.exit(1);
}

console.log("Перевірка успішна: структура, CI-матриця, build і Vitest пройдені.");
