import React, { useState } from "react";
import * as styles from "../styles/styles";

function TaskItem({
  id,
  title,
  type,
  status,
  onDelete,
  onToggleStatus,
  onUpdate,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedType, setEditedType] = useState(type);
  const [editedStatus, setEditedStatus] = useState(status);

  // 👇 Dynamic left border based on type
  const cardStyle = {
    ...styles.card,
    borderLeft:
      type === "Bug"
        ? "5px solid red"
        : type === "Feature"
        ? "5px solid green"
        : "5px solid blue",
  };

  const handleSave = () => {
    onUpdate(id, {
      title: editedTitle,
      type: editedType,
      status: editedStatus,
    });
    setIsEditing(false);
  };

  return (
    <div style={cardStyle}>
      {isEditing ? (
        <>
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            style={styles.inputFullWidth}
          />
          <div style={styles.editRow}>
            <select
              value={editedType}
              onChange={(e) => setEditedType(e.target.value)}
              style={styles.select}
            >
              <option value="Bug">Bug</option>
              <option value="Feature">Feature</option>
              <option value="Learning">Learning</option>
            </select>

            <select
              value={editedStatus}
              onChange={(e) => setEditedStatus(e.target.value)}
              style={styles.select}
            >
              <option value="Complete">Complete</option>
              <option value="Incomplete">Incomplete</option>
            </select>
          </div>
          <button onClick={handleSave} style={styles.button}>
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            style={{
              ...styles.button,
              backgroundColor: "#6c757d",
              marginLeft: "8px",
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <p>
            <strong>Type:</strong> {type}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span style={{ color: status === "Complete" ? "green" : "red" }}>
              {status}
            </span>
          </p>

          <button style={styles.deleteButton} onClick={() => onDelete(id)}>
            Delete
          </button>
          <button
            style={styles.toggleButton}
            onClick={() => onToggleStatus(id)}
          >
            {status === "Complete" ? "Mark Incomplete" : "Mark Complete"}
          </button>
          <button style={styles.editButton} onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default TaskItem;
