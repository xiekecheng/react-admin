const initialState = {value:0}
function counterReducer(state = initialState,action){
    const newState = JSON.parse(JSON.stringify(state))
    if(action.type==='counter/increment'){
        newState.value+1
        return newState
    }
    return state
}

export default counterReducer