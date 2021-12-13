import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const banner = `/*
THIS IS A GENERATED/BUNDLED FILE BY ROLLUP
if you want to view the source visit the plugins github repository
*/
`;

const output = [
  {
    input: "./src/main.ts",
    output: {
      dir: ".",
      sourcemap: "inline",
      format: "cjs",
      exports: "default",
      banner,
    },
    external: [
      "obsidian",
      "@codemirror/autocomplete",
      "@codemirror/closebrackets",
      "@codemirror/commands",
      "@codemirror/fold",
      "@codemirror/gutter",
      "@codemirror/history",
      "@codemirror/language",
      "@codemirror/rangeset",
      "@codemirror/rectangular-selection",
      "@codemirror/search",
      "@codemirror/state",
      "@codemirror/stream-parser",
      "@codemirror/text",
      "@codemirror/view",
    ],
    plugins: [typescript(), nodeResolve({ browser: true }), commonjs()],
  },
];

export default output;
