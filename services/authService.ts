import api from '@/lib/axios';
import { ApiResponse, AuthResponse, LoginCredentials, RegisterData, AuthUser } from '@/types';

// Register new user
export async function register(data: RegisterData): Promise<AuthResponse> {
  const response = await api.post<ApiResponse<AuthResponse>>('/auth/register', data);
  
  if (!response.data.success || !response.data.data) {
    throw new Error(response.data.error || 'Registration failed');
  }

  // Store token and user
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', response.data.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.data.user));
  }

  return response.data.data;
}

// Login user
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
  const response = await api.post<ApiResponse<AuthResponse>>('/auth/login', credentials);
  
  if (!response.data.success || !response.data.data) {
    throw new Error(response.data.error || 'Login failed');
  }

  // Store token and user
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', response.data.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.data.user));
  }

  return response.data.data;
}

// Get current user
export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    const response = await api.get<ApiResponse<AuthUser>>('/auth/me');
    return response.data.data || null;
  } catch {
    return null;
  }
}

// Logout user
export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
}

// Get stored user
export function getStoredUser(): AuthUser | null {
  if (typeof window === 'undefined') return null;
  
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem('token');
}
