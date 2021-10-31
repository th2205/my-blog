---
title: "CSS 박스 모델"
date: "2021-10-31"
tags: ["#css"]
thumbnailImgPath: "/css-box-model/box-model.svg"
thumbnail: "CSS 박스 모델 완벽 정리"
---

# 박스 모델(Box Model) 이란?

모든 html 구성 요소(Element)는 박스 모양으로 구성되며 이것을 박스 모델 이라고 한다. css 스타일링을 하면서 박스모델을 모르고 스타일링을 한다는 것은 단순히 copy, paste 만 한다는 의미다. 박스모델은 요소를 패딩(padding), 테두리(border), 마진(margin), 내용(content)로 구분한다.

박스 모델은 네가지로 구분 할 수 있다.

1. 내용(content): 내용은 텍스트나 이미지가 들어가는 영역이다.
2. 패딩(padding): 패딩은 내용과 테두리 사이의 간격이다.
3. 테두리(border): 마진과 패딩 사이의 패딩을 감싸는 요소이다. 4.마진(margin): 마진은 테두리와 이웃하는 요소 사이의 간격이다.

![box-model](http://tcpschool.com/lectures/img_css_boxmodel.png)

# 요소의 높이(height) 와 너비(width)

요소의 높이와 너비는 기본적으로 content + padding + border 값이다.

# 참고

https://tcpschool.com/
