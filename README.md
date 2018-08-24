# KanColleSource

The source code of KanColle HTML5 version is written in `Typescript` and uglified by `uglifyjs-webpack-plugin`.

## Description

For my own curiosity and the demand of reviewing ES5, this repo is built, trying to analyse bundled code of game *KanColle*

## Folder structure

    KanColleSource/
    ├── analysis/             - my comments to make it easy to understand
    ├── assets/
    ├── functions/            - chunked functions
    ├── utils/
    │   ├── chunker.js        - helper function to chunk `../main.js`
    │   ├── detector.js       - detect version change
    │   └── searcher.js       - search dependency relationship and generate json
    ├── .gitignore
    ├── main.js               - formatted code
    ├── raw.js                - original source code
    ├── tree.json             - dependency tree
    ├── package.json
    └── README.md

## View in Google Chrome

Generally, we can find the source code in `Source` or `Application` tab,

but it is too large and hard for us to analyse it.

Luckily, `main.js` sets a global variable `KCS`,

and we can access it in console by toggling `top` to `index.php`.

Type `KCS` and we will get a object: `{init: o}`(`o` is the init function),

which is the only one interface `main.js` exposes.

Luckily again, we can access the [[Scopes\]\] of `o` thanks to Chrome,

![](assets/console.png)

then we can get *EVERYTHING* recursively.

It is helpful to us to analyse the mass bundled code.

## Reference links

[api information by 74EO](https://github.com/andanteyk/ElectronicObserver/blob/develop/ElectronicObserver/Other/Information/apilist.txt)

[api_start2 by Tibo442](https://github.com/Tibo442/api_start2)