# vue-til

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### eslint 설정
```
//저장 및 auto fix
설정 -> eslint:validate
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"eslint.alwaysShowStatus": true,
"eslint.workingDirectories": [{
    "mode": "auto"
}],
"eslint.validate": [{
        "language": "vue",
        "autoFix": true
    },
    {
        "language": "javascript",
        "autoFix": true
    },
    {
        "language": "javascriptreact",
        "autoFix": true
    },
    {
        "language": "typescript",
        "autoFix": true
    },
    {
        "language": "typescriptreact",
        "autoFix": true
    },
]
//추가
//코드레벨에서 동일한 컨벤션을 가지면서 생산성 업
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
