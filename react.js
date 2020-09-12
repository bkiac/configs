module.exports = {
  plugins: ["@typescript-eslint", "import", "prettier", "react-hooks"],

  extends: [
    "airbnb-typescript",
    "airbnb/hooks",

    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

    "./rules/native.js",
    "./rules/import.js",
    "./rules/typescript.js",
    "./rules/react.js",

    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
  },
};
