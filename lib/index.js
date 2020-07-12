module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",

    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    
    "@bkiac/eslint-config/base",
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
