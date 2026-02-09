import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Students from "./Students";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("students");

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 p-6 overflow-auto">
        {activeTab === "students" && <Students />}
      </div>
    </div>
  );
};

export default AdminDashboard;
