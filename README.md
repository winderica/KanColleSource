# KanColleSource

The source code of KanColle HTML5 version is written in `Typescript` and uglified by `uglifyjs-webpack-plugin`.

## Description

For my own curiosity and the demand of reviewing ES5, this repo is built, trying to analyse bundled code of game *KanColle*

## Folder structure

    KanColleSource/
    ├── analysis/             - my comments to make it easy to understand
    ├── functions/            - chunked functions
    ├── utils/
    │   └── chunker.js        - helper function to chunk `../main.js`
    ├── .gitignore
    ├── main.js               - formatted code
    ├── raw.js                - original source code
    └── README.md
