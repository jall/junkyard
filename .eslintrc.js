module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
  },
  plugins: ["@typescript-eslint", "prettier", "mocha-no-only"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/array-type": ["error", {default: "generic"}],
    "@typescript-eslint/strict-boolean-expressions": [
      "warn", // would be error but for this https://github.com/typescript-eslint/typescript-eslint/issues/1785
      {
        allowString: true,
        allowNullableObject: true,
        allowNullableBoolean: true,
        allowNullableString: true,
      },
    ],
    "@typescript-eslint/await-thenable": ["error"],
    "no-console": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      {functions: false, ignoreTypeReferences: true, variables: false},
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-throw-literal": "error",
    "no-plusplus": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "import/no-extraneous-dependencies": ["error"],
    "object-shorthand": "error",
    radix: "error",
    "no-unsafe-finally": "error",
    "no-return-await": "error",
    "@typescript-eslint/no-this-alias": "error",
    "default-case": "error",
    "@typescript-eslint/no-var-requires": "warn",
    "no-template-curly-in-string": "error",

    // Some import rules are turned off as TS already checks these and they are pretty slow
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",

    "import/order": [
      "error",
      {
        "newlines-between": "ignore",
        groups: [["builtin", "external"], "parent", "sibling", "index"],
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "mocha-no-only/mocha-no-only": ["error"],
  },
}
