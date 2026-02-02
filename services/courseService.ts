import api from '@/lib/axios';
import { ApiResponse, Course, CourseFormData, CourseFilters, PaginationInfo } from '@/types';

interface CoursesResponse {
  courses: Course[];
  pagination: PaginationInfo;
}

// Get all courses with filters
export async function getCourses(filters?: CourseFilters): Promise<CoursesResponse> {
  const params = new URLSearchParams();
  
  if (filters?.search) params.append('search', filters.search);
  if (filters?.level) params.append('level', filters.level);
  if (filters?.status) params.append('status', filters.status);
  if (filters?.category) params.append('category', filters.category);
  if (filters?.page) params.append('page', filters.page.toString());
  if (filters?.limit) params.append('limit', filters.limit.toString());
  if (filters?.sortBy) params.append('sortBy', filters.sortBy);
  if (filters?.sortOrder) params.append('sortOrder', filters.sortOrder);

  const response = await api.get<ApiResponse<Course[]>>(`/courses?${params.toString()}`);
  
  return {
    courses: response.data.data || [],
    pagination: response.data.pagination || {
      page: 1,
      limit: 10,
      total: 0,
      totalPages: 0,
      hasMore: false,
    },
  };
}

// Get single course by ID
export async function getCourseById(id: string): Promise<Course> {
  const response = await api.get<ApiResponse<Course>>(`/courses/${id}`);
  if (!response.data.data) {
    throw new Error('Course not found');
  }
  return response.data.data;
}

// Create new course
export async function createCourse(data: Partial<CourseFormData>): Promise<Course> {
  const response = await api.post<ApiResponse<Course>>('/courses', data);
  if (!response.data.data) {
    throw new Error('Failed to create course');
  }
  return response.data.data;
}

// Update course
export async function updateCourse(id: string, data: Partial<CourseFormData>): Promise<Course> {
  const response = await api.put<ApiResponse<Course>>(`/courses/${id}`, data);
  if (!response.data.data) {
    throw new Error('Failed to update course');
  }
  return response.data.data;
}

// Delete course
export async function deleteCourse(id: string): Promise<void> {
  await api.delete(`/courses/${id}`);
}

// Get dashboard stats
export async function getDashboardStats(): Promise<{
  totalCourses: number;
  totalStudents: number;
  activeCourses: number;
  totalRevenue: number;
}> {
  const response = await api.get<ApiResponse<Course[]>>('/courses?limit=1000');
  const courses = response.data.data || [];
  
  return {
    totalCourses: courses.length,
    totalStudents: courses.reduce((sum, course) => sum + (course.students || 0), 0),
    activeCourses: courses.filter(c => c.status === 'Active').length,
    totalRevenue: courses.reduce((sum, course) => sum + (course.price || 0) * (course.students || 0), 0),
  };
}
