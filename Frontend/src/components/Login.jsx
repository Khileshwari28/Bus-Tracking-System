import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
         username,
        password,
      });

      if (response.data.message === "Login Successful") {
        setMessageType('success');
        setMessage("Login Successful");
        navigate("/search"); // change this path to your desired page
      } else {
        setMessageType('error');
        setMessage(response.data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setMessageType('error');
      if (error.response) {
        // Server responded with a status other than 2xx
        setMessage(error.response.data.message || "Login failed. Please try again.");
      } else if (error.request) {
        // Request was made but no response received
        setMessage("No response from server. Please check your network connection.");
      } else {
        // Something happened in setting up the request
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
        <h2 className="text-3xl font-bold mb-6 text-center">--Login--</h2>

        <div className="mb-4">
          <label className="block text-md font-medium mb-1 text-left">
            Enrollment No.
          </label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          className="w-full bg-red-900 text-white py-2 rounded-md cursor-pointer hover:bg-red-600 transition"
        >
          Log In
        </button>

        {message && (
          <p className={`mt-4 text-center font-semibold text-lg ${messageType === 'success' ? 'text-green-600' : 'text-red-700'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
