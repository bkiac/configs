module.exports = {
  parser: "@typescript-eslint/parser",

  plugins: ["@typescript-eslint", "import", "prettier"],

  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

    "airbnb-typescript/base",

    "prettier",
    "prettier/@typescript-eslint",

    "./rules/native.js",
    "./rules/import.js",
    "./rules/prettier.js",
    "./rules/typescript.js",
  ],
};
