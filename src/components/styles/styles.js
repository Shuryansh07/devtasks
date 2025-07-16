// src/styles/styles.js

export const card = {
  fontSize: "15px",
  border: "1px solid #ddd",
  padding: "20px 24px",
  marginBottom: "16px",
  backgroundColor: "#fff",
  position: "relative",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
};

export const cardHover = {
  ...card,
  transition: "box-shadow 0.3s ease, transform 0.2s ease",
  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
  transform: "translateY(-2px)",
};

export const form = {
  display: "flex",
  gap: "12px",
  marginBottom: "24px",
  flexWrap: "wrap",
  alignItems: "center",
};

export const input = {
  flex: "1 1 200px",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "14px",
};

export const inputFullWidth = {
  width: "100%",
  padding: "10px",
  marginBottom: "8px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "14px",
};

export const select = {
  flex: "1 1 120px",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  fontSize: "14px",
};

export const button = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "500",
};

export const deleteButton = {
  position: "absolute",
  top: "16px", // ↑ Increased from 12px
  right: "16px", // ↑ Increased from 12px
  backgroundColor: "#e74c3c",
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "6px 12px",
  cursor: "pointer",
};

export const toggleButton = {
  position: "absolute",
  top: "16px", // ↑ Increased from 12px
  left: "16px", // ↑ Increased from 12px
  backgroundColor: "#3498db",
  color: "white",
  border: "none",
  borderRadius: "6px",
  padding: "6px 12px",
  cursor: "pointer",
};

export const editButton = {
  position: "absolute",
  bottom: "16px", // ↑ Increased from 12px
  right: "16px", // ↑ Increased from 12px
  backgroundColor: "#f39c12",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "6px",
  cursor: "pointer",
};

export const filterButton = {
  marginRight: "10px",
  padding: "8px 16px",
  fontSize: "14px",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export const activeButton = {
  ...filterButton,
  backgroundColor: "#007bff",
};

export const inactiveButton = {
  ...filterButton,
  backgroundColor: "#ccc",
};

export const editRow = {
  display: "flex",
  gap: "10px",
  marginBottom: "10px",
};

export const emptyState = {
  padding: "24px",
  textAlign: "center",
  color: "#777",
  fontStyle: "italic",
  fontSize: "16px",
};
export const titleSpacing = {
  marginTop: "24px",
  marginBottom: "8px",
};
export const container = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "16px",
};
export const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "16px",
};
