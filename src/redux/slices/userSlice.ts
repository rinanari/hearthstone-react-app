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
      state.id = action.payload.id;
    },
    signUserOut(state) {
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, signUserOut } = userSlice.actions;
export default userSlice.reducer;