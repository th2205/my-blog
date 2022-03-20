---
title: "var let const"
date: "2021-12-29"
tags: ["#javascript"]
thumbnailImgPath: "/assets/var-let-const.svg"
thumbnail: "자바스크립트에서의 변수 선언 방식과 차이점"
---

# 자바스크립트에서의 변수 선언 방식

자바스크립트에서는 기본적으로 `var` 키워드를 이용해 변수를 선었했었다. es6 이후 `let`, `const` 키워드가 추가되었고 3가지 방법으로 변수를 선언 할 수 있다. 각각의 방식은 어떤 차이점이 있을까?

# var

`var` 키워드를 이용해 선언한 변수는 다음과 같은 특징을 가진다.

- 중복선언 허용
- 함수 레벨 스코프
- 호이스팅된다
- 전역 객체의 프로퍼티로 할당

## 중복 선언 허용

```javascript
var x = 1;
var y = 1;

// var 키워드는 중복 선언을 허용한다.
// 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해  var 키워드가 없는 것처럼 동작한다.
var x = 100;

// 초기화문이 없는 변수 선언문은 무시된다.
var y;

console.log(x); // 100
console.log(y); // 1
```

- `var` 로 선언한 변수는 중복 선언(초기화)가 가능하다. 중복해서 변수를 선언할 경우 마지막 변수가 최종값이 된다.
- 초기화문에 따라 다르게 동작 할 수 있다.
- 만약 동일한 이름의 변수가 이미 선언되어있는 것을 모르고 변수를 중복 선언하면서 값까지 할당하면 의도치않게 먼저 선언된 변수가 변경되는 부작용이 발생한다.

## 함수 레벨 스코프

`var` 키워드로 선언한 변수는 함수 블록만을 지역 스코프로 인정한다. 함수 외부에서 선언한 변수는 코드블록`{}` 내에서 선언해도 모두 지역 변수가 된다. 이로인해 의도치 않게 전역 변수가 중복되는 경우가 발생한다.

```javascript
var x = 1;

if (true) {
  // 이미 선언된 x가 있기 때문에 x는 중복 선언된다.
  var x = 100;
}

console.log(x); //100
```

for 문 안에서 변수를 선언할 때도 마찬가지이다.

```javascript
var i = 10;
// for 문 안에 선언된 i는 전역 변수다. 이미 선언된 i 가 있으므로 중복 선언된다.

for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i);
```

## 호이스팅

`var` 키워드로 변수를 선언하면 변수 호이스팅에 의해 변수가 최상단으로 끌어 올려진 것처럼 동작한다.
즉 호이스팅에 의해 `var` 키워드로 선언한 변수는 선언문 이전에 참조 할 수 있고 선언문 이전에 변수를 참조하면 `undefined` 를 반환한다.

```javascript
// 이시점에 이미 호이스팅에 의해 변수가 선언됐다.
// 그리고 변수는 undefined 로 초기화되었다.
console.log(foo); // undefined

var foo = 1; // 변수 초기화문을 만나면 변수에 값을 할당한다.

console.log(foo); //1
```

호이스팅은 에러를 발생시키진 않지만 프로그래밍 흐름에 맞지도 않고 가독성도 떨어뜨려 오류가 발생할 여지를 남긴다.

# let

`let` 을 이용해 선언한 변수는 다음과 같은 특징을 가진다.

- 변수 중복 선언 금지
- 블록 레벨 스코프
- 변수 호이스팅
- 전역 객체에 할당되지 않는다.

## 변수 중복 선언 금지

`let` 키워드로 변수를 선언하면 변수 중복 선언시 문법에러(SyntaxError)가 발생한다.

```javascript
// 이시점에 이미 호이스팅에 의해 변수가 선언됐다.
// 그리고 변수는 undefined 로 초기화되었다.
console.log(foo); // undefined

var foo = 1; // 변수 초기화문을 만나면 변수에 값을 할당한다.

console.log(foo); //1
```

## 블록 레벨 스코프

`var` 키워드로 선언한 변수는 오직 함수 코드 블록만 스코프로 인정 하지만 `let` 키워드로 선언한 변수는 모든 코드 블록(함수, if 문, for 문, while 문, try/catch 문 등) 을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.

