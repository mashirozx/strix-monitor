/** @type {import('eslint')} */
const config = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:package-json/recommended',
  ],
  plugins: [
    'prettier',
    '@typescript-eslint',
    'typescript-enum',
    'unicorn',
    'package-json',
  ],
  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': ['error', 'only-multiline'],
    'linebreak-style': ['error', 'windows'],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': 'error',
    eqeqeq: 'error',
    'no-console': 'error',
    'no-process-env': 'error',
    'spaced-comment': [
      'error',
      'always',
      { block: { balanced: true }, markers: ['/'] },
    ],
    'guard-for-in': 'error',
    'newline-before-return': 'error',
    'no-nested-ternary': 'error',
    'no-useless-concat': 'error',
    'prefer-template': 'error',
    'no-lonely-if': 'error',
    'newline-before-return': 'off',
    // '@next/next/no-img-element': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': 'allow-with-description' },
    ],
    // '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: false }],
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useStdEffect)',
      },
    ],
    'react/self-closing-comp': 'error',
    'react/jsx-tag-spacing': [
      'error',
      { beforeSelfClosing: 'always', afterOpening: 'never' },
    ],
    'unicorn/throw-new-error': 'error',
    'unicorn/switch-case-braces': 'error',
    'unicorn/no-lonely-if': 'error',
  },
};

module.exports = config;
