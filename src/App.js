import React, { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";
import FilterButton from "./components/FilterButton";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );
        if (!res.ok) throw new Error("Failed to Fetch tasks.");
        const data = await res.json();

        const formatted = data.map((task) => ({
          id: task.id,
          title: task.title,
          type: ["Bug", "Feature", "Learning"][task.id % 3],
          status: task.completed ? "Complete" : "Incomplete",
        }));
        setTasks(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  const handleDeleteTask = (idToDelete) => {
    const updatedTasks = tasks.filter((task) => task.id !== idToDelete);
    setTasks(updatedTasks);
  };

  const handleToggleStatus = (id) => {
    const updated = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: task.status === "Complete" ? "Incomplete" : "Complete",
          }
        : task
    );
    setTasks(updated);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesType = filter === "All" || task.type === filter;
    const matchesStatus =
      statusFilter === "All" || task.status === statusFilter;
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>DevTasks - Developer Task Manager</h1>

      <AddTask onAdd={handleAddTask} />

      {/* Filter Buttons */}
      <div style={{ marginBottom: "15px" }}>
        {["All", "Bug", "Feature", "Learning"].map((type) => (
          <FilterButton
            key={type}
            label={type}
            isActive={filter === type}
            onClick={() => setFilter(type)}
          />
        ))}
      </div>
      {/* Search bar and status filter */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", flex: "1" }}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ padding: "8px" }}
        >
          <option value="All">All Statuses</option>
          <option value="Complete">Complete</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>

      {loading && <p>loading tasks...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Task List or Empty State */}
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
