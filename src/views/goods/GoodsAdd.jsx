import React, { useState } from 'react';

const GoodsAdd = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(prevCounter => prevCounter + 1)
      }
    return (
        <div>
            新增商品
            Value: {counter} <button onClick={increment}>Increment</button>
        </div>
    );
};

export default GoodsAdd;