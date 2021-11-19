---
title: "CSS position"
date: "2021-10-31"
tags: ["#css"]
thumbnailImgPath: "/css-box-model/box-model.svg"
thumbnail: "CSS position 정리"
---

# Position

position 속성은 요소를 어떻게 배치할할지 결정하는 속성이다. position 을 이용하면 요소를 원하는 위치에 배치 할 수 있고 block 과 inline 요소 모두 적용 할 수 있다.

position 에서 사용 할 수 있는 값음 다음 네가지가 있다.

1. static
2. relative
3. absolute
4. fixed
5. sticky

그리고 position 값을 static 이 아닌 다른 값을 사용 할 경우 top, left, right, bottom 등 과 같은 position 과 관련된 css 속성을 사용 할 수 있다. top, left, right, bottom 속성은 요소가 기준으로 부터 위, 아래, 오른쪽, 왼쪽으로 얼만큼 떨어져있어야 하는지 나타내는 속성이다.

## static

```css
div {
  position: static;
}
```

기본 선택 값이다. position 속성이 static 으로 설정된 요소는 top, left, right, bottom 속성에 영향을 받지 않는다.

## relative

```css
div {
  position: relative;
  left: 30px;
}
```

relative(상대위치) 속성은 자신을 기준으로(기본 위치) 위치를 설정하는 방식이다.
기본 위치란 position 속성이 적용된 요소의 static 값일 때 지정되는 위치를 의미한다.

## absolute

```css
div {
  position: absolute;
  top: 50px;
  right: 0;
}
```
