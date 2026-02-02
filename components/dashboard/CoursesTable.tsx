'use client';

import { Edit2, Trash2, MoreVertical, Users, BookOpen } from 'lucide-react';
import { CourseFormData } from '@/types/course';

interface CoursesTableProps {
  courses: CourseFormData[];
  onEdit: (course: CourseFormData) => void;
  onDelete: (id: string) => void;
  isLoading?: boolean;
}

export default function CoursesTable({
  courses,
  onEdit,
  onDelete,
  isLoading = false,
}: CoursesTableProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Draft':
        return 'bg-gray-200 text-gray-800';
      case 'Archived':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    if (dateString === 'Just now') return dateString;
    
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffInMs = now.getTime() - date.getTime();
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      
      if (diffInDays === 0) return 'Today';
      if (diffInDays === 1) return 'Yesterday';
      if (diffInDays < 7) return `${diffInDays} days ago`;
      if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
      
      return date.toLocaleDateString();
    } catch {
      return dateString;
    }
  };

  if (isLoading) {
    return (
      <div className="p-12 text-center">
        <div className="animate-spin h-8 w-8 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-4" />
        <p className="text-gray-500">Loading courses...</p>
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="px-6 py-12 text-center">
        <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-sm">
          No courses found. Click &quot;Add Course&quot; to create one.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Course Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Instructor
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Students
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Level
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Last Updated
            </th>
            <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {courses.map((course) => (
            <tr key={course._id || course.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <div>
                  <p className="font-medium text-gray-900 truncate max-w-xs">{course.title}</p>
                  {course.category && (
                    <p className="text-xs text-gray-500">{course.category}</p>
                  )}
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{course.instructor}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-1 text-sm text-gray-700">
                  <Users className="h-4 w-4 text-gray-400" />
                  {course.students || 0}
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                  {course.level}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                  {course.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                ${course.price?.toFixed(2) || '0.00'}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {formatDate(course.updatedAt || course.lastUpdated)}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => onEdit(course)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onDelete(course._id || String(course.id))}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
