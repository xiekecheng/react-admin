import { applyMiddleware } from '@reduxjs/toolkit';
import {createStore} from 'redux';


// reducer 作用: 用于修改store

// 定义初始值
const initState = {
    msg: 'hello redux',
    list:[]
}
function reducer(state,action){
    console.log('有订单来了',action);
    state = initState;
    // 根据action(信号来做各种不同的事)
    const newState  = JSON.parse(JSON.stringify(state))
    if(action.type==='update'){
        newState.msg = action.payload
    }
    return newState
}

const store = createStore(reducer,{},applyMiddleware)

export default store