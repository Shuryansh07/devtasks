import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          color: "gray",
          fontStyle: "italic",
        }}
      >
        No tasks match your filters or search.
      </div>
    );
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          type={task.type}
          status={task.status}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}

export default TaskList;
