---
title: "closure"
date: "2022-01-18"
tags: ["#javascript"]
thumbnailImgPath: "/assets/closure.svg"
thumbnail: "클로저의 정의와 활용"
---

# 클로저

클로저는 렉시컬 스코프를 기억하고 함수가 렉시컬 스코프 밖에서 실행될때도 이 스코프에 접근할 수 있는 기능 또는 환경을 뜻한다.

> 렉시컬 스코프란 함수를 어디서 호출했는지가 아니라 함수를 어디에 선언했는지에 따라 상위 스코프를 결정하는 자바스크립트 특징이다.

```javascript
const x = 1;

function outer() {
  const x = 10;

  return function inner() {
    console.log(x);
  };
}

const func = outer();

func(); // 10
```

`func` 함수는 outer 내부의 함수 inner 함수이다. `func` 함수는 전역에 있기 때문에 실행결과로 1이 출력될거 같지만 함수는 호출한 위치가 아닌 선언된 위치를 기준으로 변수에 접근하기 때문에(렉시컬 스코프) `outer` 함수에 있는 변수 x 를 찾아 출력하게된다.
