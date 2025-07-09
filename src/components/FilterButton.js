import React from "react";

function FilterButton({ label, isActive, onClick }) {
  const activeStyle = {
    marginRight: "10px",
    padding: "6px 12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const defaultStyle = {
    marginRight: "10px",
    padding: "6px 12px",
    backgroundColor: "#ccc",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <button onClick={onClick} style={isActive ? activeStyle : defaultStyle}>
      {label}
    </button>
  );
}

export default FilterButton;
