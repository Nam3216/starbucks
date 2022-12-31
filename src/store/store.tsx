import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "./cartSlice"

export  const store:any= configureStore({
  reducer: {cart:cartSlice}
})