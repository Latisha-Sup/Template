module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  // Uncomment the first three `extends` lines when using Prettier
  extends: [
    'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports,
  },
  plugins: ['simple-import-sort'],
  rules: {
    /**
     * Rules specific to @typescript-eslint
     * Docs: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
     */
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 0, // Allow require statements
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000', '^@?\\w'],
          ['@types'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
    'sort-imports': 'off',
  },
}
