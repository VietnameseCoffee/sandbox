import { useState, useEffect } from 'react';

import './styles/App.scss';
import Heading from './components/Heading';
import Form from './components/Form';
import TaskLists from './components/TaskLists';

function App() {
  const makeId = () => Math.floor(Math.random() * 1000000);
  const initTasks = [
    { id: makeId(), text: "Buy Milk", isDone: false },
    { id: makeId(), text: "Vacuum House", isDone: false },
    { id: makeId(), text: "Read Book", isDone: false },
    { id: makeId(), text: "Wash Car", isDone: true }
  ];
  
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    newTask.id = makeId();
    console.log(newTask, newTask.id)
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);

    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  const checkTask = (id) => {
    const clonedTasks = [...tasks];
    clonedTasks.forEach((task) => {
      if (task.id === id) task.isDone = true;
    });

    setTasks(clonedTasks);
  }

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(tasks)
  }, [])

  const deleteTask = (id) => {
    const clonedTasks = [...tasks];
    const taskIdx = clonedTasks.indexOf((task) => task.id === id);
    clonedTasks.splice(taskIdx, 1);

    setTasks(clonedTasks);
  }

  return (
    <div className="App">
      <Heading />
      <Form addTask={addTask} />
      <TaskLists tasks={tasks} checkTask={checkTask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
