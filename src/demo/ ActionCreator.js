const ADD_TODO = '添加TODO'
function addTodo(payload){
    return{
        type:ADD_TODO,
        payload
    }
}

export{
    addTodo
}