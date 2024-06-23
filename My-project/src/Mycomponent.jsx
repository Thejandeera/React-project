import React, { useState } from 'react';

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age , setAge] = useState (0);
    const [isEmployed , setEmployee] = useState(false);

    const updateName = (name) => {
        setName(name);
        console.log('Name updated to:', name);
    };

    const updateAge =() =>{
        setAge(age +1);
        console.log(`Age is updated / ${age}`)
    }

    const toggleEmployee = () =>{
        setEmployee(!isEmployed);
        console.log("Updated Employee Status");
    }

    return (
        <><div >
        <p>Name: {name}</p>
        <button  className="button2" onClick={()=>updateName ("Thejan") }>Set Name</button>

        <p>Age: {age}</p>
        <button  className="button2" onClick={updateAge}>Update Age</button>

        <p>Employee : {isEmployed? "yes" :"No"}</p>
        <button  className="button2" onClick={toggleEmployee}>Toggle Employee</button>
    </div></>
    );
}

export default MyComponent;
