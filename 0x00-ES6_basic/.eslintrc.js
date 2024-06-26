module.exports = {
   env: {
	   browser: true,
	   es2021: true,
	   jest: true,
   },
   extends: 'eslint:recommended',
   parserOptions: {
	ecmaVersion: 12,
	sourceType: 'module',
   },
   rules: {
	'no-var': 'error',
	'prefer-const': 'error',
	'no-tabs': 'error',
	'indent': ['error', 2],
   },
};
