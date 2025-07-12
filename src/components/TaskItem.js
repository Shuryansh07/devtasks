import React, { useState } from "react";

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

  const cardStyle = {
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
  };

  const deleteBtnStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    backgroundColor: "#e74c3c",
    color: "white",
    cursor: "pointer",
    padding: "4px 8px",
    borderRadius: "4px",
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
            style={{ marginBottom: "6px", width: "100%" }}
          />
          <div style={{ display: "flex", gap: "10px", marginBottom: "6px" }}>
            <select
              value={editedType}
              onChange={(e) => setEditedType(e.target.value)}
            >
              <option value="Bug">Bug</option>
              <option value="Feature">Feature</option>
              <option value="Learning">Learning</option>
            </select>

            <select
              value={editedStatus}
              onChange={(e) => setEditedStatus(e.target.value)}
            >
              <option value="Complete">Complete</option>
              <option value="Incomplete">Incomplete</option>
            </select>
          </div>
          <button onClick={handleSave}>Save</button>
          <button
            onClick={() => setIsEditing(false)}
            style={{ marginLeft: "8px" }}
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

          <button style={deleteBtnStyle} onClick={() => onDelete(id)}>
            Delete
          </button>
          <button
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "4px 8px",
              cursor: "pointer",
            }}
            onClick={() => onToggleStatus(id)}
          >
            {status === "Complete" ? "Mark Incomplete" : "Mark Complete"}
          </button>
          <button
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              backgroundColor: "#f39c12",
              color: "white",
              border: "none",
              padding: "4px 8px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
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
