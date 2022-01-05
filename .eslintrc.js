module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier", "plugin:storybook/recommended"],
  rules: {
    "no-console": "warn",
    indent: ["warn", 2, {
      SwitchCase: 1
    }],
    quotes: ["warn", "single"],
    semi: ["warn", "always"],
    "comma-dangle": ["warn", "always-multiline"],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-interface": ["error", {
      allowSingleExtends: true
    }]
  }
};