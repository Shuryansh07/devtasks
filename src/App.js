import React from "react";
import TaskItem from "./components/TaskItem";
import tasks from "./data/tasks";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>DevTasks - Developer Task Manager</h1>

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
