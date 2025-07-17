export const card = (type, darkMode) => ({
  fontSize: "15px",
  border: "1px solid",
  paddingTop: "20px",
  paddingBottom: "20px",
  paddingLeft: "24px",
  paddingRight: "24px",
  marginBottom: "16px",
  position: "relative",
  borderRadius: "10px",
  boxShadow: darkMode
    ? "0 2px 10px rgba(255, 255, 255, 0.05)"
    : "0 2px 8px rgba(0, 0, 0, 0.05)",
  backgroundColor: darkMode ? "#1e1e1e" : "#fff",
  color: darkMode ? "#e0e0e0" : "#000",
  borderLeft: `5px solid ${
    type === "Bug" ? "#e74c3c" : type === "Feature" ? "#27ae60" : "#3498db"
  }`,
  transition: "all 0.3s ease",
});

export const cardHover = (type, darkMode) => ({
  ...card(type, darkMode),
  transform: "translateY(-2px)",
  boxShadow: darkMode
    ? "0 6px 16px rgba(255, 255, 255, 0.1)"
    : "0 6px 16px rgba(0, 0, 0, 0.1)",
});

export const container = (darkMode) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: darkMode ? "#121212" : "#f9f9f9",
  color: darkMode ? "#fff" : "#000",
  minHeight: "100vh",
});

export const gridContainer = (darkMode) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "16px",
});

export const input = (darkMode) => ({
  flex: "1 1 200px",
  padding: "10px",
  border: `1px solid ${darkMode ? "#444" : "#ccc"}`,
  backgroundColor: darkMode ? "#2a2a2a" : "#fff",
  color: darkMode ? "#f1f1f1" : "#000",
  borderRadius: "6px",
  fontSize: "14px",
});

export const inputFullWidth = (darkMode) => ({
  width: "100%",
  padding: "10px",
  marginBottom: "8px",
  border: `1px solid ${darkMode ? "#444" : "#ccc"}`,
  borderRadius: "6px",
  fontSize: "14px",
  backgroundColor: darkMode ? "#2a2a2a" : "#fff",
  color: darkMode ? "#f1f1f1" : "#000",
});

export const select = (darkMode) => ({
  flex: "1 1 120px",
  padding: "10px",
  border: `1px solid ${darkMode ? "#444" : "#ccc"}`,
  borderRadius: "6px",
  fontSize: "14px",
  backgroundColor: darkMode ? "#2a2a2a" : "#fff",
  color: darkMode ? "#f1f1f1" : "#000",
});

export const button = (darkMode) => ({
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "20px",
  paddingRight: "20px",
  backgroundColor: darkMode ? "#2d89ef" : "#007bff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "500",
});

export const deleteButton = (darkMode) => ({
  position: "absolute",
  top: "16px",
  right: "16px",
  backgroundColor: "#e74c3c",
  color: "white",
  border: "none",
  borderRadius: "6px",
  paddingTop: "6px",
  paddingBottom: "6px",
  paddingLeft: "12px",
  paddingRight: "12px",
  cursor: "pointer",
});

export const toggleButton = (darkMode) => ({
  position: "absolute",
  top: "16px",
  left: "16px",
  backgroundColor: "#3498db",
  color: "white",
  border: "none",
  borderRadius: "6px",
  paddingTop: "6px",
  paddingBottom: "6px",
  paddingLeft: "12px",
  paddingRight: "12px",
  cursor: "pointer",
});

export const editButton = (darkMode) => ({
  position: "absolute",
  bottom: "16px",
  right: "16px",
  backgroundColor: "#f39c12",
  color: "white",
  border: "none",
  paddingTop: "6px",
  paddingBottom: "6px",
  paddingLeft: "12px",
  paddingRight: "12px",
  borderRadius: "6px",
  cursor: "pointer",
});

export const filterButton = (darkMode) => ({
  marginRight: "10px",
  paddingTop: "8px",
  paddingBottom: "8px",
  paddingLeft: "16px",
  paddingRight: "16px",
  fontSize: "14px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  color: "#fff",
  backgroundColor: darkMode ? "#555" : "#ccc",
});

export const activeButton = (darkMode) => ({
  ...filterButton(darkMode),
  backgroundColor: "#007bff",
});

export const inactiveButton = (darkMode) => ({
  ...filterButton(darkMode),
  backgroundColor: "#999",
});

export const form = (darkMode) => ({
  display: "flex",
  gap: "12px",
  marginBottom: "24px",
  flexWrap: "wrap",
  alignItems: "center",
  backgroundColor: darkMode ? "#1e1e1e" : "#fff",
  borderRadius: "8px",
  padding: "12px",
});

export const editRow = (darkMode) => ({
  display: "flex",
  gap: "10px",
  marginBottom: "10px",
});

export const emptyState = (darkMode) => ({
  padding: "24px",
  textAlign: "center",
  color: darkMode ? "#aaa" : "#777",
  fontStyle: "italic",
  fontSize: "16px",
});

export const titleSpacing = (darkMode) => ({
  marginTop: "24px",
  marginBottom: "8px",
  color: darkMode ? "#fff" : "#000",
});