```javascript
let foo = 1; // 전역 변수

{
  let foo = 2; // 지역 변수
  let bar = 3; // 지역 변수
}

console.log(foo); //1
console.log(bar); // Uncaught ReferenceError: bar is not defined
```

## 변수 호이스팅

`let` 키워드로 선언한 변수는 호이스팅이 발생하지만 발생하지 않는 것처럼 동작한다.

```javascript
console.log(foo); //Uncaught ReferenceError: foo is not defined

let foo = 1;
```

`let` (또는 `const`) 를 이용해 선언한 변수는 선언문 이전에 참조하면 **참조 에러**가 발생한다. `var` 키워드로 선언한 변수는 런타임 이전 자바스크립트 엔진에 의해 암묵적으로 **선언 단계**와 **초기화 단계**가 진행되기 때문에 선언문 이전에 참조할 수 있지만 `let` 키워드로 선언한 변수는 **선언 단계**와 **최기화 단계**가 분리되어 진행된다. 즉 자바스크립트 엔진에 의해 선언 단계가 먼저 실행되지만 초기화 단계는 선언문에 도달했을때 실행된다.

만약 초기화 단계에서 참조하려고 하면 참조 에러가 발생한다. 스코프의 시작점 부터 초기화 지점까지 변수를 참조 할 수 없는 구간을 **일시적 사각지대(TDZ)** 라고 부른다.

```javascript
// 런타임 이전에 선언 단계가 실행된다. 변수는 초기화되지 않았다.
// 초기화 이전의 일시적 사각지대에서는 변수를 참조 할 수 없다.
console.log(foo); //Uncaught ReferenceError: foo is not defined

let foo = 1;

console.log(foo); // 초기화 단계를 마치면 참조 할 수 있다.
```

자바스크립트는 ES6 에서 도입된 `let`, `const`를 포함해서 모든 선언(`var`, `let`, `const`, `function`, `function*`, `class` 등) 을 호이스팅한다.
ES6 에 도입된 `let`, `const`, `class` 를 사용한 선언문은 호이스팅이 발생하지 않는 것처럼 동작한다.

## 전역 객체에 할당되지 않는다.

`var` 키워드로 선언한 변수는 `window` 객체의 프로퍼티가 된다.

```javascript
var foo = 1;

console.log(window.foo); // 1
```

`let` 키워드로 선언한 변수는 전역 객체의 프로퍼티로 할당되지 않는다. 대신 보이지 않는 개념적인 블록(렉시컬 환경의 환경 레코드) 내에 존재하게된다.

# const

`const` 키워드로 선언한 변수는 다음과 같은 특징을 가진다.

- 변수 중복 선언 금지
- 블록 레벨 스코프
- 변수 호이스팅
- 전역 객체에 할당되지 않는다.
- 상수를 선언하기 위해 사용한다.
- 선언과 초기화
- 재할당 금지

`let` 키워드와 중복되는 부분이 있으므로 다른 부분만 정리한다.

## 선언과 초기화

`const` 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야한다.

```javascript
var foo; // Uncaught SyntaxError: Missing initializer in const declaration
```

## 재할당 금지

`const` 키워드는 변경 불가능한 값이기 때문에 상수(재할당이 금지된 변수)를 표현하기 위해 사용된다.

## const 키워드와 객체

`const` 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다. 객체는 재할당 없이 변경이 가능하기 때문이다.
`const` 키워드는 재할당을 금지할뿐 **불변**을 의미 하진 않는다.

```javascript
const person = {
  name: "foo",
};

person.name = "boo";
```

# 정리

그럼 어떤 키워드를 사용해야 할까?

- ES6 를 사용한다면 `var` 키워드는 사용하지 않는다.
- 재할당이 필요한 경우에만 `let` 키워드는 사용한다.
- 이외에는 모두 `const` 를 사용하는 것이 좋다. (의외로 객체를 재할당하는 경우는 드물다.)

# 참고

[모던 자바스크립트 Deep Dive](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791158392239&orderClick=LAG&Kc=)
