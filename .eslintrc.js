module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["prettier", "plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: 0,
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/no-unescaped-entities": 0,
    "operator-linebreak": 0,
    "linebreak-style": 0,
  },
};
