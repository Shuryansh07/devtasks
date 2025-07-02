import React from "react";
import TaskItem from "./components/TaskItem";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>DevTasks - Developer Task Manager</h1>
      <TaskItem title="Fix the navbar bug" type="Bug" status="Incomplete" />
      <TaskItem title="Add login feature" type="Feature" status="complete" />
      <TaskItem
        title="Watch React Tutorial"
        type="Learning"
        status="Incomplete"
      />
    </div>
  );
}

export default App;
