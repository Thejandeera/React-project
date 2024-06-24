import React, { useState, useEffect } from 'react';

function Width(){

    const [width,setWidth]= useState(window.innerWidth);
    const [hight,setHeight]= useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize);

        //cleanup
        return()=>{
            window.removeEventListener("resize",handleResize);
        }
    },[]);

    

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
    <p>window Width: {width}</p>
    <p>window Hight: {hight}</p>
    </>)
}
export default Width;