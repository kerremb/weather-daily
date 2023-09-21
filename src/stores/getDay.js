import { createSlice } from "@reduxjs/toolkit";


const days = [ "Pazar", "Pazartesi","Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
const currentDate = days[new Date().getDay()]

export const getCurrentDay = createSlice({
    name: "searchValue",
    initialState: {
      value: currentDate,
      days: days
    },
    reducers: {
      getDay: (state, action) => {
        state.value = action.payload 
      }
    }})


export const {getDay} = getCurrentDay.actions
    export default getCurrentDay.reducer