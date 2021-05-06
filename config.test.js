const eslint = require("eslint")

async function lint(configFile, fileToTest) {
	const linter = new eslint.ESLint({
		overrideConfigFile: configFile,
	})
	return linter.lintFiles(fileToTest)
}

describe("Validate ESLint configs", () => {
	;["base.js", "react.js"].forEach((config) => {
		it(`load config ${config}`, async () => {
			expect.assertions(1)
			let err
			try {
				await lint(config, "index.js")
			} catch (e) {
				err = e
			}
			expect(err).toBe(undefined)
		})
	})
})
