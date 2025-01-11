import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import pluginJest from "eslint-plugin-jest";
import pluginPrettier from "eslint-plugin-prettier/recommended";
// TODO: import checkFile from 'eslint-plugin-check-file';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { ignores: ["**/node_modules/**", "**/dist/**", "webpack.config.js", 'babel.config.js'] },
  { languageOptions: { globals: globals.browser } },
  { settings: {} },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  pluginPrettier,
  jsxA11y.flatConfigs.recommended,
  {
    files: ["**/__tests__/"],
    ...pluginJest.configs["flat/recommended"],
  },
  // TODO: checkFile
  // {
  //   files: ["src/**/*"],
  //   plugins: {
  //     "check-file": checkFile,
  //   },
  //   rules: {
  //     "check-file/no-index": "error",
  //     "check-file/filename-blocklist": [
  //       "error",
  //       {
  //         "**/*.model.ts": "*.models.ts",
  //         "**/*.util.ts": "*.utils.ts",
  //       },
  //     ],
  //     "check-file/folder-match-with-fex": [
  //       "error",
  //     ],
  //     "check-file/filename-naming-convention": [
  //       "error",
  //       {
  //         "**/*.{jsx,tsx}": "CAMEL_CASE",
  //         "**/*.{js,ts}": "KEBAB_CASE",
  //       },
  //     ],
  //     "check-file/folder-naming-convention": [
  //       "error",
  //       {
  //         "src/**/": "CAMEL_CASE",
  //         "mocks/*/": "KEBAB_CASE",
  //       },
  //     ],
  //   },
  // },
];
