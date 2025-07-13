// src/styles/styles.js

// 🧩 Shared Button Base
const baseButton = {
  padding: "6px 12px",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

// 🗂️ Card layout (used in TaskItem)
export const card = {
  border: "1px solid #ddd",
  padding: "10px",
  marginBottom: "10px",
  backgroundColor: "#f9f9f9",
  position: "relative",
};

// 🧾 Form styles (used in AddTask)
export const form = {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
  flexWrap: "wrap",
};

export const input = {
  flex: 2,
  padding: "8px",
};

export const select = {
  flex: 1,
  padding: "8px",
};

// ✅ Buttons
export const button = {
  ...baseButton,
  padding: "8px 16px",
  backgroundColor: "#007bff",
};

export const deleteButton = {
  ...baseButton,
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "#e74c3c",
  padding: "4px 8px",
};

export const toggleButton = {
  ...baseButton,
  position: "absolute",
  top: "10px",
  left: "10px",
  backgroundColor: "#3498db",
  padding: "4px 8px",
};

export const editButton = {
  ...baseButton,
  position: "absolute",
  bottom: "10px",
  right: "10px",
  backgroundColor: "#f39c12",
  padding: "4px 8px",
};

// 🟢 Filter Buttons
export const filterButton = {
  ...baseButton,
  marginRight: "10px",
};

export const activeButton = {
  ...filterButton,
  backgroundColor: "#007bff",
};

export const inactiveButton = {
  ...filterButton,
  backgroundColor: "#ccc",
};

// 📋 Edit mode input and row
export const inputFullWidth = {
  marginBottom: "6px",
  width: "100%",
};

export const editRow = {
  display: "flex",
  gap: "10px",
  marginBottom: "6px",
};
export const emptyState = {
  padding: "20px",
  textAlign: "center",
  color: "gray",
  fontStyle: "italic",
};
