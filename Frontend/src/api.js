import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

/* ---------- Request Interceptor ---------- */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // Do NOT attach token to login requests
    if (
      token &&
      !config.url.includes("/login")
    ) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
