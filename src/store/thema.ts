import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export interface Thema {
  type: string;
}

export const changeThunk = createAsyncThunk(
  "change/changeThunk", // 첫번째 매개변수로 type의 이름을 설정한다.s
  async () => {
    // 두번째 매개변수로 reducer를 작성한다.
    return (await axios.get("http://localhost:8080/change/theme")).data.theme;
  }
);

const initialState: Thema = { type: "light" };
const themeChangeSlice = createSlice({
  // createSlice로 actions, reducers 등등을 전부 한번에 생성한다.
  name: "thema", // action의 이름, action의 type에 '액션명/리듀서명'으로 표기된다.
  initialState, // 초기값, 객체로만 가능
  reducers: {
    // reducer를 만든다.
    setting: (state, action) => {
      state.type = action.payload.type;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(changeThunk.pending, (state, action) => {});
    builder.addCase(changeThunk.fulfilled, (state, action) => {
      state.type = action.payload;
    });
  },
});

export const action = themeChangeSlice.actions;
// createSlice는 action을 자동으로 만들어준다.(action 함수다)
// dispatch에 매개변수 action에 createSlice로 생성된 actions를 사용한다.
// dispatch(action)

export const reducer = themeChangeSlice.reducer;
// store에 reducer으로 createSlice로 생성된 reducer를 사용한다.
