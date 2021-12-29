---
title: "CSS position"
date: "2021-10-31"
tags: ["#css"]
thumbnailImgPath: "/css-box-model/box-model.svg"
thumbnail: "CSS position 정리"
---

# Position

position 속성은 요소를 어떻게 배치할할지 결정하는 속성이다. position 을 이용하면 요소를 원하는 위치에 배치 할 수 있고 block 과 inline 요소 모두 적용 할 수 있다.

position 에서 사용 할 수 있는 값은 다섯가지가 있다.

1. static
2. relative
3. absolute
4. fixed
5. sticky

그리고 position 값을 static 이 아닌 다른 값을 사용 할 경우 `top`, `left`, `right`, `bottom` 등 과 같은 position 과 관련된 css 속성을 사용 할 수 있다. `top`, `left`, `right`, `bottom` 속성은 요소가 기준으로 부터 위, 아래, 오른쪽, 왼쪽으로 얼만큼 떨어져있어야 하는지 나타내는 속성이다.

## static

![css-static](https://codesandbox.io/embed/position-static-htwud?fontsize=14&hidenavigation=1&module=%2Findex.css&theme=dark)

- 기본 선택 값이다.
- position 속성이 `static` 으로 설정된 요소는 `top`, `left`, `right`, `bottom` 속성에 영향을 받지 않는다.

## relative

![css-relative](https://codesandbox.io/embed/position-relative-oojqg?fontsize=14&hidenavigation=1&module=%2Findex.css&theme=dark)

- 요소를 일반적인 문서 흐름에 따라 배치한다.
- 페이지에서 요소가 차지하는 공간은 `static` 일 때와 같다.
- `relative`(상대위치) 속성은 자신을 기준으로(기본 위치) 위치를 설정하는 방식이다.
  기본 위치란 position 속성이 적용된 요소의 `static` 값일 때 지정되는 위치를 의미한다.
- 자기 자신을 기준으로 `top`, `right`, `bottom`, `left` 의 값에 따라 오프셋을 적용하며, 오프셋은 다른 요소에는 영향을 주지 않는다.

## absolute

![css-relative](https://codesandbox.io/embed/position-absolute-kt6d2?fontsize=14&hidenavigation=1&module=%2Findex.css&theme=dark)

- 요소를 일반적인 문서흐름에서 제거한다.
- 부모 요소에 속박되지 않고 `viewport` 상에서 어디든지 배치가 가능하다.
- 기준점은 가장가까운 `position: relative` 속성을 가진 요소다.

## fixed

![css-relative](https://codesandbox.io/embed/position-fixed-rndg2?fontsize=14&hidenavigation=1&module=%2Findex.css&theme=dark)

- fixed 방식은 뷰포트(`viewport`)를 기준으로 위치를 설정하는 방식이다.
- 웹 페이지가 스크롤 되어도 고정 위치로 지정된 요소는 항상 같은 곳에 위치하게 된다.

## sticky

![css-relative](https://codesandbox.io/embed/position-sticky-376mk?fontsize=14&hidenavigation=1&module=%2Findex.css&theme=dark)

- fixed 방식은 뷰포트(`viewport`)를 기준으로 위치를 설정하는 방식이다.
- 웹 페이지가 스크롤 되어도 고정 위치로 지정된 요소는 항상 같은 곳에 위치하게 된다.

# static(정적 위치) 지정 방식과 다른 방식들과의 차이점

정적 위치 방식(static)을 제외한 나머지 값들은 모두 어떤 기준에 의해 해당 요소의 위치를 결정하는 방식이다.

- 상대 위치(relative position) : 해당 요소가 정적 위치 지정 방식일 때의 위치에 상대적으로 위치한다.
- 고정 위치(fixed position) : 뷰포트(`viewport`)에 상대적으로 위치한다.
- 절대 위치(absolute position) : 위치가 설정된 바로 상위의 조상(ancestor) 요소에 상대적으로 위치한다. 또는 또는 가장가까운 상대 위치 요소가 기준이 된다.

```

```
