import React, {useState, UseEffect, useRef} from 'react';
function Useref(){

    const ref = useRef(0);

    let [number,setNumber]= useState(0);

    UseEffect(()=>{
       console.log("Component Rendered") ;
    });

    function handleClick(){
        ref.current = ref.current +1;
    };

    return(<>
        <button onClick={handleClick} >Click Me!</button>
        </>
    )




}
export default Useref;