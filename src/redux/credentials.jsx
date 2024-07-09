import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  usersInfo:[
    {
      firstName: 'Joy',
      OtherName: 'Adu Atakora',
      programme: 'Telecommunication Engineering',
      year: 1,
      product: 'Laptop',
      certified: true
    },
    {
      firstName: 'Nana',
      OtherName: 'Addo',
      programme: 'Business',
      year: 1,
      product: 'Books',
      certified: true
    }
  ]
}

export const userSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {
    addToData: (state, action) => {
        state.usersInfo.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToData } = userSlice.actions

export default userSlice.reducer;