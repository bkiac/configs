module.exports = {
	plugins: ["@typescript-eslint", "import"],

	extends: [
		"airbnb-typescript/base",

		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",

		"./rules/native.js",
		"./rules/import.js",
		"./rules/typescript.js",

		"prettier",
		"prettier/@typescript-eslint",

		"./rules/prettier-override.js",
	],

	parser: "@typescript-eslint/parser",

	env: {
		node: true,
	},
}
