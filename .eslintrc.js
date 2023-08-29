module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
  },
  ignorePatterns: [
    'dist',
    'lib',
    'node_modules',
    'web',
    'rollup.*',
    '*.js',
    '**/*.stories.ts',
    '**/*.stories.tsx',
    '**/*.test.ts',
    '**/*.test.tsx',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:css-import-order/recommended',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    // typesciript settings
    project: true,
    tsconfigRootDir: './tsconfig.json',
    ecmaVersion: 6,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'import',
    'unused-imports',
    'css-import-order',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    // eslint-import-resolver-typescript
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // eslint-import-resolver-typescript
      typescript: {
        project: './tsconfig.json',
      },
      node: true,
    },
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0, // allow commonJS
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
        amd: true,
        ignore: ['\\.(jpg|gif|svg|png|webp)$', '\\.(css|scss)$'],
      },
    ],
    // import/order
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'never',
      },
    ],
    // unused-imports
    '@typescript-eslint/no-unused-vars': 0,
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
}
