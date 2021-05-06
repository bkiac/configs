const eslint = require("eslint")
const path = require("path")

const configFiles = [
	path.join(__dirname, "test-eslint-config-bkiac-base.js"),
	path.join(__dirname, "test-eslint-config-bkiac.js"),
]
const exampleFile = path.join(__dirname, "example.ts")

async function lint(configFile, fileToTest) {
	const linter = new eslint.ESLint({
		overrideConfigFile: configFile,
	})
	return linter.lintFiles(fileToTest)
}

describe("validate ESLint configs", () => {
	configFiles.forEach((config) => {
		it(`loads config ${config}`, async () => {
			expect.assertions(1)
			let err
			try {
				await lint(config, exampleFile)
			} catch (e) {
				err = e
			}
			expect(err).toBe(undefined)
		})
	})
})
