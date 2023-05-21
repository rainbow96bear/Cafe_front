import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { changeThunk } from "./thema";
// import axios from "axios";

export interface AccountInfo {
  account: string;
}

export const connectThunk = createAsyncThunk(
  "connect/changeThunk", // 첫번째 매개변수로 type의 이름을 설정한다.
  async () => {
    try {
      // 두번째 매개변수로 reducer를 작성한다.
      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return account;
    } catch (error) {}
  }
);

const initialState: AccountInfo = { account: "" };
const connect = createSlice({
  // createSlice로 actions, reducers 등등을 전부 한번에 생성한다.
  name: "thema", // action의 이름, action의 type에 '액션명/리듀서명'으로 표기된다.
  initialState, // 초기값, 객체로만 가능
  reducers: {
    // reducer를 만든다.
    disConnect: (state) => {
      state.account = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(connectThunk.fulfilled, (state, action) => {
      state.account = action.payload;
    });
  },
});

export const action = connect.actions;
// createSlice는 action을 자동으로 만들어준다.(action 함수다)
// dispatch에 매개변수 action에 createSlice로 생성된 actions를 사용한다.
// dispatch(action)

export const reducer = connect.reducer;
// store에 reducer으로 createSlice로 생성된 reducer를 사용한다.
