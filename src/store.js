import { configureStore } from '@reduxjs/toolkit'
import BlogSliceReducer from './redux/features/BlogSlice'

export const store = configureStore({
  reducer: {
      blogs:BlogSliceReducer
  },
})