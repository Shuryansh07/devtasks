import React, { useState } from "react";

function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Feature");
  const [status, setStatus] = useState("Incomplete");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload

    if (title.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title,
      type,
      status,
    };

    onAdd(newTask); // send task to parent
    setTitle(""); // clear form
    setType("Feature");
    setStatus("Incomplete");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={styles.select}
      >
        <option>Bug</option>
        <option>Feature</option>
        <option>Learning</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={styles.select}
      >
        <option>Incomplete</option>
        <option>Complete</option>
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
    flex: 1,
    padding: "8px",
  },
  select: {
    padding: "8px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
  },
};

export default AddTask;
