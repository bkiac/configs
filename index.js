module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",

    "./base.js",

    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
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

  rules: {
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
