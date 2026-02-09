import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/admin/login",
        null,
        {
          params: {
            adminId,
            password,
          },
        }
      );

      if (response.data === "Admin Login Successful") {
        setMessageType("success");
        setMessage("Admin Login Successful");
        navigate("/admin-dashboard"); // change if needed
      } else {
        setMessageType("error");
        setMessage(response.data || "Login failed. Please try again.");
      }
    } catch (error) {
      setMessageType("error");

      if (error.response) {
        setMessage(error.response.data || "Invalid Admin ID or Password");
      } else if (error.request) {
        setMessage("No response from server. Please check your connection.");
      } else {
        setMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col text-red-700">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          --Admin Login--
        </h2>

        <div className="mb-4">
          <label className="block text-md font-medium mb-1 text-left">
            Admin ID
          </label>
          <input
            type="text"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Admin ID"
          />
        </div>

        <div className="mb-6">
          <label className="block text-md font-medium mb-1 text-left">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-900 text-white py-2 rounded-md cursor-pointer hover:bg-red-600 transition"
        >
          Log In
        </button>

        {message && (
          <p
            className={`mt-4 text-center font-semibold text-lg ${
              messageType === "success"
                ? "text-green-600"
                : "text-red-700"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default AdminLogin;
