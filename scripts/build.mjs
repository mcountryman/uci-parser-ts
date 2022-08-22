import { promisify } from "util";
import { exec } from "child_process";
import { resolve } from "path";
import { copyFile, mkdir, rm, stat } from "fs/promises";
import { build } from "esbuild";
import glob from "glob";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import esbuild from "rollup-plugin-esbuild";
import { rollup } from "rollup";

// eslint-disable-next-line no-undef
const dirname = new URL(".", import.meta.url).pathname;
const entryPoints = await promisify(glob)("src/**/*.ts");

await Promise.all([
  build({
    entryPoints,
    format: "esm",
    outdir: "dist/",
  }),

  build({
    entryPoints,
    format: "cjs",
    outdir: "dist/node",
  }),

  rollup({
    input: "./src/index.ts",
    output: {
      file: "dist/umd/uci-parser-ts.development.js",
      name: "uci",
      format: "umd",
    },
    plugins: [commonjs(), esbuild(), nodeResolve()],
  }),

  rollup({
    input: "./src/index.ts",
    output: {
      file: "dist/umd/uci-parser-ts.production.js",
      name: "uci",
      format: "umd",
    },
    plugins: [terser(), commonjs(), esbuild(), nodeResolve()],
  }),

  typedoc(),
  copyFiles(),
  buildTypes(),
]);

async function copyFiles() {
  try {
    await mkdir("dist");
  } catch {
    // Do nothing assuming dist directory already exists
  }

  return Promise.all([
    copyOver(resolve(`${dirname}/../README.md`), "dist/README.md"),
    copyOver(resolve(`${dirname}/../LICENSE.md`), "dist/LICENSE.md"),
    copyOver(resolve(`${dirname}/../package.json`), "dist/package.json"),
  ]);
}

async function typedoc() {
  const entry = resolve(`${dirname}/../src/index.ts`);
  const project = resolve(`${dirname}/../tsconfig.json`);
  const examples = resolve(`${dirname}/../examples/`);
  const command = `typedoc ${entry} --tsconfig ${project} --includes ${examples} --out docs`;

  const { stderr } = await promisify(exec)(command);
  if (stderr) {
    throw new Error(`typedoc failed\n${stderr}`);
  }
}

async function buildTypes() {
  const project = resolve(`${dirname}/../tsconfig.json`);
  const command = `tsc --project ${project} --emitDeclarationOnly --declaration --declarationDir dist/node`;
  const { stderr } = await promisify(exec)(command);

  if (stderr) {
    throw new Error(`tsc failed with \n${stderr}`);
  }

  const types = await promisify(glob)("dist/node/**/*.d.ts");
  const operations = types.map((type) => copyOver(type, type.replace(/node\//, "")));

  await Promise.all(operations);
}

async function copyOver(from, to) {
  try {
    const stats = await stat(to);
    if (stats.isFile()) {
      await rm(to);
    }
  } catch {
    // do nothing
  }

  return copyFile(from, to);
}
