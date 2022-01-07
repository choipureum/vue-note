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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 수업정리
```
1. 프로젝트 구성법 : ESlint, Prettier, env 설정
2. REST API를 이용한 CRUD 애플리케이션 구현
3. axios 인터셉터와 모듈화를 이용한 API 함수 설계
4. 라우터 페이지 권한 처리
5. JEST를 통한 테스팅
```

## 향후 
컴포지션 API 
: 기존 vue 2.0버전에서는 scoped slot과 믹스인을 통해 컴포넌트 로직을 어느정도 재사용 가능했으나 SFC인 경우 플젝 사이즈가 커질수록 로직이 난잡해지는 특성이 존재함.
-> 리액트의 Hooks와 비슷한 느낌의 로직
```
setup으로 하나를 정의하고 시작 : 목적에 맞는 코드를 모듈화하여 진행 : 컴포넌트에 다양한 기능이 생겨도 기존의 단점보완, 유연하고 안전한 확장가능(beforCreated, created 대신 setup 사용)
```
