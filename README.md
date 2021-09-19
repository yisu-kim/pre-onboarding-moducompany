<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://www.moduparking.com/">
    <img src="https://user-images.githubusercontent.com/37607373/133919431-73f6b3b4-36e6-403d-9a61-22c20fd56c66.jpg" alt="moducompany logo" width=150 />
  </a>

  <h3 align="center">아이템의 드래그 & 드롭이 가능한 투두 리스트</h3>
  
  <p align="center">
    프리온보딩 코스 ModuCompany 기업 과제
    <br />
    <br />
    <a href="https://moducompany.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/FOB-7avaScript/wanted-moducompany-project">Original Team Repo</a>
  </p>
</p>

<!-- Assignment Requirements -->
<details>
  <summary>📋 과제 요구사항 보기</summary>
  <div markdown="1">

#### 공통 가이드

- TypeScript 사용
- 데이터는 로컬의 dummy data 로 자유롭게 구성할 것 (format: json)
- UI 라이브러리 사용하지 않을 것을 권장

#### 과제 A: To-Do List App 만들기 (UI)

간단한 투두리스트 애플리케이션에 적합한 UI/UX를 구성할 수 있다.

**필수 구현 사항**

- 투두리스트에 적합한 데이터를 구성할 수 있다
- Task 데이터 타입에 필수적으로 들어가야할 필드: id, 할일의 제목, 할일 완료 여부 예시 (변수 명은 자유)

```js
{
	id: 1,
	taskName: '자소서 쓰기',
	isComplete: true
}
```

- 적절한 Header를 만든다.
- 투두리스트에 적합한 기능을 구현하기 위해 데이터를 조작할 수 있다.
- 스크롤시 Header가 사라지지 않고 화면 상단에 고정되도록 한다.
- 필수적으로 추가해야할 기능: Task 목록 조회, 새로운 Task 추가, Task 삭제
- 투두리스트에 적절한 애니메이션을 추가할 수 있다.
  - Drag and Drop으로 Task의 순서를 변경한다.
  - 데이터를 변경하지 않고 화면 내에서 Task의 순서만 변경되면 됨

**선택 구현 사항**

- 필수 구현 항목에 덧붙여 필요한 데이터 속성을 추가하여 정의할 수 있다
- 최소 요구사항에 덧붙여 구현하고 싶은 기능이 있으면 추가적으로 구현.
- 최소 요구사항에 덧붙여 추가하고 싶은 UI/UX 및 애니매이션을 추가적으로 구현.

#### 과제 B: To-Do List App만들기 (Data)

간단한 투두리스트 애플리케이션에 적합한 데이터 구조를 정의하고 조작할 수 있다.

**필수 구현 사항**

- 투두리스트에 적합한 데이터 타입을 구성할 수 있다
- Task 데이터 타입에 필수적으로 들어가야할 필드:

  ```jsx
  const task = {
  	id: 1
  	taskName: '자소서 쓰기',
  	status: status.ONGOING
  	createdAt: '2021-02-03'
  	updatedAt: '2021-07-07'
  }
  ```

  - id
  - 할일의 제목
  - 할일의 상태 (최소 3가지 이상의 상태)

    - 예시 (변수 명은 자유)

      ```jsx
      const status = {
      	FINISHED = '완료',
      	ONGOING = '진행중',
      	NOT_STARTED = '시작안함'
      }
      ```

  - 생성일
  - 업데이트일 (상태변경일)

- 투두리스트에 적합한 기능을 구현하기 위해 데이터를 조작할 수 있다.
- 필수 기능:
  - Task 목록 조회
  - 새로운 Task 추가
  - Task 삭제
- 최소 두가지 이상의 조건으로 Task를 필터링 (ex. 상태, 생성일, 생성자, 중요도)
- Task의 상태 변경 (ex. 진행중 → 완료)

**선택 구현 사항**

- 최소 요구사항에 덧붙여 필요한 데이터 속성을 추가하여 정의할 수 있다
- 최소 요구사항에 덧붙여 구현하고 싶은 기능이 있으면 추가적으로 구현.
- 최소 요구사항에 덧붙여 추가하고 싶은 투두리스트에 적절한 UI/UX를 추가할 수 있다.

</div>
</details>

## About The Project

<p align="center">
  <img src="https://user-images.githubusercontent.com/37607373/133923244-0f0bd7bb-d68e-4cff-97da-c5262c3fe71a.gif" alt="project screenshot" height=600 />
</p>

### Built With

- React
- TypeScript
- emotion

## Getting Started

### Installation

To install packages:

```sh
npm install
```

To serve the app:

```sh
npm start
```

## Features

> 제가 개발에 참여한 기능은 ✅로 표시했습니다.

1. 헤더와 Task 추가

   - 스크롤 시 헤더가 사라지지 않고 화면 상단에 고정
   - 할일 내용을 작성해 Task 추가
   - 중요도와 진행 기간 선택 가능

2. Task 목록

   - Task 목록 조회
   - 기본/생성일/중요도 순서로 정렬
   - ✅ Context API를 활용해 드래그 & 드롭 컴포넌트 구현
   - ✅ 기본 정렬일 경우에만 Task 순서를 드래그 & 드롭 가능

3. Task 수정 및 삭제
   - Task의 할일 내용, 중요도, 진행 상태, 진행 기간을 변경
   - Task 삭제

## Members

- [yisu-kim](https://github.com/yisu-kim)
- [nvrtmd](https://github.com/nvrtmd)
- [yoonhe](https://github.com/yoonhe)
- [gildydtjd](https://github.com/gildydtjd)
