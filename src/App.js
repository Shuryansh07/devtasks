import React, { useState } from "react";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";
import initialTasks from "./data/tasks";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("All"); //  new state

  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  //  Filter the tasks based on the filter selected
  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.type === filter);

  return (
    <div style={{ padding: "20px" }}>
      <h1>DevTasks - Developer Task Manager</h1>

      <AddTask onAdd={handleAddTask} />

      {/* Filter Buttons */}
      <div style={{ marginBottom: "15px" }}>
        {["All", "Bug", "Feature", "Learning"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            style={{
              marginRight: "10px",
              padding: "6px 12px",
              backgroundColor: filter === type ? "#007bff" : "#ccc",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Task List */}
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            type={task.type}
            status={task.status}
          />
        ))
      ) : (
        <p>No tasks found for this category.</p>
      )}
    </div>
  );
}

export default App;
