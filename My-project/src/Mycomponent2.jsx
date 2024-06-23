import React, { useState } from 'react';
function Mycomponent2(){
    const[car,setCar] = useState({year:2024,make:"Ford",model:"Mustang"})
    
    function handleYearChange(event){
        setCar({...car,year:event.target.value});
    }
    function handleMakeChange(event){
        setCar({...car,make:event.target.value});

    }
    function handleModelChange(event){
        setCar({...car,model:event.target.value});

    }

    return(
    <div className="Mycomponent2-div">
    <p>Your Favourite car is : {car.year} {car.make} {car.model}</p>    
    <input type="number" value={car.year} onChange={handleYearChange} ></input><br/>
    <input type="text" value={car.make} onChange={handleMakeChange} ></input><br/>
    <input type="text" value={car.model} onChange={handleModelChange} ></input><br/><br/>
    
    </div>)
}
export default Mycomponent2;