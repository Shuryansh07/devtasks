import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import useStyledTheme from "../../hooks/useStyledTheme";

ChartJS.register(ArcElement, Tooltip, Legend);

function StatsPanel({ tasks }) {
  const { darkMode } = useStyledTheme();

  const total = tasks.length;
  const complete = tasks.filter((t) => t.status === "Complete").length;
  const incomplete = total - complete;

  const typeCount = tasks.reduce((acc, task) => {
    acc[task.type] = (acc[task.type] || 0) + 1;
    return acc;
  }, {});

  const panelStyle = {
    padding: "24px",
    backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
    borderRadius: "10px",
    boxShadow: darkMode
      ? "0 2px 10px rgba(255, 255, 255, 0.05)"
      : "0 2px 10px rgba(0, 0, 0, 0.08)",
    marginBottom: "32px",
    color: darkMode ? "#f0f0f0" : "#111",
  };

  const badgeStyle = {
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "16px",
    paddingRight: "16px",
    borderRadius: "30px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#fff",
    minWidth: "120px",
    textAlign: "center",
  };

  return (
    <div style={panelStyle}>
      {/* Header */}
      <h3
        style={{
          fontSize: "22px",
          marginBottom: "20px",
          textAlign: "center",
          color: darkMode ? "#f1f1f1" : "#222",
        }}
      >
        📊 Task Summary
      </h3>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div>
          <strong>Total:</strong> {total}
        </div>
        <div style={{ ...badgeStyle, backgroundColor: "#28a745" }}>
          ✅ Complete: {complete}
        </div>
        <div style={{ ...badgeStyle, backgroundColor: "#dc3545" }}>
          ❌ Incomplete: {incomplete}
        </div>
        <div style={{ ...badgeStyle, backgroundColor: "#ff6b6b" }}>
          🐞 Bugs: {typeCount["Bug"] || 0}
        </div>
        <div
          style={{ ...badgeStyle, backgroundColor: "#ffe066", color: "#000" }}
        >
          🌟 Features: {typeCount["Feature"] || 0}
        </div>
        <div style={{ ...badgeStyle, backgroundColor: "#17a2b8" }}>
          📘 Learning: {typeCount["Learning"] || 0}
        </div>
      </div>

      {/* Pie Chart */}
      <div
        style={{
          maxWidth: "360px",
          margin: "0 auto",
          paddingTop: "10px",
        }}
      >
        <Pie
          data={{
            labels: ["Bug", "Feature", "Learning"],
            datasets: [
              {
                label: "# of Tasks",
                data: [
                  typeCount["Bug"] || 0,
                  typeCount["Feature"] || 0,
                  typeCount["Learning"] || 0,
                ],
                backgroundColor: ["#ff6b6b", "#ffe066", "#4dabf7"],
                borderColor: ["#c82333", "#e0a800", "#117a8b"],
                borderWidth: 1.5,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  color: darkMode ? "#ccc" : "#333", // 💡 dark mode text
                },
              },
            },
            maintainAspectRatio: false,
          }}
          style={{ height: "240px" }}
        />
      </div>
    </div>
  );
}

export default StatsPanel;
