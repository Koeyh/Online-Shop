# Online-Shop
- HTML, CSS, Javascript를 이용한 간단한 쇼핑 게시판 구현
- Java, DB 연동 없이 FrontEnd 요소로만 작성
- DB 연동 없이 데이터를 넘겨주기 위해 json 사용

## 주요 학습 사항
- Javascript
  - fetch API를 이용한 json 파일 수신
  - addEventListner를 이용해 상황에 따른 이벤트 설정
  - then, catch 사용으로 예외 설
- CSS
  - hover를 사용한 커서 접근 시 이벤트 적용
  - 버튼 등의 각종 요소 사이즈, 색상 지정
  - 테두리 설정 방법
- HTML
  - html, javascript, css 파일 분리
    - ```html
      <link rel="stylesheet" href="style.css" />
      <script src="src/main.js" defer></script>
      ```
  - 다중 클래스 상속 파악

## 미니 프로젝트 기능
- 아이콘 클릭 시 색상별, 상,하의 분류별 조회 가능
- 커서가 아이콘 위로 위치할 때 hover 기능 설정
- json의 데이터를 이용해 DB 연동 없이 샘플 데이터 생성
- 구현 화면


    ![sample](https://github.com/Koeyh/Online-Shop/assets/156414715/029a0ce0-dfa4-4498-b970-fe77dd37cb05)

 
## 마치며
- 정적인 요소라고 단순히 생각햇던 프론트엔드 언어들에 javascript를 입히니 분위기가 달라짐
- 실시간으로 데이터를 생성, 수정, 삭제 하지는 못함
- DB와 연동하여 javascript를 사용하면 완성도 있는 페이지 생성이 가능할 것 같은 느낌
- DB와 연동해서 사용하는 방법에 대해서 알아볼 것
- 참고나 설명 없이 진행하기에는 Javascript 이해도가 아직 많이 낮다고 판단됨
- arrow 함수에 대해 이해하는 시간 필요
