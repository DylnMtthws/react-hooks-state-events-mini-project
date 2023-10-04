import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState('All')

  function handleDelete(deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText))
  }

  function handleAddTask(newTask) { 
    setTasks([...tasks, newTask])
  }

  const visibleTasks = tasks.filter(
    (tasks) => category === 'All' || tasks.category === category
  )

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter updateCategory={setCategory} selectedCategory={category} categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask}/>
      <TaskList tasks={visibleTasks} onDeleteTask={handleDelete}/>
    </div>
  );
}

export default App;
