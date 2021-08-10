import React from 'react';

const Counter = (props) => {
    const {value,add,sub} = props
    return (
        <div>
            <span>{value}</span>
            <button onClick={add}>添加</button>
            <button onClick={sub}>减少</button>
        </div>
    );
};

export default Counter;