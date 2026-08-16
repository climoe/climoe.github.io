import { type Config } from 'prettier';

const config: Config = {
	trailingComma: 'none',
	semi: true,
	singleQuote: true,
	jsxSingleQuote: true,
	bracketSpacing: true,
	useTabs: true,
	tabWidth: 4,
	printWidth: 80,
	objectWrap: 'collapse',
	bracketSameLine: true,
	arrowParens: 'always',
	experimentalTernaries: true,
};

export default config;
