import React, { useEffect, useState } from "react";
import axios from "axios";
import AddStudentModal from "./AddStudentModal";

const Students = () => {
    const [students, setStudents] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
    const [passwords, setPasswords] = useState({});
    const [confirmType, setConfirmType] = useState(null); // "delete" | "update"
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [passwordError, setPasswordError] = useState("");



    const fetchStudents = async () => {
        const res = await axios.get("http://localhost:8080/api/admin/students");
        setStudents(res.data);
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    const toggleStatus = async (id) => {
        await axios.put(`http://localhost:8080/api/admin/students/${id}/toggle`);
        fetchStudents();
    };

    const confirmDelete = (student) => {
        setSelectedStudent(student);
        setConfirmType("delete");
    };

    useEffect(() => {
  if (!passwordError) return;

  const timer = setTimeout(() => {
    setPasswordError("");
  }, 2000);

  return () => clearTimeout(timer);
}, [passwordError]);


    const confirmUpdate = (student) => {
        if (!passwords[student.id] || passwords[student.id].trim() === "") {
            setPasswordError("Please enter a new password before updating.");
            return;
        }

        setPasswordError("");
        setSelectedStudent(student);
        setConfirmType("update");
    };


    const handleConfirmAction = async () => {
        if (!selectedStudent) return;

        if (confirmType === "delete") {
            await axios.delete(
                `http://localhost:8080/api/admin/students/${selectedStudent.id}`
            );
        }

        if (confirmType === "update") {
            await axios.put(
                `http://localhost:8080/api/admin/students/${selectedStudent.id}/password`,
                null,
                { params: { password: passwords[selectedStudent.id] } }
            );
        }

        setConfirmType(null);
        setSelectedStudent(null);
        setPasswords({});
        fetchStudents();
    };



    return (
        <>
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">
                        Student Management
                    </h1>
                    <p className="text-slate-500 text-sm">
                        Manage all the students.
                    </p>
                </div>

                <button
                    onClick={() => setShowAdd(true)}
                    className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg
                     shadow hover:bg-indigo-700 transition"
                >
                    + Add Student
                </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-x-auto">

                {passwordError && (
                    <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 p-3 rounded">
                        {passwordError}
                    </div>
                )}

                <table className="w-full text-sm">
                    <thead className="bg-slate-100 text-slate-700">
                        <tr>
                            <th className="p-4 text-center">#</th>
                            <th className="p-4 text-left">Enrollment No.</th>
                            <th className="p-4 text-left">Password</th>
                            <th className="p-4 text-center">Change Password</th>
                            <th className="p-4 text-center">Status (Click to Enable/Disable)</th>
                            <th className="p-4 text-center">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {students.map((s, index) => (
                            <tr
                                key={s.id}
                                className="border-t hover:bg-slate-50 transition"
                            >
                                {/* Frontend-only ID */}
                                <td className="p-4 text-center text-slate-500 font-medium">
                                    {index + 1}
                                </td>

                                {/* Enrollment */}
                                <td className="p-4 font-medium text-slate-800">
                                    {s.enrollmentNumber}
                                </td>

                                {/* Password */}
                                <td className="p-4 font-mono text-slate-700">
                                    {s.password}
                                </td>

                                {/* Change Password */}
                                <td className="  rounded p-4 text-center space-x-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-stone-700">
                                    <input
                                        type="text"
                                        placeholder="New password"
                                        value={passwords[s.id] || ""}
                                        onChange={(e) => {
                                            setPasswords({
                                                ...passwords,
                                                [s.id]: e.target.value,
                                            });
                                            setPasswordError("");
                                        }}
                                        className="border px-2 py-1 rounded w-32"
                                    />


                                    <button
                                        onClick={() => confirmUpdate(s)}
                                        className="bg-indigo-600 text-white px-3 py-1 rounded"
                                    >
                                        Update
                                    </button>
                                </td>

                                {/* Combined Status + Toggle */}
                                <td className="p-4 text-center">
                                    <button
                                        onClick={() => toggleStatus(s.id)}
                                        className={`px-5 py-2 rounded-full text-xs font-bold
                      transition shadow
                      ${s.enabled
                                                ? "bg-green-500 text-white hover:bg-green-600"
                                                : "bg-red-500 text-white hover:bg-red-600"
                                            }`}
                                        title="Click to toggle status"
                                    >
                                        {s.enabled ? "ENABLED" : "DISABLED"}
                                    </button>
                                </td>

                                {/* Delete */}
                                <td className="p-4 text-center">
                                    <button
                                        onClick={() => confirmDelete(s)}
                                        className="px-4 py-2 rounded-md border
                               border-red-500 text-red-600
                               hover:bg-red-50 transition"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {students.length === 0 && (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="p-6 text-center text-slate-500"
                                >
                                    No students found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {showAdd && (
                <AddStudentModal
                    onClose={() => setShowAdd(false)}
                    onAdded={fetchStudents}
                />
            )}

            {confirmType && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-sm shadow-xl">
                        <h2 className="text-lg font-semibold text-slate-800 mb-3">
                            Confirm Action
                        </h2>

                        <p className="text-slate-600 mb-6">
                            {confirmType === "delete"
                                ? "Are you sure you want to delete this student?"
                                : "Are you sure you want to update the password?"}
                        </p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => {
                                    setConfirmType(null);
                                    setSelectedStudent(null);
                                }}
                                className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600  text-white transition"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleConfirmAction}
                                className={`px-4 py-2 rounded text-white ${confirmType === "delete"
                                        ? "bg-red-600 hover:bg-red-800"
                                        : "bg-indigo-600 hover:bg-indigo-700"
                                    }`}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default Students;
