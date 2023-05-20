import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "./thema";

export const store = configureStore({
  reducer: { thema: reducer },
  // configureStore는 객체를 매개변수로 받으며 객체 내에서 reducer, middleware 등 store에 필요한 작업을 할 수 있다.
  // reducer는 이전의 combineReducers와 같이 객체로 받으며 state 명을 키로, 해당 reducer를 값으로 받는다.
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  // 18번줄은 미들웨어 추가 시 사용
  // getDefaultMiddleware는 기본 미들웨어를 가져오는 함수
  // - redux toolkit은 기본적으로 'redux-devtools-extension' 라이브러리와 'redux-thunk' 라이브러리를 지원한다.
});
