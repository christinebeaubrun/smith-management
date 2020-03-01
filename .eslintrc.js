module.exports = {
    "plugins": [ "react" ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "parser": "babel-eslint",
    "trailing-comma": [
        true,
        {
          "multiline": {
            "objects": "always",
            "arrays": "always",
            "functions": "never",
            "typeLiterals": "ignore",
          },
          "esSpecCompliant": true,
        },
    ],
};
