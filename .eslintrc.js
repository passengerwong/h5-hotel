module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "vue/setup-compiler-macros": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "vue/no-multiple-template-root": 0,
        "no-debugger": 2,
        "@typescript-eslint/no-explicit-any": 0,
        "vue/multi-word-component-names": 0
    }
}
