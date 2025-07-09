import React from "react";

function TaskItem({ id, title, type, status, onDelete, onToggleStatus }) {
  const styles = {
    card: {
      border: "1px solid #ddd",
      padding: "10px",
      marginBottom: "10px",
      backgroundColor: "#f9f9f9",
      borderLeft:
        type === "Bug"
          ? "5px solid red"
          : type === "Feature"
          ? "5px solid green"
          : "5px solid blue",
      position: "relative",
      opacity: status === "Complete" ? 0.6 : 1,
    },
    statusText: {
      color: status === "Complete" ? "green" : "red",
      fontWeight: "bold",
    },
    deleteButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      border: "none",
      backgroundColor: "#e74c3c",
      color: "white",
      cursor: "pointer",
      padding: "4px 8px",
      borderRadius: "4px",
    },
    toggleButton: {
      position: "absolute",
      top: "10px",
      left: "10px",
      border: "none",
      backgroundColor: "#3498db",
      color: "white",
      cursor: "pointer",
      padding: "4px 8px",
      borderRadius: "4px",
    },
  };

  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>
        <strong>Type:</strong>
        {type}
      </p>
      <p>
        <strong>Status:</strong> <span style={styles.statusText}>{status}</span>
      </p>
      <button style={styles.deleteButton} onClick={() => onDelete(id)}>
        Delete
      </button>

      <button style={styles.toggleButton} onClick={() => onToggleStatus(id)}>
        Toggle
      </button>
    </div>
  );
}

export default TaskItem;
