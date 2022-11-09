import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
}
const initialState: AuthState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload;
    },
    removeAuth(state, action) {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth, removeAuth } = authSlice.actions;
export default authSlice.reducer;
