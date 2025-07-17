import React from "react";
import useStyledTheme from "../../hooks/useStyledTheme";

function FilterButton({ label, isActive, onClick }) {
  const { darkMode, styles } = useStyledTheme();

  const buttonStyle = isActive
    ? styles.activeButton(darkMode)
    : styles.inactiveButton(darkMode);

  return (
    <button onClick={onClick} style={buttonStyle}>
      {label}
    </button>
  );
}

export default FilterButton;
