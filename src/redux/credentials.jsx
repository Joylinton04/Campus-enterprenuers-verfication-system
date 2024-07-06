import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  usersInfo:[]
}

export const userSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {
    addToData: (state, action) => {
        const info = state.usersInfo.find(data => data.id === action.payload.id)
        state.usersInfo.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToData } = userSlice.actions

export default userSlice.reducer;