import { configureStore, createSlice } from "@reduxjs/toolkit";
import reducer from './reducer';
// console.log('reducer111',reducer);
// 创建store
const store = configureStore({
    reducer:{
        counter: reducer
    }
})

export default store