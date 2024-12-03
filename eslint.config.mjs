import config from "eslint-config-standard";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...[].concat(config),
  {
    rules: {
      "no-unused-vars": "warning",
      "no-undef": "error",
      "no-const-assign": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "constructor-super": "warning",
      "no-await-in-loop": "warning",
      "no-duplicate-imports": "warning",
      "no-dupe-keys": "error",
    },
  },
];

// to check a file run: npx eslint fileName.js
