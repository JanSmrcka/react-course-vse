module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],

  plugins: ["react", "jsx-a11y", "import", "tailwindcss"],
  rules: {
    ["react/prop-types"]: "off",
    ["react/react-in-jsx-scope"]: "off",
    ["tailwindcss/no-custom-classname"]: [
      "warn",
      {
        whitelist: ["form-field"],
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    ["import/resolver"]: {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
};
