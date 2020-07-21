module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

    "airbnb-typescript",
    "airbnb/hooks",

    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",

    "./base.js",

    "./rules/react.js",
  ],

  env: {
    browser: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ["react-hooks"],
};
