import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./src/index.ts",
    output: {
      file: "dist/umd/uci-parser-ts.development.js",
      name: "uci",
      format: "umd",
    },
    plugins: [commonjs(), typescript(), nodeResolve()],
  },
  {
    input: "./src/index.ts",
    output: {
      file: "dist/umd/uci-parser-ts.production.js",
      name: "uci",
      format: "umd",
    },
    plugins: [terser(), commonjs(), typescript(), nodeResolve()],
  },
];
