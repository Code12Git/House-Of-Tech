import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add auth token to requests
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get token from localStorage (client-side only)
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const message = (error.response?.data as { message?: string })?.message || 
                    error.message || 
                    'An unexpected error occurred';

    // Handle specific error codes
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
      }
    }

    if (error.response?.status === 403) {
      console.error('Access denied:', message);
    }

    if (error.response?.status === 500) {
      console.error('Server error:', message);
    }

    return Promise.reject({
      message,
      status: error.response?.status,
      data: error.response?.data,
    });
  }
);

export default api;
