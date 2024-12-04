import React, { useState } from 'react'

const AddTask = ({addTask}) => {
  
  const [name,setName] = useState("")

  const handelName = (e) => {
    setName(e.target.value)
    console.log(name)
  }

  const handleAdd = () => {
    let newTask = {name}
    addTask(newTask)
  }

  return (
    <div>
      <input placeholder='task name' onChange={(e)=>handelName(e)} value={name} />
      <button onClick={()=>handleAdd()} >Add Task</button>
    </div>
  )
}

export default AddTask