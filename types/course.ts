export interface CourseFormData {
  _id?: string;
  id?: number;
  title: string;
  instructor: string;
  students?: number;
  duration?: number;
  status: 'Draft' | 'Active' | 'Archived';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description?: string;
  price: number;
  category?: string;
  thumbnail?: string;
  lastUpdated?: string;
  createdAt?: string;
  updatedAt?: string;
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