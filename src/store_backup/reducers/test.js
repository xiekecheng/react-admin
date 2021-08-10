const initState = {
    msg: 'hell redux',
    list: []
}

// reducer是纯函数 (不能修改入参,并且相同入参永远得到唯一的输出)
export default function (state = initState, {    type,    payload}) {
    // 深拷贝
    const newState = JSON.parse(JSON.stringify(state))
    switch (type) {
        case 'update':
            newState.msg = payload
            break
        default:

    }
    return newState
}