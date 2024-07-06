import { configureStore } from '@reduxjs/toolkit'
import usersDataReducer from './credentials'

export default configureStore({
  reducer: {
    usersData:usersDataReducer
  }
})