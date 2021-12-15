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
		"react/jsx-indent": "off",
		"react/jsx-filename-extension": "off",
		"react/jsx-indent-props": "off",
		"import/prefer-default-export": "off",
		semi: ["error", "always"],
		quotes: "off",
		indent: "off",
		"object-shorthand": 0,
		"prefer-destructuring":0,
		"linebreak-style": "off",
		"no-tabs": "off",
	},
};
