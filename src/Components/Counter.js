import React, { useState } from 'react';
import './Counter.css';


const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    const backgroundColor = `rgba(0, 0, 255, ${count / 100})`;

    return (
        <div style={{ backgroundColor }}>
            <h2>Counter: {count}</h2>
            <button id='increment-button' onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};
export default Counter;