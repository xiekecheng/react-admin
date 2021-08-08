import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount] = useState(0)

    const increase = ()=>{
        setCount(count+1)
    }
    return (
        <div>
            value: {count}
            <button onClick={increase}>添加</button>
        </div>
    );
};

export default Counter;