import React, { useState } from "react";
import useStyledTheme from "../../hooks/useStyledTheme";

function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Bug");
  const [status, setStatus] = useState("Incomplete");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { darkMode, styles } = useStyledTheme(); // ✅ include styles here

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      setError("Task title cannot be empty.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setError("");
    setSuccess("Task Added Successfully!");
    setTimeout(() => setSuccess(""), 3000);

    onAdd({
      id: Date.now(),
      title,
      type,
      status,
    });

    setTitle("");
    setType("Bug");
    setStatus("Incomplete");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form(darkMode)}>
      {error && <p style={{ color: "red", margin: 0 }}>{error}</p>}
      {success && <p style={{ color: "green", margin: 0 }}>{success}</p>}

      <input
        type="text"
        value={title}
        placeholder="Task Title"
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input(darkMode)}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={styles.select(darkMode)}
      >
        <option value="Bug">Bug</option>
        <option value="Feature">Feature</option>
        <option value="Learning">Learning</option>
      </select>

      <button
        type="submit"
        style={styles.button(darkMode)}
        disabled={title.trim() === ""}
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTask;
