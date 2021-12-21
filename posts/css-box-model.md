---
title: "CSS 박스 모델"
date: "2021-10-31"
tags: ["#css"]
thumbnailImgPath: "/css-box-model/box-model.svg"
thumbnail: "CSS 박스 모델 정리"
---

# 박스 모델(Box Model) 이란?

모든 html 구성 요소(Element)는 박스 모양으로 구성되며 이것을 박스 모델 이라고 한다. css 스타일링을 하면서 박스모델을 모르고 스타일링을 한다는 것은 단순히 copy, paste 만 한다는 의미다. 박스모델은 요소를 패딩(padding), 테두리(border), 마진(margin), 내용(content)로 구분한다.

박스 모델은 네가지로 구분 할 수 있다.

1. 내용(content): 내용은 텍스트나 이미지가 들어가는 영역이다.
2. 패딩(padding): 패딩은 내용과 테두리 사이의 간격이다.
3. 테두리(border): 마진과 패딩 사이의 패딩을 감싸는 요소이다. 4.마진(margin): 마진은 테두리와 이웃하는 요소 사이의 간격이다.

![box-model](/css-box-model/css-boxmodel.png)

# 요소의 높이(height) 와 너비(width)

요소의 높이와 너비는 기본적으로 content + border + padding 이다. 하지만 이렇게 계산할 경우 전체 크기를 계산 하기 쉽지않다. 때문에 box-sizing 이라는 css 속성을 이용해 박스 크기를 계산하는 방법을 바꿀 수 있다.

# box-sizing

box-sizing 속성은 두가지 값을 갖는다.

![box-model](https://codesandbox.io/embed/box-sizing-xhzdl?fontsize=14&hidenavigation=1&theme=dark)

## content-box

기본 값이다. 요소의 크기를 width 와 height 속성이 컨텐츠 영역만 포함하고 나머지 영역은 포함하지 않는다.

- width = 콘텐츠 너비
- height = 콘텐츠 높이

로 계산하고 padding 과 border 는 함께 계산되지 않는다. 위의 코드에서 content-box 의 너비와 높이를 계산해보자.

- width: 150px + (2 x 10px) + (2 x 5px) = 180px
- height: 100px + (2 x 10px) + (2 x 5px) = 130px

이 된다.

## border-box

width 와 height 속성이 안쪽 여백과 테두리를 포함한다.

- width = 박스 width
- height = 박스 height

으로 계산하고 더해진 안쪽영역(패딩, 테두리) 만큼 컨텐츠의 크기가 줄어들고 margin 은 포함하지 않는다.
위의 코드에서 border-box 의 width 와 height 는 css 에 작성한 width, height 값이 된다.

- width: 150px
- height: 100px

이 된다.

일반 적인 경우 요소의 크기를 계산 할때 border-box 속성을 사용하는 것이 크기를 계산하는데 편리하다.

# block 과 inline 그리고 inline-block

css 에서 display 속성은 브라우저에서 요소를 어떻게 배치하고 어떻게 요소끼리 상호작용을 시킬지 결정하는 속성이다.
display 에서 사용 할 수 있는 값들은 다음의 특징을 가진다.

## block

display 가 bolck 으로 설정된 요소는 새로운 줄에 위치하게되고, 너비와 높이가 부모 요소의 100% 를 차지한다.

너비와 높이의 크기를 지정 할 수 있고 크기를 부모 요소보다 작게 설정한 경우 나머지 부분은 margin 으로 채워져 bolck 요소는 한줄을 계속해서 그대로 차지하게된다.

## inline

inline 으로 설정된 요소는 너비와 높이를 직접 지정 할 수 없고, 오로지 컨텐츠의 크기로 너비와 높이가 결정된다. 또한 block 요소와는 다르게 줄바꿈이되지 않는다.

또한 margin 과 padding 요소는 좌우만 반영되고 상하는 반영되지 않는다.

## inline-block

의미 그대로 inline 과 block 의 특징이 합쳐진 값이다. inline 요소와 같이 줄바꿈이 되지 않으며 block 요소와 같이 width, height, margin, padding 속성의 지정이 가능하다.

inline-block 를 이용하면 여러개의 엘리먼트를 한줄에 원하는 너비와 높이 만큼 배치 할 수 있다.

# 참고

[https://tcpschool.com/](https://tcpschool.com/)
