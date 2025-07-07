import React from "react";

function FilterButton({ label, isActive, onClick }) {
  return (
    <button
      onCLick={onClick}
      style={{
        marginRight: "10px",
        padding: "6px 12px",
        backgroundColor: isActive ? "#007bff" : "#ccc",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer,",
      }}
    >
      {label}
    </button>
  );
}

export default FilterButton;
