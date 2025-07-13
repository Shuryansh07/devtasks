import React from "react";
import TaskItem from "../TaskItem";
import * as styles from "../styles/styles";

function TaskList({ tasks, onDelete, onToggleStatus, onUpdate }) {
  if (tasks.length === 0) {
    return (
      <div style={styles.emptyState}>
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
          onToggleStatus={onToggleStatus}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
}

export default TaskList;
