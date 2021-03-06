import {
    configureStore
} from '@reduxjs/toolkit';
import counterReducer from './reducers/testReducer';
const store = configureStore({
    reducer: counterReducer
})

store.dispatch({
    type: 'counter/increment'
})