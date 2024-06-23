import React, { useState } from 'react';

function Onchange() {
    const [name, setName] = useState("Guest");
    const [quantity,setQuantity] = useState(1);

    function handleNameChange(event) {
        setName(event.target.value);
        
    }

    function updateQuantity(event){
        if(event.target.value < 0){
            setQuantity(0);
        }
        else{
            setQuantity(event.target.value)
        }
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input className="Onchange-quantity" value={quantity} onChange={updateQuantity} type='number' />
            <p>Quantity: {quantity}</p>
        </div>
    );
}

export default Onchange;
