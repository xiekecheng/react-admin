import React from 'react';

import {connect} from 'react-redux';
// 语法 connect(mapStateToProps,mapDispatchToProps)(WrappedComponent)

function mapStateToProps(store){
    return {msg: store.msg}
}

function mapDispatchToProps(dispatch){
    return{
        // 行为的封装
        setMsg(payload){
            var action = {type:'update',payload}
            // 把信号派送到redux的store中
            dispatch(action)
        }
    }
}



// @connect(mapStateToProps)
const index = (props) => {
    console.log(props)
    
    return(
            <div>
                <h1>在类组件中使用Redux数据</h1>
            </div>
    )};

export default connect(mapStateToProps,mapDispatchToProps)(index);