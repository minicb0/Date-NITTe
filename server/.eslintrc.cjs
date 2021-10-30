module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"airbnb-base",
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	rules: {
		"import/prefer-default-export": "off",
		"consistent-return": "off",
		"no-console": "off",
		semi: ["error", "always"],
		quotes: ["error", "double"],
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		"no-tabs": ["error", { allowIndentationTabs: true }],
	},
};
