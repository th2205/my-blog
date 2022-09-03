---
title: "MQTT와 실시간 통신"
date: "2021-10-19"
tags: ["network"]
thumbnailImgPath: "/assets/cover/network.png"
thumbnail: "mqtt 프로토콜과 작동 원리"
---

# MQTT 프로토콜이란?

MQTT(Message Queue Telemetry Transport)란 Broker Pattern을 이용한 메시징 프로토콜이다. M2M, IoT(사물인터넷) 등 에서 사용하기 위해 만들어졌으며 낮은 전력, 낮은 대역폭 환경에서도 사용할 수 있도록 설계된 프로토콜이고 publish / subscribe (발행 / 구독) 아키텍처를 기반으로 통신한다.

mqtt는 다음과 같은 특징이있다.

- Broker pattern
- Publish, Subscribe
- Topic
- Will Message

## Broker pattern

![mqtt](/mqtt/mqtt-protocol.png)

mqtt는 브로커 서버가 클라이언트로 부터 메세지를 받고, 나머지 클라이언트 간의 통신을 조정하는 역할을 한다.

## Topic

mqtt는 topic 을 기준으로 구독과 발행이 이루어진다. 토픽은 / 를 이용해 채널을 구분 지을수있다 또한 서로를 구독 할 수 도있고 여러 토픽이 하나의 토픽을 구독하거나 발행 할 수 도있다.(1:1, 1:N)

## Publish, Subscribe

mqtt 프로토콜은 토픽을 구독하고 구독한 토픽에 메세지를 발행 하는 방식으로 통신이 이루어진다. 구독과 발행에서 브로커는 말 그대로 중개자 역할을 하게된다.

예를들어 publisher가 어떠한 토픽에 메세지를 발행하면 해당 토픽을 구독하고 있는 모든 구독자들에게 브로커를 거쳐 메세지가 도착한다.

## Will Message

소켓과는 다르게 will 메시지를 통해 비정상적으로 연결이 끊어진경우 무엇을 할지 정의 할 수 있다. 유언 이라고 보면 될 것 같다. 때문에 연결이 끊어진 경우 빠르게 조치를 취할 수 있다.

클라이언트가 브로커에 연결되고 will 메세지가 등록되면 브로커는 주기적으로 클라이언트가 연결되었는지 확인한다 (keep alive, ping) 클라이언트에 에서 일정시간 ping이 오지 않는 경우 비정상적인 종료라고 판단하고 will 메세지를 구독하고 있는 클라이언트에 발행한다.

또한 will 메세지는 자신이 구독하고 있는 토픽과 무관하게 토픽을 정할 수 있다.

# QOS

qos란 정확한 통신을 보장해주는 레벨을 의미한다. 반드시 클라이언트에 전송돼야하는 메세지가 있고 반대로 전송이되지 않더라도 상관없는 메세지가 있다. mqtt는 “최대 한번”, “적어도 한 번”, “정확히 한 번” 으로 qos 레벨을 세가지로 정의한다.

- qos level 0
- qos level 1
- qos level 2

## level 0

메세지를 한번만 보낸다. 전달이됐는지 여부는 체크하지않는다.

## level 1

최소 한번은 전달한다. 핸드 세이킹 과정을 거치지 않고 메세지를 전송한다.

## level 2

정확하게 반드시 한번 전달한다. 메세지 전송이 보장되어야한다면 이 레벨을 사용하면된다.
