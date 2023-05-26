import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { changeThunk } from "./thema";
import API from "../API/API";

export interface AccountInfo {
  account: string;
  admin: boolean;
}

export const connectThunk = createAsyncThunk(
  "connect/changeThunk",
  async () => {
    try {
      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const result = await API.get("/api/web3/check/admin", {
        params: { account },
      });
      return { account: result.data.account, admin: result.data.admin };
    } catch (error) {
      console.log(error);
    }
  }
);

export const checkSessionThunk = createAsyncThunk(
  "checkSession/checkSessionThunk",
  async () => {
    try {
      const result = await API.get("/api/web3/check/connect");
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const disconnectThunk = createAsyncThunk(
  "disconnect/disconnectThunk",
  async () => {
    try {
      const result = await API.put("/api/web3/disconnect");
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState: AccountInfo = { account: "disconnect", admin: false };
const connect = createSlice({
  // createSlice로 actions, reducers 등등을 전부 한번에 생성한다.
  name: "thema", // action의 이름, action의 type에 '액션명/리듀서명'으로 표기된다.
  initialState, // 초기값, 객체로만 가능
  reducers: {
    // reducer를 만든다.
    disConnect: (state) => {
      // cookie와 session 삭제
      state.account = "";
      state.admin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(connectThunk.fulfilled, (state, action) => {
        state.account = action.payload?.account;
        state.admin = action.payload?.admin;
      })
      .addCase(disconnectThunk.fulfilled, (state, action) => {
        state.account = action.payload?.account;
        state.admin = action.payload?.admin;
      })
      .addCase(checkSessionThunk.fulfilled, (state, action) => {
        state.account = action.payload?.account;
        state.admin = action.payload?.admin;
      });
  },
});

export const action = connect.actions;
// createSlice는 action을 자동으로 만들어준다.(action 함수다)
// dispatch에 매개변수 action에 createSlice로 생성된 actions를 사용한다.
// dispatch(action)

export const reducer = connect.reducer;
// store에 reducer으로 createSlice로 생성된 reducer를 사용한다.
