import { createSlice } from '@reduxjs/toolkit'
import {fetchGoodsList} from '@/api/goods';
const initialState = {
  value: 0,
  list:[]
}

export const counterSlice = createSlice({
  name: 'counter22',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    goodsList: async (state) => {
        state.list = [1,2,3]
        // console.log(result.data.data.data);
        // state.list = result.data.data.data
        // return state.list = result.data.data.data
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,goodsList } = counterSlice.actions

export default counterSlice.reducer