module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:react/recommended",
		"airbnb",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: [
		"react",
	],
	rules: {
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
		"react/jsx-indent-props": ["error", "tab"],
		"import/prefer-default-export": "off",
		semi: ["error", "always"],
		quotes: ["error", "double"],
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		"no-tabs": ["error", { allowIndentationTabs: true }],
	},
};
