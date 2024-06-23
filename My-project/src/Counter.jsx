import React, { useState } from 'react';

function Counter () {
    const [count,setCount] = useState(0);
    const increment = () =>{
        setCount(count +1);
       // setCount(count => count +1);
        console.log("Count is incremented")
    }

    const decrement = () =>{
        setCount(count -1);
        console.log("Count is decremented")
    }

    const reset = () =>{
        setCount(0);
        console.log("Count is resetted")
    }

    return(<><div>
        <p>Count: {count}</p>
        <button className="button2" onClick={()=>increment()}>Increment</button>
        <button className="button2" onClick={()=>reset()}>Reset</button>
        <button className="button2" onClick={()=>decrement()}>Decrement</button>
        </div></>)
}
export default Counter ;