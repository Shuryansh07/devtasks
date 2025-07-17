import { useEffect, useRef, useState } from "react";
import AddTask from "./components/AddTask";
import FilterButton from "./components/FilterButton";
import TaskList from "./components/TaskList";
import StatsPanel from "./components/StatsPanel";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./context/ThemeContext";
import useStyledTheme from "./hooks/useStyledTheme";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const { darkMode } = useTheme();
  const { styles } = useStyledTheme();

  const isFirstLoad = useRef(true);

  useEffect(() => {
    const savedTasks = localStorage.getItem("devtasks");
    const parsed = savedTasks ? JSON.parse(savedTasks) : [];

    if (parsed.length > 0) {
      setTasks(parsed);
      setLoading(false);
    } else {
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

          if (isFirstLoad.current) {
            setTasks(formatted);
            localStorage.setItem("devtasks", JSON.stringify(formatted));
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchTasks();
    }

    isFirstLoad.current = false;
  }, []);

  useEffect(() => {
    localStorage.setItem("devtasks", JSON.stringify(tasks));
  }, [tasks]);

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

  const handleUpdateTask = (id, updatedFields) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, ...updatedFields } : task
    );
    setTasks(updatedTasks);
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
    <div style={styles.container(darkMode)}>
      <ThemeToggle />
      <h1>DevTasks - Developer Task Manager</h1>

      <AddTask onAdd={handleAddTask} />

      {/* Filter buttons by Type */}
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

      {/* Search and Status Filter */}
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
          style={styles.input(darkMode)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={styles.select(darkMode)}
        >
          <option value="All">All</option>
          <option value="Complete">Complete</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>

      {/* Loading & Error */}
      {loading && <p>Loading tasks...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Stats Panel */}
      <StatsPanel tasks={filteredTasks} />

      {/* Task List */}
      <TaskList
        tasks={filteredTasks}
        onDelete={handleDeleteTask}
        onToggleStatus={handleToggleStatus}
        onUpdate={handleUpdateTask}
      />
    </div>
  );
}

export default App;
