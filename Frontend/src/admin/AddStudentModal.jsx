import React, { useState } from "react";
import axios from "axios";

const AddStudentModal = ({ onClose, onAdded }) => {
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleAdd = async () => {
    await axios.post("http://localhost:8080/api/admin/students", {
      enrollmentNumber,
      password,
    });
    onAdded();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-slate-50 p-6 rounded-lg w-full max-w-md shadow-xl">
        <h2 className="text-xl font-semibold text-slate-800 mb-5">
          Add Student
        </h2>

        <label className="block text-sm font-medium text-slate-700 mb-1">
          Enrollment Number
        </label>
        <input
          className="w-full border border-slate-300 rounded px-3 py-2 mb-4
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 text-stone-700"
          placeholder="e.g. LNCCBTC11077"
          value={enrollmentNumber}
          onChange={(e) => setEnrollmentNumber(e.target.value)}
        />

        <label className="block text-sm font-medium text-slate-700 mb-1">
          Password
        </label>
        <input
          className="w-full border border-slate-300 rounded px-3 py-2 mb-6
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 text-stone-700"
          placeholder="Set password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded text-slate-700
                       hover:bg-slate-200 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleAdd}
            className="bg-indigo-600 text-white px-4 py-2 rounded
                       hover:bg-indigo-700 transition"
          >
            Add Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudentModal;
