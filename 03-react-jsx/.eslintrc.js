module.exports = {
  extends: [
    "eslint:recommended", // zde se používají základní pravidla ESLintu (https://eslint.org/docs/rules/)
    "plugin:import/errors", // tento plugin zajišťuje, že se budou kontrolovat chyby při importu
    "plugin:react/recommended", // tento plugin zajišťuje, že se budou kontrolovat chyby v Reactu
    "plugin: jsx-a11y/recommended", // tento plugin zajišťuje, že se budou kontrolovat chyby přístupnosti (a11y) v JSX
    "prettier", // vzdycky posledni, aby se prettier aplikoval na vsechny pravidla
  ],

  plugins: ["react", "jsx-a11y", "import"], // zde se definují použité pluginy
  rules: {
    ["react/prop-types"]: "off", // toto pravidlo vypíná kontrolu prop-types
    ["react/react-in-jsx-scope"]: "off", // toto pravidlo vypíná kontrolu importu Reactu v souborech s JSX
  },
  parserOptions: {
    ecmaVersion: 2022, // zde se nastavuje verze ECMAScriptu, kterou chceme používat
    sourceType: "module", // toto nastavení říká, že používáme moduly
    ecmaFeatures: {
      // zde se nastavují různé funkce ECMAScriptu, které chceme používat
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
      version: "detect", // zde se nastavuje verze Reactu pro plugin react (pokud je nastaveno na "detect", tak se verze Reactu detekuje automaticky)
    },
    ["import/resolver"]: {
      // zde se nastavuje, jak mají být vyhledávány moduly při importu
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
};
