---
title: "closure"
date: "2022-01-18"
tags: ["js"]
thumbnailImgPath: "/assets/closure.svg"
thumbnail: "클로저의 정의와 활용"
---

# 클로저

클로저는 함수가 렉시컬 스코프를 기억하고 렉시컬 스코프 밖에서 실행될때도 이 스코프에 접근할 수 있는 기능 또는 환경을 뜻한다.

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

**즉 외부함수 중첩함수가 오래 유지 되는 경우 중첩함수는 생명주기가 종료된 외부함수의 변수를 참조할 수 있다**

위 예제의 자세한 내용은 다음과 같다.

1. `outer` 함수가 평가되어 함수 객체를 생성할 때 현재 실행중인 컨텍스트 환경, 즉 전역 렉시컬 환경을 `outer` 함수 객체의 `[[Environment]]` 내부 슬롯에 상위 스코프로서 저장한다.
2. `outer` 함수가 실행되면 중첩함수 `inner` 함수가 평가된다. `inner` 함수는 자신의 `[[Environment]]` 슬롯에 현재 실행중인 컨텍스트의 렉시컬 환경 즉 `outer` 함수의 렉시컬 환경을 상위 스코프로서 저장한다.
3. `outer` 함수가 `inner` 함수를 리턴하면서 `outer` 함수의 생명주기가 종료된다.(스택에서 제거된다.)
4. 이때 `outer` 함수의 실행 컨텍스트는 제거되지만 `outer` 렉시컬 환경까지 소멸되지는 않는다. `outer` 의 렉시컬 환경은 `inner` 함수가 참조하고 있기 때문에 가비지 컬렉터의 컬렉션 대상이되지 않기 때문이다.
5. `inner` 함수가 호출되고 자신의 `[[Environment]]` 슬롯에 저장되어있는 렉시컬 환경을 참조한다.

# 클로저의 활용

클로저는 상태를 안전하게 변경하고 유지(은닉)하기 위해 사용한다.

```javascript
let num = 0;

function increase() {
  return num++;
}

console.log(increase());
console.log(increase());
console.log(increase()); // 3
```

이코드는 카운트 상태를 누구나 접근할 수 있고 변경할 수 있다는 점에서 오류를 발생시킬 가능성을 가지고 있는 좋지 않은 코드이다. 클로저를 이용해 개선해보자.

```javascript
function counter() {
  let num = 0;

  return function increase() {
    return num++;
  };
}

const increase = counter();

console.log(increase());
console.log(increase());
console.log(increase());
```

클로저를 활용하면 다음과 같은 장점을 가진다.

1. `counter` 함수 를 다시 호출하기 전까진 `num` 변수가 초기화되지 않는다.
2. `counter` 함수가 반환한 클로저 함수는 `num` 변수를 언제 어디서든 참조하고 변경할 수 있다.
3. `num` 변수는 외부에서 접근 할 수 없도록 은닉화되어있기 때문에 더 안정적인 프로그래밍이 가능하다.

# 클로저와 메모리

클로저는 상위 스코프에 대한 정보를 기억해야하기 때문에 메모리 점유를 걱정할 수도 있지만 다음의 이유로 걱정할 필요는 없다.

모던 자바스크립트 엔진은 최적화가 잘되어있기 때문에 클로저가 참조하고 있지 않는 식별자는 기억하지 않는다.(필요한 식별자만 기억한다.) 기억해야할 식벽자를 기억하는 것이 메모리 낭비일까? 필요한 것만 기억하므로 이 부분은 걱정할 대상이 아니라고 생각한다.

오히려 프로그래밍을 안정적으로 할 수 있도록 도와주는 강력한 기능이므로 적극적으로 클로저를 사용해야한다.
