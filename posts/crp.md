---
title: "Critical Rendering Path"
date: "2022-01-05"
tags: ["browser"]
thumbnailImgPath: "/assets/crp-cover.svg"
thumbnail: "브라우저의 렌더링 과정"
---

# 브라우저의 렌더링 과정

브라우저가 HTML, CSS, 자바스크립트로 작성된 문서를 어떻게 브라우저에 렌더링 할까?

브라우저는 다음과 같은 과정을 거쳐 렌더링을 수행한다.

1. 브라우저는 html, css, javascript, 이미지, 폰트, 파일등 렌더링에 필요한 리소스를 요청하고 응답을 받는다.
2. 브라우저 렌더링 엔진은 서버로 부터 응답받은 html, css 를 파싱해 dom, cssom 을 생성하고 이들을 결합해 렌더트리를 생성한다.
3. 브라우저의 자바스크립트 엔진은 응답받은 자바스크립트 파일을 파싱해 **AST**(Abstract Syntax Tree) 를 생성하고 바이트 코드로 변환하여 실행한다. 이때 자바스크립트는 dom과 cssom을 변경 할 수 있고 변경된 dom, cssom 은 다시 렌더 트리로 결합된다.
4. 렌더트리를 기반으로 html 요소의 레이아웃(위치, 크기)를 계산하고 브라우저 화면에 html 요소를 페인팅한다.

# 요청과 응답

브라우저의 주소창에 `url`을 입력하고 엔터키를 누르면 `url`의 호스트 이름이 `dns`를 통해 ip 주소로 변환되고 이 ip 주소를 갖는 서버에게 요청을 전송한다 성공적으로 요청이 갔다면 응답으로 정적파일을 받는다.

# HTML 파싱과 DOM 생성

브라우저 요청에의해 응답받은 html 문서는 순수한 텍스트이다. 이 텍스트를 렌더링 하려면 먼저 브라우저가 이해할 수 있는 자료구조로 변환하여 메모리에 저장해야한다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link href="style.css" rel="stylesheet" />
    <title>Critical Path</title>
  </head>
  <body>
    <p>Hello <span>web performance</span> students!</p>
    <div><img src="awesome-photo.jpg" /></div>
  </body>
</html>
```

![dom](/assets/dom.png)

dom 트리가 생성되기까지의 과정은 다음과 같다.

1. 서버로 부터 html(바이트 형태) 을 응답받는다.
2. html 의 meta 태그의 charset 어트리뷰트에 의해 지정된 인코딩 방식으로 바이트를 문자열로 변환한다.
3. 문자열로 변환된 문서를 읽어 문법적의 의미를 갖는 최소 단위인 `토큰`들로 분해한다.
4. 각 토큰을 객체러 변환하여 `노드`들을 생성한다.
5. html 요소간의 부자관계를 반영하여 모든 노드를 **트리 자료구조**로 구성한다. 노드들로 구성된 트리를 `dom`이라고 한다.

# CSS 파싱과 CSSOM 생성

- 렌더링 엔진은 순차적으로 html 을 한줄씩 파싱한다. 파싱중 css 를 로드하는 link 태그나 style 태그를 만나면 dom 생성을 일시 중지하고 css 파일을 서버에 요청하여 가져온다.
- css 파일을 또는 style 태그에 있는 css 를 html 과 동일한 과정으로 파싱 과정(바이트 -> 문자열 -> 토큰 -> 노드 -> CSSOM)을 거치며 **CSSOM**을 생성한다. 이후 중단된 부분부터 다시 html 파싱을 이어간다.
- css 는 dom 파싱을 중단시키는 **렌더링 차단 리소스**이다.

```css
body {
  font-size: 16px;
}

p {
  font-weight: bold;
}

span {
  color: red;
}

p span {
  display: none;
}

img {
  float: right;
}
```

![cssom-construction](/assets/cssom-construction.png)
![cssom-tree](/assets/cssom-tree.png)

# 렌더 트리 생성

- dom 과 cssom 은 렌더링을 위해 **렌더 트리**로 결합된다.
- 렌더트리는 브라우저 화면에 나오는 요소들로만 구성된다(meta 태그, script 태그, display: none 속성 등은 제외)
- 렌더 트리를 이용해 레이아웃을 계산한다.

![cssom-tree](/assets/render-tree.png)

# 레이아웃(리플로우)

완성된 트리를 이용해 기기의 뷰포트 내에서 노드의 정확한 위치와 크기를 계산하는 단계이다.

- 뷰포트 내의 각 요소의 정확한 위치와 크기를 캡쳐하는 `박스모델` 이 생성된다.
- 모든 상대적인 값은 픽셀 값으로 변환된다.

# 페인팅

노드를 브라우저 화면에 렌더링한다.

# 자바스크립트 파싱과 실행

과정은 다음과 같다.

1. css 파싱 과정과 마찬가지로 렌더링 엔진은 html 을 파싱하는 도중 script 태그를 만나면 dom 생성을 일시 중지한다.
2. 자바스크립트 엔진에 제어권을 넘긴다.
3. 자바스크립트 엔진은 자바스크립트 코드를 분석하여 토큰으로 분해한다.
4. 파싱된 토큰들로 **AST(Abstract Syntax Tree)** 를 생성한다. AST 트리는 토큰의 문법적 의미와 구조를 반영한 트리이다.(AST를 사용하면 typescript, babel, 등과 같은 트렌스파일러를 구현할 수 있다.)
5. AST를 이용해 인터프리터가 실행할 수 있는 바이트코드로 변환되고 인터프리터에 의해 실행된다. `V8` 엔진의 경우 터보팬 이라는 컴파일러에 의해 자주 사용하는 코드는 최적화된 기계어로 컴파일되어 성능을 최적화 한다.

# 참고

[모던 자바스크립트 Deep Dive](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791158392239&orderClick=LAG&Kc=)
[google developers](https://developers.google.com/web/fundamentals/performance/critical-rendering-path?hl=ko)
