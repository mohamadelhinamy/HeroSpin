module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['react', 'react-native', 'react-hooks', 'prettier'],
  env: {
    browser: true,
    mocha: true,
    es6: true,
    node: true,
    'react-native/react-native': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {},
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
        rootPathPrefix: '~',
      },
      node: {
        extensions: ['.js', '.jsx', 'ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    semi: ['error', 'never'],
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 'off',
    'class-methods-use-this': [0],
    'arrow-parens': ['error', 'as-needed'],
    'no-unused-vars': 'off',
    'object-curly-newline': ['error', { consistent: true }],
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 10 }],
    'linebreak-style': [0],
    'react/jsx-curly-brace-presence': 0,
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'max-len': ['error', { code: 100, ignorePattern: '^import [^,]+ from |^export | implements' }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: false,
        assignment: false,
      },
    ],
    'react/no-array-index-key': 'off',
    'react/display-name': 'off',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/sort-styles': 0,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'no-use-before-define': 0,
    '@typescript-eslint/explicit-member-accessibility': [2, { accessibility: 'no-public' }],
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-function-return-type': [
      0,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-use-before-define': [
      2,
      {
        functions: true,
        classes: true,
        variables: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
