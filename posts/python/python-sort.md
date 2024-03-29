---
title: "파이썬 정렬"
date: "2022-08-20"
tags: ["python"]
thumbnailImgPath: "/assets/cover/python.png"
thumbnail: "파이썬에서 리스트 정렬 해보기"
---

# 1차원 배열 정렬

## 오름차순

```python
num_list = [1, 10, 5, 7, 6]

num_list.sort() # [1, 5, 6, 7, 10]
```

## 내림차순

```python
num_list = [1, 10, 5, 7, 6]

num_list.sort(reverse=True) # [10, 7, 6, 5, 1]
```

# 2차원 배열 정렬

2차원 배열을 정렬 할땐 람다식을 이용해서 정렬할 수 있다.

## 첫번째 요소를 기준으로 정렬

- 첫번째 요소를 기준으로 정렬할땐 1차원 배열과 마찬가지로 `sort` 함수를 실행하면된다.
- 람다식은 `lambda x:(x[0], x[1])` 이런식으로 들어가고 `x` 의 인덱스가 정렬할 요소의 인덱스이다.
- 예를 들어 두번째 요소를 기준으로 오름차순 정렬, 그 다음 첫번째 요소를 기준으로 내림 차순으로 정렬 하고 싶다면,
  - `lambda x:(x[1], -x[0])` 이렇게 람다식을 설정하면된다.
  - `x[1]`은 두번째 요소를 기준으로 오름 차순 정렬을 하겠다는 의미이다.
  - `-x[0]`은 첫번째 요소를 기준으로 내림차순 정렬을 하겠다는 의미이다.

```python
num_list = [[2, 3], [1, 2], [4, 0]]

# 오름차순
num_list.sort() # [[1, 2], [2, 3], [4, 0]]

# 내림차순
num_list.sort(reverse=True) # [[4, 0], [2, 3], [1, 2]]
```

## 두번째 요소를 기준으로 정렬

- 두번째 요소를 기준으로 정렬 할땐 람다식을 이용해서 정렬할 수 있다.

```python
num_list = [[2, 3], [1, 2], [4, 0]]

# 오름차순
num_list.sort(key=lambda x:x[1]) # [[4, 0], [1, 2], [2, 3]]

# 내림차순
num_list.sort(key=lambda x:-x[1]) # [[2, 3], [1, 2], [4, 0]]

# 두번쨰 요소를 기준으로 오름 차순 정렬, 첫번째 요소는 내림 차순 정렬

num_list.sort(key=lambda x:(x[1], -x[1])) # [[4, 0], [1, 2], [2, 3]]
```
