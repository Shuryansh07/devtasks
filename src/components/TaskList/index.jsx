import React from "react";
import TaskItem from "../TaskItem";
import useStyledTheme from "../../hooks/useStyledTheme";

function TaskList({ tasks, onDelete, onToggleStatus, onUpdate }) {
  const { styles, darkMode } = useStyledTheme();

  if (tasks.length === 0) {
    return (
      <div style={styles.emptyState(darkMode)}>
        No tasks match your filters or search.
      </div>
    );
  }

  return (
    <div style={styles.gridContainer(darkMode)}>
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
    </div>
  );
}

export default TaskList;
