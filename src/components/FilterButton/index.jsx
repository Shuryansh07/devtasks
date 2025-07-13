import React from "react";
import * as styles from "../styles/styles";

function FilterButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      style={isActive ? styles.activeButton : styles.inactiveButton}
    >
      {label}
    </button>
  );
}

export default FilterButton;
