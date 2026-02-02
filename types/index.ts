// Standard API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  pagination?: PaginationInfo;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasMore: boolean;
}

// Course Types
export interface Course {
  _id: string;
  title: string;
  instructor: string;
  description?: string;
  duration: number;
  price: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'Active' | 'Draft' | 'Archived';
  students: number;
  enrolledStudents?: string[];
  thumbnail?: string;
  category?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CourseFormData {
  _id?: string;
  id?: number;
  title: string;
  instructor: string;
  description?: string;
  duration?: number;
  price: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'Active' | 'Draft' | 'Archived';
  students?: number;
  thumbnail?: string;
  category?: string;
  lastUpdated?: string;
}

export interface CourseFilters {
  search?: string;
  level?: string;
  status?: string;
  category?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// User Types
export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'Student' | 'Instructor' | 'Admin';
  enrolledCourses?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface AuthUser {
  _id: string;
  name: string;
  email: string;
  role: 'Student' | 'Instructor' | 'Admin';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role?: 'Student' | 'Instructor';
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
}

// Dashboard Stats
export interface DashboardStats {
  totalCourses: number;
  totalStudents: number;
  activeCourses: number;
  totalRevenue: number;
  recentActivity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  type: 'enrollment' | 'course_created' | 'course_updated';
  message: string;
  timestamp: string;
}
