/** @type {import('prettier').Config} */
const config = {
  plugins: [require('prettier-plugin-tailwindcss')],
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  printWidth: 80,
  proseWrap: 'never',
  endOfLine: 'crlf',
  overrides: [
    {
      files: 'package.json',
      options: {
        parser: 'json',
      },
    },
  ],
};

module.exports = config;
