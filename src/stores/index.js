import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './searchSlice'
import searchOnChange from './searchOnChange'
export default configureStore({
  reducer: {
    search: searchSlice,
    searchValue: searchOnChange,
   
  }
}) 