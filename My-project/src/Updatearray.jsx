import React, { useState } from 'react';
function Updatearray (){
    const [fruits,setFruits]=useState(["Apple","Orange","Banana"]);

    function handleAddFood(event){
        const newfood = document.getElementById("fruitinput").value;
        document.getElementById("fruitinput").value = "";

        setFruits(foods => [...fruits,newfood]);
    }
    function handleRemoveFruit(index){
        setFruits(fruits.filter((_,i) => i !== index));
    }


    return(<div>
        <h2>List of Fruit</h2>
        <ul>
            {fruits.map((fruit,index)=><li key = {index} onClick={()=>handleRemoveFruit(index)} >{fruit}</li>)}
        </ul>
        <input type="text" id="fruitinput"placeholder="Enter the fruit"></input>
        <button className="button2" onClick={handleAddFood} >Add Fruit</button>
    </div>)

}
export default Updatearray;