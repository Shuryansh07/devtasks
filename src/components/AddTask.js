import React, { useState } from "react";

function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Bug");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("Incomplete");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      setError("Task title cannot be empty.");
      return;
    }

    setError("");
    const newTask = {
      id: Date.now(),
      title,
      type,
      status,
    };

    onAdd(newTask); // pass task to App.js
    setTitle(""); // reset form
    setType("Bug");
    setStatus("Incomplete");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      {error && <p style={{ color: "red", margin: 0 }}>{error}</p>}
      <input
        type="text"
        value={title}
        placeholder="Task Title"
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={styles.select}
      >
        <option value="Bug">Bug</option>
        <option value="Feature">Feature</option>
        <option value="Learning">Learning</option>
      </select>
      <button type="submit" style={styles.button}>
        Add Task
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },
  input: {
    flex: 2,
    padding: "8px",
  },
  select: {
    flex: 1,
    padding: "8px",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default AddTask;
