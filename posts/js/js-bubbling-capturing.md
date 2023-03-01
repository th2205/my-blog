---
title: "이벤트 버블링 캡쳐링"
date: "2022-01-26"
tags: ["js"]
thumbnailImgPath: "/assets/cover/js.png"
thumbnail: "이벤트 캡쳐링과 버블링 정리"
---

![ㅇㅇ](https://ko.javascript.info/article/bubbling-and-capturing/eventflow.svg)

이벤트 흐름엔 3가지 단계가 있다.

1. 캡처링 단계 – 이벤트가 하위 요소로 전파되는 단계
2. 타깃 단계 – 이벤트가 실제 타깃 요소에 전달되는 단계
3. 버블링 단계 – 이벤트가 상위 요소로 전파되는 단계

그리고 이미지 처럼 캡쳐링 -> 타깃 -> 버블링의 순서로대로 이벤트가 전파된다.

# 버블링

한 요소에 이벤트가 발생하면 요소에 할당된 이벤트핸들러가 동작하고 이어서 부모요소의 이벤트핸들러가 차례대로 동작한다. 가장 최상단의 요소를 만날때까지 이과정이 반복된다. 클릭한 요소로 부터 최상단의 부모까지 이벤트가 전파되는 것을 **이벤트 버블링**이라고한다.

![bubbling](https://codesandbox.io/embed/event-bubbling-gusk3e?fontsize=14&hidenavigation=1&theme=dark)

`box3`을 클릭하면 콘솔에서 부모 태그에 할당된 리스너가 실행됨을 확인할 수 있다.

순서는 다음과 같다.

1. `box3`에 할당된 click 핸들러가 동작한다.
2. 바깥의 `box2`에 할당된 핸들러가 동작한다.
3. 그 바깥의 `box1`에 할당된 핸들러가 동작한다.
4. document 객체를 만날 때까지, 각 요소에 할당된 click 핸들러가 동작한다.

# 캡쳐링

`addEventListener` 메서드의 두번째 파라미터를 이용해 캡쳐링을 활성화 할 수 있다. 기본값은 `false`이다. 바깥쪽 부모로 부터 자식으로 이벤트가 전파된다.

![capturing](https://codesandbox.io/embed/capturing-q4ctdw?fontsize=14&hidenavigation=1&theme=dark)

`box3`을 클릭해보면 버블링과는 다르게 부모로 부터 자식의 순서로 콘솔에 출력되는 것을 확인할 수 있다. 하지만 버블링과는 다르게 캡쳐링은 사용되는 경우가 거의 없다. 개인적으로 실무를 하면서도 사용해본적은 없다.

# 이벤트 전파 속에서 실제 클릭한 요소를 확인하는 방법

이벤트 핸들러의 첫번째 매개변수로 들어오는 `event` 객체를 통해서 알 수 있다.

- `event.target`: 실제 클릭한 요소
- `event.currentTarget`: 현재 이벤트가 발생한 요소

# 이벤트 전파 중단하기

## event.stopPropagation

event.stopPropagation 메서드는 현재 이벤트가 캡처링 또는 버블링 단계에서 더 이상 이벤트가 전파되지 않도록 막는다. 전파를 방지해도 이벤트의 기본 동작은 실행된다.

## event.stopImmediatePropagation

event.stopImmediatePropagation 메서드는 같은 이벤트에 대해 나머지 핸들러가 실행되지 않도록 막는 메서드이다. 같은 요소에 여러개의 이벤트 핸들러가 있는 경우 이함수를 실행하면 나머지 핸들러가 실행되지 않는다.

# 참고

- [javascript.info](https://ko.javascript.info/bubbling-and-capturing)
