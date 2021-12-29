//eslint , prettier 를 함께 설정해주는게 좋음
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": ['error' , {
      singleQuote: true, //문자열은 작은따옴표
      semi: true,  //세미콜론
      useTabs: true, //tab사용
      trailingComma: 'all', //트레일링콤마 사용
      tabWidth: 2, //
      printWidth: 80, //글자길이
      bracketSpacing: true,
      arrowParens: 'avoid',
      endOfLine: 'auto',
    }] //'off',warn error 등의 경고 레벨이 존재
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
