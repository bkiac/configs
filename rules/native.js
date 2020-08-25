module.exports = {
  rules: {
    curly: ["error", "all"],
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "no-console": "error",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-unexpected-multiline": "error",
    "no-underscore-dangle": "off",
    "no-void": "off",
    semi: ["error", "never", { beforeStatementContinuationChars: "never" }],
  },
};
