module.exports = {
	// Supported Rules
	rules: {
		"@typescript-eslint/adjacent-overload-signatures": "error",

		"@typescript-eslint/array-type": ["error", { default: "array" }],

		"@typescript-eslint/await-thenable": "error",

		"@typescript-eslint/ban-ts-comment": [
			"error",
			{
				"ts-expect-error": "allow-with-description",
				"ts-ignore": true,
				"ts-nocheck": true,
				"ts-check": false,
				minimumDescriptionLength: 3,
			},
		],
		"@typescript-eslint/ban-tslint-comment": "error",
		"@typescript-eslint/ban-types": [
			"error",
			{
				types: {
					String: {
						message: "Use string instead",
						fixWith: "string",
					},
					Boolean: {
						message: "Use boolean instead",
						fixWith: "boolean",
					},
					Number: {
						message: "Use number instead",
						fixWith: "number",
					},
					Symbol: {
						message: "Use symbol instead",
						fixWith: "symbol",
					},

					Function: {
						message: [
							"The `Function` type accepts any function-like value.",
							"It provides no type safety when calling the function, which can be a common source of bugs.",
							"It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.",
							"If you are expecting the function to accept certain arguments, you should explicitly define the function shape.",
						].join("\n"),
					},

					// object typing
					Object: {
						message: [
							'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
							'- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
							'- If you want a type meaning "any value", you probably want `unknown` instead.',
						].join("\n"),
					},
					"{}": {
						message: [
							'`{}` actually means "any non-nullish value".',
							'- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
							'- If you want a type meaning "any value", you probably want `unknown` instead.',
						].join("\n"),
					},
					object: {
						message: [
							"The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).",
							"Consider using `Record<string, unknown>` instead, as it allows you to more easily inspect and use the keys.",
						].join("\n"),
					},
				},
			},
		],

		"@typescript-eslint/class-literal-property-style": "off",

		"@typescript-eslint/consistent-type-assertions": [
			"error",
			{ assertionStyle: "as", objectLiteralTypeAssertions: "never" },
		],
		"@typescript-eslint/consistent-type-definitions": "off",
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				prefer: "type-imports",
				disallowTypeAnnotations: true,
			},
		],

		"@typescript-eslint/explicit-function-return-type": [
			"error",
			{
				allowExpressions: true,
				allowTypedFunctionExpressions: true,
				allowHigherOrderFunctions: true,
				allowConciseArrowFunctionExpressionsStartingWithVoid: true,
			},
		],
		"@typescript-eslint/explicit-member-accessibility": [
			"error",
			{ accessibility: "no-public" },
		],
		"@typescript-eslint/explicit-module-boundary-types": [
			"error",
			{
				allowArgumentsExplicitlyTypedAsAny: false,
				allowDirectConstAssertionInArrowFunctions: true,
				allowedNames: [],
				allowHigherOrderFunctions: true,
				allowTypedFunctionExpressions: true,
			},
		],

		"@typescript-eslint/member-ordering": "error",

		"@typescript-eslint/method-signature-style": "error",

		"@typescript-eslint/naming-convention": "error",

		"@typescript-eslint/no-base-to-string": "error",

		"@typescript-eslint/no-confusing-non-null-assertion": "error",

		"@typescript-eslint/no-dynamic-delete": "error",

		"@typescript-eslint/no-empty-interface": "off",

		"@typescript-eslint/no-explicit-any": [
			"error",
			{
				fixToUnknown: false,
				ignoreRestArgs: false,
			},
		],

		"@typescript-eslint/no-extra-non-null-assertion": "error",

		"@typescript-eslint/no-extraneous-class": "off",

		"@typescript-eslint/no-floating-promises": [
			"error",
			{
				ignoreVoid: true,
				ignoreIIFE: false,
			},
		],

		"@typescript-eslint/no-for-in-array": "error",

		"@typescript-eslint/no-implicit-any-catch": [
			"error",
			{
				allowExplicitAny: false,
			},
		],

		"@typescript-eslint/no-implied-eval": "error",

		"@typescript-eslint/no-inferrable-types": [
			"error",
			{
				ignoreParameters: false,
				ignoreProperties: false,
			},
		],

		"@typescript-eslint/no-invalid-void-type": "error",

		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-misused-promises": [
			"error",
			{
				checksConditionals: true,
				checksVoidReturn: true,
			},
		],

		"@typescript-eslint/no-namespace": [
			"error",
			{ allowDeclarations: false, allowDefinitionFiles: false },
		],

		"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
		"@typescript-eslint/no-non-null-assertion": "error",

		"@typescript-eslint/no-parameter-properties": "error",

		"@typescript-eslint/no-require-imports": "error",

		"@typescript-eslint/no-this-alias": [
			"error",
			{
				allowDestructuring: false,
				allowedNames: [],
			},
		],

		"@typescript-eslint/no-throw-literal": "error",

		"@typescript-eslint/no-type-alias": "off",

		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/no-unnecessary-condition": "error",
		"@typescript-eslint/no-unnecessary-qualifier": "error",
		"@typescript-eslint/no-unnecessary-type-arguments": "error",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",

		"@typescript-eslint/no-unsafe-assignment": "error",
		"@typescript-eslint/no-unsafe-call": "error",
		"@typescript-eslint/no-unsafe-member-access": "error",
		"@typescript-eslint/no-unsafe-return": "error",

		"@typescript-eslint/no-var-requires": "error",

		"@typescript-eslint/prefer-as-const": "error",
		"@typescript-eslint/prefer-enum-initializers": "error",
		"@typescript-eslint/prefer-for-of": "off",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/prefer-literal-enum-member": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/prefer-nullish-coalescing": "error",
		"@typescript-eslint/prefer-optional-chain": "error",
		"@typescript-eslint/prefer-readonly": "error",
		"@typescript-eslint/prefer-readonly-parameter-types": "off",
		"@typescript-eslint/prefer-reduce-type-parameter": "error",
		"@typescript-eslint/prefer-regexp-exec": "error",
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		"@typescript-eslint/prefer-ts-expect-error": "error",

		"@typescript-eslint/promise-function-async": "error",

		"@typescript-eslint/require-array-sort-compare": "error",

		"@typescript-eslint/restrict-plus-operands": "error",
		"@typescript-eslint/restrict-template-expressions": [
			"error",
			{
				allowNumber: true,
				allowBoolean: true,
				allowAny: false,
				allowNullish: false,
			},
		],

		"@typescript-eslint/strict-boolean-expressions": "error",

		"@typescript-eslint/switch-exhaustiveness-check": "error",

		"@typescript-eslint/triple-slash-reference": "error",

		"@typescript-eslint/type-annotation-spacing": "error",

		"@typescript-eslint/typedef": "off",

		"@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],

		"@typescript-eslint/unified-signatures": "error",

		// Extension Rules
		"lines-between-class-members": "off",
		"@typescript-eslint/lines-between-class-members": [
			"error",
			{ exceptAfterSingleLine: true, exceptAfterOverload: true },
		],

		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "error",

		"require-await": "off",
		"@typescript-eslint/require-await": "error",

		"no-return-await": "off",
		"@typescript-eslint/return-await": "error",
	},
}
