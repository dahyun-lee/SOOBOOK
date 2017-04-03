# SOOBOOK
## 수북히 쌓인 내 책장의 책을 시각적으로 정리하기 위한 개인책장 프로젝트!!

### 1. 서비스 제공 기능
- 로그인 / 회원가입 기능
- 구글 api를 이용한 책 검색/추가(멀티추가기능)
- 저장된 리스트 내 개별 서적
  - 별점추가/수정
  - 리뷰추가/수정/삭제
  - 책속 글귀 추가/수정/삭제
- 리스트 내 썸네일 view 모양 변경가능
- 책장 내 원하는 책 검색 기능
- 책의 정렬 순서 변경 기능(최근등록순, 별점 많은순 등)
- 내가 가진 책의 total 수 출력


### 2. 해야할 일
- 라우터 설정으로 한페이지내에서 주소 바뀌고 정보부분만 바뀌도록 설정해보기
- 반응형으로 변경되었을 때 모바일에서의 접근성 고려하기
- VUE.js에서 component별로 나누어 제작
- 반복되는 스타일 sass로 모듈화 하기

### 3. 프로젝트 중 이슈
- 구글 책검색 페이지에서 드래그앤 드롭으로 책 추가 후, 추가된 책을 DOM에서 찾아야 할 때 어떤 방식으로 찾아야 하는가?  
_(동적으로 변경된 요소를 찾아내는 방법 알아보기)_

- 회원가입 api 서버 연결 시 서버에 정보가 전달되지 않는 이유 찾기.   
[[Access_control_CORS 참고링크]](https://developer.mozilla.org/ko/docs/Web/HTTP/Access_control_CORS)
```
XMLHttpRequest cannot load https://soobook.devlim.net/api/user/signup/. Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access.
프리 플라이트 요청에 대한 응답이 액세스 제어 검사를 통과하지 못합니다. 'Access-Control-Allow-Origin'헤더가 요청 된 자원에 없습니다. 따라서 'http : // localhost : 3000'은 허용되지 않습니다.
```

  > **http server** 구동    
    port 설정 ( localhost : 3000, 4040, 5050, 8080, 8000 ) 중에 하나 지정
