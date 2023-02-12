import React from 'react';
import classes from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount] = React.useState<number>(0);

    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.action} onClick={() => setCount(prev => prev + 1)}>increment</button>
        </div>
    );
};