// const initState = 0
// const reducer = function (state = initState, action) {
//     // reducer 需要返回新state

//     switch (action.type) {
//         case 'ADD':
//             return state + action.payload
//         default:
//             return state

//             // return newState
//     }
// }

// const state = reducer(1, {
//     type: 'ADD',
//     payload: 2
// })

// export default reducer

const initState = {
    value: 2
}
const reducer = (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'add':
            console.log('+1');
            newState.value = state.value + 1
            console.log(newState);
            return newState
        case 'sub':
            console.log('-1');
            newState.value = state.value + 1
            return newState
        default:
            console.log('000');
            return state
    }
}

export default reducer