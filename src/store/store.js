import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from '../services/userService'
import userReducer from'../components/features/auth/userSlice'


export const store = configureStore({
  reducer: {
    userdata:userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})
 
setupListeners(store.dispatch)