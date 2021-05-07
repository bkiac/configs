module.exports = {
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
			},
		},
	},

	rules: {
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				ts: "never",
				tsx: "never",
				js: "never",
				jsx: "never",
			},
		],
		"import/prefer-default-export": "off",
		"import/no-anonymous-default-export": "error",
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: [
					"test/**",
					"tests/**",
					"spec/**",
					"**/__tests__/**",
					"**/__mocks__/**",
					"test.{js,jsx,ts,tsx}",
					"test-*.{js,jsx,ts,tsx}",
					"**/*{.,_}{test,spec,stories}.{js,jsx,ts,tsx}",
					"**/jest.config.js",
					"**/jest.setup.js",
					"**/vue.config.js",
					"**/webpack.config.js",
					"**/webpack.config.*.js",
					"**/rollup.config.js",
					"**/rollup.config.*.js",
					"**/gulpfile.js",
					"**/gulpfile.*.js",
					"**/Gruntfile{,.js}",
					"**/protractor.conf.js",
					"**/protractor.conf.*.js",
					"**/karma.conf.js",
					"**/setupTests.{js,ts}",
					"**/setupProxy.{js,ts}",
				],
				optionalDependencies: false,
			},
		],
	},
}
