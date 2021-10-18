---
title: "MQTT와 실시간 통신"
date: "2021-10-19"
tags: ["#javascript"]
thumbnailImgPath: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FLsrF5%2FbtqEAM93Ofk%2FugP6FytCOxczTmQAkw5d71%2Fimg.png"
thumbnail: "mqtt 프로토콜과 작동 원리"
---

# 이벤트 루프는 왜 필요 할까?

자바스크립트는 싱글 스레드 언어이기 때문이다. 스레드가 하나라는 의미는 한번에 하나의 일만 처리 할 수 있다(동시에 2가지 이상의 함수(태스크)를 실행 할 수 없다.)는 의미이다. 하지만 자바스크립트를 보면 동시에 여러가지 일을 처리 하는것 처럼 보인다. 자바스크립트의 동시성을 지원하는 것이 바로 이벤트 루프다.

# 동기와 비동기

![synchronous](https://blog.kakaocdn.net/dn/bztSy0/btqCz451jcO/1UjnGAajLPDoBmh3VqNRjK/img.jpg)

동기와 비동기를 이해하기 위해 다음 코드를 보자.

```javascript
function sleep(func, delay) {
  const delayUntill = Date.now() + delay;

  while (Date.now() < delayUntill);

  func();
}

function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
}

sleep(foo, 3 * 1000);
bar();

// 3초 경과 후 foo 호출 -> bar 호출
```

sleep 함수는 3초 후에 foo 함수를 실행 시키고 그 다음 bar 함수가 호출된다. 이때 bar 함수는 sleep 함수의 호출이 종료된 이후 호출되므로 3초동안 블로킹(작업중단)이 된다.

이처럼 현재 실행중인 테스크가 종료 될때 까지 다음에 실행될 태스크가 대기하는 방식을 **동기 처리** 라고 한다. 동기 처리 방식은 태스크를 순서대로 하나씩 실행하기 때문에 실행 순서가 보장되는 장점은 있지만 태스크가 종료될때까지 다음 태스크가 블로킹되는 단점이있다.

다음 위의 예제를 비동기 방식으로 바꿔보자.

```javascript
function foo() {
  console.log("foo");
}

function bar() {
  console.log("bar");
}

setTimeout(foo, 3 * 1000);
bar();

// bar 호출 -> 3초 경과 후 foo 호출
```

동기 방식과 비슷하게 3초 후 foo 함수를 호출하지만 setTimeout 이후의 태스크를 블로킹하지 않고(Non-Bloking) 곧바로 실행한다. 이처럼 현재 진행중인 태스크를 기다리지 않고 다음 태스크가 실행되는 방식을 **비동기 처리** 라고 한다. 비동기 처리 방식은 코드 실행 순서를 보장하지 않는다는 단점이 있다.
