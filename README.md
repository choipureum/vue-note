# 화면
```
로그인
회원가입
메인
추가/수정
```

## Eslint
JS 문법 검사 보조 도구. 에러가 날 만한 곳을 원천 제거한다.

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

### eslint 
path 등록: jsconfig.json에 @/로 절대경로로 전환 가능