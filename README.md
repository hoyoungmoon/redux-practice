## Practice React-Native, Redux, Redux-saga

배운거 / 배울거 적용해보자

### 적용한 라이브러리
- reudx
- redux-saga
- redux-persist
- redux-logger
- react-navigation

### React



### Redux
[참고1](https://github.com/erikras/ducks-modular-redux)
[참고2](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

디렉토리 구성
- reducer

action type 지정 -> redux-action을 통해 더 간단하게 액션 연결 가능(나중에 추가 예정)

action type과 payload 전달 함수 -> dispatch(someAction()) 으로 디스패치될 함수

state 변경해주는 함수 -> combineReducer로 합쳐서 createStore(rootReducer)로 store 생성

- presentational component

store에 대한 접근 (dispatch 등..) 없이 props로 값, 함수만 받아와서 동작하는 컴포넌트

- container component

store 상태조회, action dispatch 함수를 생성하여 presentational component에게 props로 전달하는 컴포넌트

### Redux-saga