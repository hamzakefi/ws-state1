import { useState } from 'react';
import './App.css';
import { TaskList } from './Components/Data';
import ListTasks from './Components/ListTasks';
import AddTask from './Components/AddTask'

function App() {

  const [tasks,setTasks] = useState(TaskList)

  const addTask = (newTask) => {
    setTasks([...tasks,newTask])
  }

  return (
    <div className="App">
      <AddTask addTask={addTask} />
      <ListTasks tasks={tasks} />

    </div>
  );
}

export default App;
