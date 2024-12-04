import React from 'react'
import TaskCard from './TaskCard'

const ListTasks = ({tasks}) => {
    console.log(tasks)
  return (
    <div>
        {tasks.map(task => <TaskCard task={task} key={task.id} /> )}
    </div>
  )
}

export default ListTasks