// Native ESLint rules which extend Prettier config
// See: https://github.com/prettier/eslint-config-prettier/blob/9444ee0b20f9af3ff364f62d6a9ab967ad673a9d/index.js#L8
module.exports = {
	rules: {
		curly: ["error", "all"],
		"no-unexpected-multiline": "error",
	},
}
