import React, { useState } from 'react';

function ToDoList(){

    const [tasks,setTasks]= useState(["Eat Breakfast ","Take a Shower "]);
    const [newtask,setNewTasks] = useState([]);

    function handleInputChange(event){
        setNewTasks(event.target.value);
    }
    function addTask(){
        if(newtask.trim() !== ""){
            setTasks([...tasks,newtask]);
        setNewTasks("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    

    return(<div className="to-do-list" >
        <h1 className="To-Do-List" ></h1>
        <div>
           <input className="input-field" type='text' placeholder='Enter A Task' value={newtask} onChange={handleInputChange} ></input> 
            <button className='add-button' onClick={addTask} >
                Add
            </button>
        </div>
        <ol className="ordered-list" >
            {tasks.map((task,index)=> 
            <li key={index} >
                <span className="text" >{task}</span>
                <button className="delete-button" onClick={()=>deleteTask(index)} >Delete</button>
                <button className="move-button" onClick={()=>moveTaskUp(index)} >Up 👆</button>
                <button className="move-button" onClick={()=>moveTaskDown(index)} >Down 👇 </button>
            </li>)}
        </ol>
    </div>)
}
export default ToDoList;