module.exports = {
	plugins: ["@typescript-eslint", "import"],
	extends: [
		"airbnb",
		"airbnb-typescript/base",

		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",

		"./rules/native.js",
		"./rules/import.js",
		"./rules/typescript.js",

		"prettier",

		"./rules/prettier-override.js",
	],
}
