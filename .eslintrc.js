module.exports = {
    "extends": "airbnb-base",
    "parser": "esprima",
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "rules": {
      "max-len": [2, { "code": 120, "ignoreUrls": true }],
      "indent": [2, 2, { "SwitchCase": 1, "MemberExpression": 1, "ObjectExpression": 1 }],
      "semi": [2, "always"],
      "quotes": [2, "single"],
      "no-multiple-empty-lines": [2, { "max": 2, "maxEOF": 1 }],
      "no-console": 0,
      "no-trailing-spaces": 0,
      "no-underscore-dangle": 0,
      "global-require": 0,
      "object-curly-spacing": [2, "always"],
      "linebreak-style": "off",
      "no-unused-vars": [2, { "vars": "all" }],
      "no-useless-escape": 0,
      "no-param-reassign": 0,
    },
    "env": {
      "es6": true,
      "browser": true,
      "node": true
    },
};