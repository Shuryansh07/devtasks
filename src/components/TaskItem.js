import React from "react";

function TaskItem(props) {
  return (
    <div style={styles.card}>
      <h3>{props.title}</h3>
      <p>Type: {props.type}</p>
      <p>Status: {props.status}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "12px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
};

export default TaskItem;
