import axios from "axios";

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Helper to get the API URL based on environment
const getApiUrl = (endpoint) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  return `${baseUrl}${endpoint}`;
};

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add auth token here if needed
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      switch (error.response.status) {
        case 401:
          // Handle unauthorized
          // You might want to redirect to login or refresh token
          break;
        case 403:
          // Handle forbidden
          break;
        case 404:
          // Handle not found
          break;
        case 500:
          // Handle server error
          break;
        default:
          // Handle other errors
          break;
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error("No response received:", error.request);
    } else {
      // Error in request configuration
      console.error("Error in request:", error.message);
    }
    return Promise.reject(error);
  }
);

// API utility functions
export const api = {
  get: (endpoint, config = {}) =>
    axiosInstance.get(getApiUrl(endpoint), config),
  post: (endpoint, data = {}, config = {}) =>
    axiosInstance.post(getApiUrl(endpoint), data, config),
  put: (endpoint, data = {}, config = {}) =>
    axiosInstance.put(getApiUrl(endpoint), data, config),
  delete: (endpoint, config = {}) =>
    axiosInstance.delete(getApiUrl(endpoint), config),
  patch: (endpoint, data = {}, config = {}) =>
    axiosInstance.patch(getApiUrl(endpoint), data, config),
};

export default axiosInstance;
