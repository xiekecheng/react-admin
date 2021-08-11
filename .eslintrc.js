module.exports ={
    env: {
        es6: true,
        browser: true,
        node: true
      },
      
      "parser": "babel-eslint",
      "parserOptions": {
          "sourceType": "module",
          "allowImportExportEverywhere": true
      },
      "plugins": [
        // ...
        "react-hooks"
      ],
      "rules": {
        // ...
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
      },
      extends: [
        "react-app",
        "react-app/jest"
      ]
}