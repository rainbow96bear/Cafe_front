import { createSlice } from "@reduxjs/toolkit";
export interface Utils {
  modify: boolean;
}

const initialState: Utils = { modify: false };
const modalSlice = createSlice({
  // createSlice로 actions, reducers 등등을 전부 한번에 생성한다.
  name: "utils", // action의 이름, action의 type에 '액션명/리듀서명'으로 표기된다.
  initialState, // 초기값, 객체로만 가능
  reducers: {
    // reducer를 만든다.
    toggleModify: (state) => {
      state.modify = !state.modify;
    },
    closeModify: (state) => {
      state.modify = false;
    },
  },
});

export const action = modalSlice.actions;
// createSlice는 action을 자동으로 만들어준다.(action 함수다)
// dispatch에 매개변수 action에 createSlice로 생성된 actions를 사용한다.
// dispatch(action)
export const reducer = modalSlice.reducer;
