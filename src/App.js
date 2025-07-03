import React, { useState } from "react";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";
import intialTasks from "./data/tasks";

function App() {
  const [tasks, setTasks] = useState(intialTasks);

  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]); // add to top
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>DevTasks - Developer Task Manager</h1>

      <AddTask onAdd={handleAddTask} />

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          type={task.type}
          status={task.status}
        />
      ))}
    </div>
  );
}

export default App;
