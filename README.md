<p align='middle'>
  <a href="https://www.moduparking.com/">
    <img src="https://user-images.githubusercontent.com/37607373/130537044-219b7b49-edea-453f-adee-2bbd4d879357.png" alt="Moduparking CI">
  </a>
</p>

# 프리온보딩 코스 Modu Company 기업 과제

> 간단한 To-Do List App 만들기

<details>
  <summary>
    <STRONG>📚 과제 요구사항 보기</STRONG>
  </summary>
<div markdown="1">

<h3>공통 가이드</h3>

- `TypeScript` 사용
- 데이터는 로컬의 dummy data 로 자유롭게 구성할 것 (format: `json`)
- UI 라이브러리 사용하지 않을 것을 권장

<h3>과제 A: To-Do List App 만들기 (UI)</h3>

간단한 투두리스트 애플리케이션에 적합한 UI/UX를 구성할 수 있다.

<h4>필수 구현 사항</h4>

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
- 투두리스트에 적합한 기능을 구현하기 위해 **데이터를 조작**할 수 있다.
- 스크롤시 Header가 사라지지 않고 화면 상단에 고정되도록 한다.
- 필수적으로 추가해야할 기능: Task 목록 조회, 새로운 Task 추가, Task 삭제
- 투두리스트에 적절한 애니메이션을 추가할 수 있다.
  - Drag and Drop으로 Task의 순서를 변경한다.
  - 데이터를 변경하지 않고 화면 내에서 Task의 순서만 변경되면 됨

<h4>선택 구현 사항</h4>

- 필수 구현 항목에 덧붙여 필요한 **데이터 속성을 추가하여 정의**할 수 있다
- 최소 요구사항에 덧붙여 구현하고 싶은 기능이 있으면 추가적으로 구현.
- 최소 요구사항에 덧붙여 추가하고 싶은 UI/UX 및 애니매이션을 추가적으로 구현.

<h3>과제 B: To-Do List App만들기 (Data)</h3>

간단한 투두리스트 애플리케이션에 적합한 데이터 구조를 정의하고 조작할 수 있다.

<h4>필수 구현 사항</h4>

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

<h4>선택 구현 사항</h4>

- 최소 요구사항에 덧붙여 필요한 데이터 속성을 추가하여 정의할 수 있다
- 최소 요구사항에 덧붙여 구현하고 싶은 기능이 있으면 추가적으로 구현.
- 최소 요구사항에 덧붙여 추가하고 싶은 투두리스트에 적절한 UI/UX를 추가할 수 있다.

</div>
</details>
<br/>

## 🚀 배포

Demo Link: https://moducompany.netlify.app/

## 💁🏻‍♂ 실행 방법

### 설치

`npm install`

### 실행

`npm start`

## 🗂 구현 목록

- [x] 적절한 Header를 만들고 스크롤시 Header가 사라지지 않고 화면 상단에 고정된다.
- [x] Task를 추가할 수 있다. 할일 내용을 작성하고 중요도, 진행 기간을 선택할 수 있다.
- [x] Task 목록을 조회할 수 있다. 기본 정렬 외 생성일순, 중요도순으로 정렬할 수 있다.
- [x] Task를 수정하거나 삭제할 수 있다. 할일 내용, 중요도, 진행 상태, 진행 기간을 변경할 수 있다.
- [x] Task의 순서를 변경할 수 있다. 기본 정렬일 때 Task를 drag & drop하여 순서를 바꿀 수 있다.

## 😀 프로젝트 멤버

| 이름   | 담당 |
| ------ | ---- |
| 윤해은 | Todo items 등록 폼 구현 (중요도, 진행 기간 선택 및 할 일 입력) |
| 민유지 | Todo items 삭제 및 수정(할일 내용, 중요도, 진행 상태, 진행 기간) 기능 구현   |
| 길용성 | Task 목록 조회 / Task 필터링(기본순, 생성일, 중요도)     |
| 김이수 | Drag & Drop 기능 / 배포 자동화 |
