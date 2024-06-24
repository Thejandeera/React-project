import React, { useState, useEffect } from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `count: ${count} ${color}`;
    }, [count,color]); // Add count to the dependency array

    function addCount() {
        setCount(count => count + 1);
    }

    function subtractCount() {
        setCount(count => count - 1);
    }

    function changeColor() {
        setColor(color => color === "green" ? "red" : "green");
    }

    return (
        <>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br/>
            <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default UseEffect;
