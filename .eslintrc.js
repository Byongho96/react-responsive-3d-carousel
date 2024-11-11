module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
    project: true,
    tsconfigRootDir: './tsconfig.json',
  },
  ignorePatterns: ['/*', '!src'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:storybook/recommended',
    'plugin:import/typescript',
    'prettier', // must be last
  ],
  plugins: ['@typescript-eslint', 'react', 'import', 'unused-imports'],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-var-requires': 0, // allow commonJS
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
        amd: true,
        ignore: ['\\.(jpg|gif|svg|png|webp)$', '\\.(css|scss)$'],
      },
    ],
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'react*',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    '@typescript-eslint/no-unused-vars': 0,
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: true,
    },
  },
  overrides: [
    {
      files: ['src/**/*.{ts,tsx,js,jsx}'],
    },
  ],
}
