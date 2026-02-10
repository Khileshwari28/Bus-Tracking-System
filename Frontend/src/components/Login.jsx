import React, { useState } from "react";
import api from "../api"; 
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await api.post(
      "/api/auth/login",
      null,
      { params: { enrollmentNumber, password } }
    );

    // ✅ Normalize backend response
    const msg =
      typeof response.data === "string"
        ? response.data
        : response.data?.message;

    if (msg === "Login Successful") {
      localStorage.setItem("token", "student-auth");
      navigate("/search");
    } else {
      setMessageType("error");
      setMessage(msg || "Login failed");
    }
  } catch (error) {
    setMessageType("error");

    if (error.response) {
      setMessage(error.response.data || "Invalid credentials");
    } else if (error.request) {
      setMessage("No response from server");
    } else {
      setMessage("Unexpected error occurred");
    }
  }
};

  return (
    <div className="flex flex-col text-red-700">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">--Login--</h2>

        <div className="mb-4">
          <label className="block text-md font-medium mb-1 text-left">
            Enrollment No.
          </label>
          <input
            type="text"
            value={enrollmentNumber}
            onChange={(e) => setEnrollmentNumber(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Enrollment No."
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
          className="w-full bg-red-900 text-white py-2 rounded-md hover:bg-red-600 transition"
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

export default Login;
