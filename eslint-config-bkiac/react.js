module.exports = {
	plugins: ["@typescript-eslint", "import", "react-hooks"],
	extends: [
		"airbnb",
		"airbnb/hooks",
		"airbnb-typescript",

		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",

		"./rules/native.js",
		"./rules/import.js",
		"./rules/typescript.js",
		"./rules/react.js",

		"prettier",

		"./rules/prettier-override.js",
	],
}
