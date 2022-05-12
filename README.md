# Nextjs + redux + sass setup

Nextjs 프로젝트 기본 셋팅 boilerplate

- sass 사용가능
- redux를 서버사이드에서도 접근가능하도록 셋팅
- <span style="color:yellow">간단한 예제로 구현해보았다 사용법은 코드와 비교해보면 익히는것이 빠르다</span>

## 적용 패키지

- redux
  - redux core 모듈(필수설치)
- react-redux
  - react 환경에서 redux를 사용한다면 필수설치
- @reduxjs/toolkit
  - store를 생성하거나 reducer, action 등을 간단하게 작성해준다는 모듈이다.
  - redux 공홈에서 추천하는 방식이길래 사용해봄(최신방식)
- next-redux-wrapper
  - redux를 서버사이드에서 접근가능하도록하는 모듈,  
    클라이언트 측에서만 동작하는 redux를 사용한다면 필요없음
