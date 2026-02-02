'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { CourseFormData } from '@/types/course';

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  editingCourse: CourseFormData | null;
  onSubmit: (data: Partial<CourseFormData>) => void;
  isLoading?: boolean;
}

const initialFormData: Partial<CourseFormData> = {
  title: '',
  instructor: '',
  description: '',
  duration: 0,
  price: 0,
  level: 'Beginner',
  status: 'Draft',
  thumbnail: '',
  category: '',
};

export default function CourseModal({
  isOpen,
  onClose,
  editingCourse,
  onSubmit,
  isLoading = false,
}: CourseModalProps) {
  const [formData, setFormData] = useState<Partial<CourseFormData>>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (editingCourse) {
      setFormData({
        title: editingCourse.title,
        instructor: editingCourse.instructor,
        description: editingCourse.description || '',
        duration: editingCourse.duration || 0,
        price: editingCourse.price || 0,
        level: editingCourse.level || 'Beginner',
        status: editingCourse.status || 'Draft',
        thumbnail: editingCourse.thumbnail || '',
        category: editingCourse.category || '',
      });
    } else {
      setFormData(initialFormData);
    }
    setErrors({});
  }, [editingCourse, isOpen]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title?.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.length > 200) {
      newErrors.title = 'Title cannot exceed 200 characters';
    }

    if (!formData.instructor?.trim()) {
      newErrors.instructor = 'Instructor is required';
    }

    if (formData.description && formData.description.length > 2000) {
      newErrors.description = 'Description cannot exceed 2000 characters';
    }

    if (formData.price !== undefined && formData.price < 0) {
      newErrors.price = 'Price cannot be negative';
    }

    if (formData.duration !== undefined && formData.duration < 0) {
      newErrors.duration = 'Duration cannot be negative';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleClose = () => {
    setFormData(initialFormData);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Modal Header */}
        <div className="sticky top-0 px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-white z-10">
          <h3 className="text-xl font-bold text-gray-900">
            {editingCourse ? 'Edit Course' : 'Add New Course'}
          </h3>
          <button
            onClick={handleClose}
            disabled={isLoading}
            className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Course Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Advanced React Development"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className={`w-full px-4 py-2.5 bg-white border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-400 ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
              </div>

              {/* Instructor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instructor Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g., John Doe"
                  value={formData.instructor}
                  onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                  className={`w-full px-4 py-2.5 bg-white border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-400 ${
                    errors.instructor ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.instructor && <p className="text-red-500 text-xs mt-1">{errors.instructor}</p>}
              </div>

              {/* Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Level *
                </label>
                <select
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: e.target.value as CourseFormData['level'] })}
                  className="w-full px-4 py-2.5 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status *
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as CourseFormData['status'] })}
                  className="w-full px-4 py-2.5 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                >
                  <option value="Draft">Draft</option>
                  <option value="Active">Active</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                >
                  <option value="">Select a category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Design">Design</option>
                </select>
              </div>

              {/* Thumbnail URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Thumbnail URL
                </label>
                <input
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  value={formData.thumbnail}
                  onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Description
              </label>
              <textarea
                placeholder="Enter course description (max 2000 characters)..."
                rows={4}
                maxLength={2000}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className={`w-full px-4 py-2.5 bg-white border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-400 ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <div className="flex justify-between mt-1">
                {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
                <p className="text-xs text-gray-500 ml-auto">{formData.description?.length || 0}/2000</p>
              </div>
            </div>

            {/* Duration & Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (hours)
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="e.g., 48"
                  value={formData.duration || ''}
                  onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) || 0 })}
                  className={`w-full px-4 py-2.5 bg-white border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-400 ${
                    errors.duration ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.duration && <p className="text-red-500 text-xs mt-1">{errors.duration}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Price ($)
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="e.g., 99.99"
                  value={formData.price || ''}
                  onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
                  className={`w-full px-4 py-2.5 bg-white border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-400 ${
                    errors.price ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="sticky bottom-0 px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={handleClose}
              disabled={isLoading}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium disabled:opacity-50 flex items-center gap-2"
            >
              {isLoading && (
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              )}
              {editingCourse ? 'Update Course' : 'Create Course'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
