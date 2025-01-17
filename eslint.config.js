export default [
  {
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
      project: './tsconfig.json',
      tsconfigRootDir: './',
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
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-var-requires': 'off', // allow commonJS
      'import/no-unresolved': [
        'error',
        {
          commonjs: true,
          amd: true,
          ignore: ['\\.(jpg|gif|svg|png|webp)$', '\\.(css|scss)$'],
        },
      ],
      'import/order': [
        'error',
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
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
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
  },
];
