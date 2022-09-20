import { createSlice } from "@reduxjs/toolkit"

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    name: "coderwhy"
  },
  reducers: {
    changeNameAction(state, { payload }) {
      state.name = payload
    }
  }
})

export const { changeNameAction } = entireSlice.actions

export default entireSlice.reducer
