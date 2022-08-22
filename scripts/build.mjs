import { promisify } from "util";
import { exec } from "child_process";
import { resolve } from "path";
import { copyFile, rm, stat } from "fs/promises";
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
    // outExtension: { ".js": ".mjs" },
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

  copyFiles(),
  buildTypes(),
]);

async function copyFiles() {
  return Promise.all([
    copyOver(resolve(`${dirname}/../README.md`), "dist/README.md"),
    copyOver(resolve(`${dirname}/../LICENSE.md`), "dist/LICENSE.md"),
    copyOver(resolve(`${dirname}/../package.json`), "dist/package.json"),
  ]);
}

async function buildTypes() {
  const project = resolve(`${dirname}/../tsconfig.json`);
  const command = `tsc --project ${project} --emitDeclarationOnly --declaration --declarationDir dist`;
  const { stderr } = await promisify(exec)(command);

  if (stderr) {
    throw new Error(`tsc failed with \n${stderr}`);
  }
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
