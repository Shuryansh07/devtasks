import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "absolute",
        top: "16px",
        right: "16px",
        background: "transparent",
        border: "none",
        fontSize: "20px",
        cursor: "pointer",
        color: darkMode ? "#fff" : "#333",
      }}
      title={darkMode ? "Light Mode" : "Dark Mode"}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;
