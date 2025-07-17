import React, { useState } from "react";
import useStyledTheme from "../../hooks/useStyledTheme";

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
  const [hovered, setHovered] = useState(false);

  const { darkMode, styles } = useStyledTheme();

  const cardStyle = hovered
    ? styles.cardHover(type, darkMode)
    : styles.card(type, darkMode);

  const handleSave = () => {
    onUpdate(id, {
      title: editedTitle,
      type: editedType,
      status: editedStatus,
    });
    setIsEditing(false);
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isEditing ? (
        <>
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            style={styles.inputFullWidth(darkMode)}
          />

          <div style={styles.editRow}>
            <select
              value={editedType}
              onChange={(e) => setEditedType(e.target.value)}
              style={styles.select(darkMode)}
            >
              <option value="Bug">Bug</option>
              <option value="Feature">Feature</option>
              <option value="Learning">Learning</option>
            </select>

            <select
              value={editedStatus}
              onChange={(e) => setEditedStatus(e.target.value)}
              style={styles.select(darkMode)}
            >
              <option value="Complete">Complete</option>
              <option value="Incomplete">Incomplete</option>
            </select>
          </div>

          <button onClick={handleSave} style={styles.button(darkMode)}>
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            style={{
              ...styles.button(darkMode),
              backgroundColor: "#6c757d",
              marginLeft: "8px",
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h3 style={styles.titleSpacing(darkMode)}>{title}</h3>

          <p style={{ margin: "4px 0" }}>
            <strong>Type:</strong> {type}
          </p>

          <p style={{ margin: "4px 0" }}>
            <strong>Status:</strong>{" "}
            <span
              style={{ color: status === "Complete" ? "#28a745" : "#dc3545" }}
            >
              {status}
            </span>
          </p>

          <button
            style={styles.deleteButton(darkMode)}
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
          <button
            style={styles.toggleButton(darkMode)}
            onClick={() => onToggleStatus(id)}
          >
            {status === "Complete" ? "Mark Incomplete" : "Mark Complete"}
          </button>
          <button
            style={styles.editButton(darkMode)}
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default TaskItem;
