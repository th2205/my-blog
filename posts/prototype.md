---
title: "프로토타입"
date: "2022-01-09"
tags: ["js"]
thumbnailImgPath: "/assets/prototype-cover.svg"
thumbnail: "자바스크립트 프로토타입"
---

# 프로토타입

자바스크립트의 모든 객체는 `prototype` 이라는 객체를 가지고있고 모든 객체는 `prototype`으로 부터 프로퍼티와 메서드를 상속받는다.

자바스크립트는 최소 하나 이상의 다른 객체로부터 정보를 상속 받는다 이때 상속되는 정보(공유 프로퍼티, 메서드)를 제공하는 객체를 `prototype`이라고 한다.

# 프로토타입과 상속

자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거한다.

```javascript
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); // false

console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566370614359172
```

`Circle` 생성자 함수가 생성하는 객체(인스턴스)는 `radius` 프로퍼티와 `getArea` 메서드를 갖는다.

`radius` 프로퍼티는 일반적으로 인스턴스 마다 다르겠지만 `getArea` 메서드는 모든 인스턴스에서 동일하기 때문에 하나만 생성해서 모든 인스턴스가 공유하는 것이 바람직하다. 위 코드에서는 모든 인스턴스가 `getArea` 메서드를 중복해서 가지고있다. 이 경우 단점은 다음과 같다.

- 동일한 메서드를 중복해서 가지고 있기 때문에 메모리를 불필요하게 낭비 할 수 있다.
- 인스턴스를 생성할 때마다 메서드를 생성하므로 퍼포먼스에도 악영향을 줄 수 있다.

자바스크립트에서는 프로토타입기반의 상속으로 이 문제를 해결 할 수 있다.

```javascript
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); // true

console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566370614359172
```

`Circle` 생성자 함수가 생성한 모든 인스턴스는 자신의 프로토타입 역할을 하는 `Circle.prototype`의 모든 프로퍼티와 메서드를 상속받는다.

프로토타입을 이용하면

- 한번 선언된 메서드를 모든 인스턴스가 함께 사용할 수 있다(상속).
- 상속을 이용하면 재사용 관점에서 매우 유리하다. 한번만 구현해 놓으면 그 뒤에 생성되는 모든 인스턴스는 프로토타입의 자산을 공유하여 사용 할 수 있다.

# \_\_proto\_\_ 접근자 프로퍼티

(작성중...)
