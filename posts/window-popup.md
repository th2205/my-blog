---
title: "broadcastChannel API를 이용한 윈도우간 통신"
date: "2022-08-14"
tags: ["#javascript"]
thumbnailImgPath: "/assets/hoisting.svg"
thumbnail: "윈도우 팝업간 통신 방법"
---

# Braodcast를 이용한 팝업간 통신

여러개의 팝업을 띄우고 팝업창이 서로 통신해야하는 상황이 발생했다. 찾아보니 팝업간 통신은 브라우저 기본 API인 [window.postMessage](https://developer.mozilla.org/ko/docs/Web/API/Window/postMessage)와 [BroadcastChannel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) 를 이용해 가능했다.

## PostMessge와 BroadcastChannel 의 차이점

### PostMessge

`postMessage`는 window 객체의 메서드로 존재하기 `postMessage`를 사용하기 위해선 팝업을 연 부모창 쪽에서 자식창의 window객체를 가지고 있어야한다. `window` 객체를 계속 관리 해야한다는 번거로움이 있지만 다른 도메인으로도 메세지를 보낼 수 있다.

### BroadcastChannel

`BroadcastChannel` API는 따로 window 객체를 관리 해줄 필요 없이 인스턴스를 만들고 인스턴스 메서드인 `postMessage` 를 실행하면 같은 오리진을 가진 모든 팝업에 메세지를 보내준다. postMessage와 달리 다른 도메인으로는 메세지를 보낼 수 없다.

현재 상황을 고려 했을때 window 객체관리를 할 필요가 없고 같은 도메인의 팝업끼리 통신이 필요 했기 때문에 `BroadcastChannel` API를 선택했다.

## BroadcastChannel 사용 방법

```typescript
const bc = new BroadcastChannel("test_channel");

bc.postMessage("This is a test message.");
```

보내는 쪽에서는 `bc` 인스턴스를 만들고 `postMessage`메서드를 이용해 메세지를 보내면 끝이다. 정말 간단하다.

받는 쪽에서는

```typescript
const bc = new BroadcastChannel("test_channel");

bc.onmessage = (event) => console.log(event);
```

마찬 가지로 `bc` 인스턴스를 만들고 `onmessage` 메서드를 이용해서 메세지를 받으면 된다.

모든 타입의 데이터를 보내고 받을 수 있지만 테스트 했을때 문서에는 나와있지 않지만 `window` 객체와 `peerconnection` 객체는 전달 할 수 없었다. 추측이지만 직렬화 할 수 없는 객체는 보낼 수 없는 것 같다.

# 실제로 사용하기

실제로 사용할땐 `BroadcastChannel` API를 한번더 래핑해서 사용했다. 한번더 래핑 하므로써 원하는 메서드만 내보내고 팝업간 통신 이벤트를 정해진 이벤트만 사용 할 수 있도록 타입을 강제 할 수 있었다.

그리고 밑에 작성한 `Broadcast` class는 윈도우당 하나만 있으면 되기 때문에 앱이 로드되면 하나의 인스턴스만 사용 할 수 있도록 작성했다.(싱글턴 패턴)

```typescript
const BROADCAST_EVNET = {
  REQUEST_INFO: "REQUEST_INFO",
  RESPONSE_INFO: "RESPONSE_INFO",
} as const;

type ValueOf<T> = T[keyof T];
type BroadcastEvent = ValueOf<typeof BROADCAST_EVNET>;

interface Message {
  eventType: BroadcastEvent;
  body: any; // 예시이기 때문에 any로 설정
}

class Broadcast {
  private _bc: BroadcastChannel;

  constructor() {
    this._bc = new BroadcastChannel("test");
  }

  sendRequestInfoEvent(data) {
    const message = {
      evnetType: BROADCAST_EVNET.REQUEST_INFO,
      body: data,
    };

    this._sendMessage(message);
  }

  onMessage(fn: (Message) => void) {
    this._bc.onmessage = (event) => {
      const data = event.data as Message;

      fn(data);
    };
  }

  private _sendMessage(message: Message) {
    this._bc.postMessage(message);
  }
}

export default new Broadcast();
```

이제 보내는 쪽에서는 모듈을 가져와서 제공하는 메서드만 실행하면된다.

```typescript
import broadcast from "...path";

const data = {
  name: "th",
};

broadcast.sendRequestInfoEvent(data);
```

받는 쪽에서는 마찬가지로 모듈을 가져와서 적당한 시점에 `onMessage` 메서드를 실행해 이벤트를 걸어주면 메세지를 받을 수 있다.

```typescript
import broadcast from "...path";

broadcast.onMessage((data) => {
  const type = data.eventType;

  switch (type) {
    case BROADCAST_EVNET.REQUEST_INFO:
      // .... 이벤트를 받았을때 실행할 로직
      break;
  }
});
```

# 참고

[MDN Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API)
