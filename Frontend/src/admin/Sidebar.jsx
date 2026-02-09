import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-[#c20a16] text-white flex flex-col">
      <h2 className="text-2xl font-bold p-6 border-b border-red-400">
        Admin Panel
      </h2>

      <button
        onClick={() => setActiveTab("students")}
        className={`p-4 text-left hover:bg-red-700 ${
          activeTab === "students" ? "bg-red-800" : ""
        }`}
      >
        Students
      </button>
    </div>
  );
};

export default Sidebar;
