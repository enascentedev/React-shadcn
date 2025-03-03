module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier", // Desativa regras do ESLint que conflitam com o Prettier
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "prettier"],
	rules: {
		"prettier/prettier": "warn", // Mostra avisos de formatação
		"react/react-in-jsx-scope": "off", // Desnecessário com Next.js e Vite
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
		],
		"no-console": "warn", // Evita muitos console.log no código
		"react/prop-types": "off", // Não é necessário com TypeScript
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
