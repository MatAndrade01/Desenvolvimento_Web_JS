import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.js"],
  languageOptions: {
    sourceType: "script",
    globals: globals.browser, 
  },

  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-unused-vars": "error" 
  }
};
