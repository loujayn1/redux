import React from 'react'
import Task from "./Task";
import database from "./database"
import { useState } from 'react';



export default function Listtask() {
const [listtask,setlisttask]=useState([...database]);
const [isdoneList,setisdoneList]=useState([]);
const filterdone = () => {
   setlisttask(prevlisttask => prevlisttask.filter((ele) => ele.isdone == "yes"))
}

const filternotdone = () =>{setlisttask(prevlisttask => prevlisttask.filter((ele) => ele.isdone == "no"))
}



  const addItem = () => {
      setlisttask=[...listtask ,{
          id:"travel",
          description:"to Barcelone",
          isdone:"no"
      }]
  }

    
return (
    <>
    
  <div className='listtask'>
        {listtask.map((ele)=>{
            return <Task
            id={ele.id}
            description={ele.description}
            isdone={ele.isdone}
            />
        })}
    </div>
    <button onclick={addItem}>ADD TASK</button>
    <button onClick={filterdone}>show done</button>
    <button onClick={filternotdone}>show notdone</button>

    </>
  
)
    }
