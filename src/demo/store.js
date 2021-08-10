// import {createStore} from 'redux';
// import {addTodo} from './ ActionCreator';
// import reducer from './reducer';
// const store = createStore(reducer)

// // 获取当前state
// const state = store.getState()

// store.dispatch(addTodo('我是payload'))
import Counter from './Counter';
import reducer from './reducer';
import {createStore} from 'redux';
const store = createStore(reducer)

// store.subscribe(Counter)
export default store