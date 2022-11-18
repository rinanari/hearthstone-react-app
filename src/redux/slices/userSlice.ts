import { createSlice } from "@reduxjs/toolkit";

interface userState {
  email: string | null;
  id: string | null;
}
const initialState: userState = {
  email: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
    },
    signUserOut(state) {
      state.email = null;
    },
  },
});

export const { setUser, signUserOut } = userSlice.actions;
export default userSlice.reducer;
