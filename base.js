const native = require("./rules/import");
const theImport = require("./rules/import");
const prettier = require("./rules/prettier");
const typescript = require("./rules/import");

module.exports = {
  parser: "@typescript-eslint/parser",

  plugins: ["@typescript-eslint", "import", "prettier"],

  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

    "airbnb-typescript/base",

    "prettier",
    "prettier/@typescript-eslint",
  ],

  rules: {
    ...native,
    ...theImport,
    ...typescript,
    ...prettier,
  },
};
