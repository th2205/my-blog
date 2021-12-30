---
title: "var let const"
date: "2021-12-29"
tags: ["#javascript"]
thumbnailImgPath: "/var-let-const/cover.svg"
thumbnail: "자바스크립트에서의 변수 선언 방식과 차이점"
---

# 자바스크립트에서의 변수 선언 방식

자바스크립트에서는 기본적으로 `var` 키워드를 이용해 변수를 선었했었다. es6 이후 `let`, `const` 키워드가 추가되었고 3가지 방법으로 변수를 선언 할 수 있다. 각각의 방식은 어떤 차이점이 있을까?

# var

`var` 키워드를 이용해 선언한 변수는 다음과 같은 특징을 가진다.

- 중복선언이 가능하다.
- 전역 객체의 프로퍼티로 할당된다.
- 재할당이 가능하다.
- 호이스팅된다.
- 함수 스코프를 가진다.

## 중복 선언

![var](https://codesandbox.io/embed/var-zqq61?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.js&theme=dark)

`var` 로 선언한 변수는 중복 선언(초기화)가 가능하다. 중복해서 변수를 선언할 경우 마지막 변수가 최종값이 된다.

만약 1만줄 정도의 자바스크립트 파일의 5천번째줄 쯤에 있는 함수를 수정한다고 하자. 실수로 파일 가장위쪽에 있는 변수의 존재를 모르고 변수를 재선언 한다면? 최악의 상황이 발생할 수도 있다.(실제로 실무에서 1만줄이 작성되어있는 자바스크립트 파일에서 변수를 재선언 한적이있다. 끔찍...)

## 재할당

![var](https://codesandbox.io/embed/objective-estrela-ltqoc?expanddevtools=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.js&theme=dark)

`var` 로 선언한 모든 변수는 재할당이 가능하다.

## 전역객체(window) 할당

![var](/var-let-const/duplicate.png)

`var` 로 선언한 변수는 전역객체(window) 에 할당된다
