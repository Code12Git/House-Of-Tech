'use client';

import React, { useState } from 'react';
import {
  Upload,
  X,
  Plus,
  BookOpen,
  Eye,
  Save,
  ArrowLeft,
} from 'lucide-react';

// Course data matching the Course model schema
interface CourseFormData {
  title: string;
  instructor: string;
  description: string;
  duration: number;
  price: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'Active' | 'Draft' | 'Archived';
  thumbnail: string;
  category: string;
}

interface Lesson {
  id: string;
  title: string;
  duration: number;
}

export default function CreateCoursePage() {
  const [activeTab, setActiveTab] = useState('basic');
  const [courseData, setCourseData] = useState<CourseFormData>({
    title: '',
    instructor: '',
    description: '',
    duration: 0,
    price: 0,
    level: 'Beginner',
    status: 'Draft',
    thumbnail: '',
    category: '',
  });

  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [newLesson, setNewLesson] = useState('');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="h-6 w-6 text-gray-600" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Create New Course</h1>
              <p className="text-sm text-gray-600">Set up your course details and content</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium">
              <Eye className="inline h-5 w-5 mr-2" />
              Preview
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
              <Save className="inline h-5 w-5 mr-2" />
              Save Course
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200 overflow-x-auto">
          {[
            { id: 'basic', label: 'Basic Info' },
            { id: 'curriculum', label: 'Curriculum' },
            { id: 'pricing', label: 'Pricing' },
            { id: 'settings', label: 'Settings' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Basic Info Tab */}
        {activeTab === 'basic' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Course Basic Information</h2>

            <div className="space-y-8">
              {/* Course Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Course Title *</label>
                <input
                  type="text"
                  placeholder="e.g., Advanced React Development"
                  value={courseData.title}
                  onChange={(e) => setCourseData({ ...courseData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <p className="text-xs text-gray-500 mt-1">This is the public title of your course</p>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Course Description *
                </label>
                <textarea
                  placeholder="Describe what your students will learn..."
                  value={courseData.description}
                  onChange={(e) => setCourseData({ ...courseData, description: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Be specific about what students will achieve
                </p>
              </div>

              {/* Course Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Course Image *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 font-medium">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>

              {/* Category & Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Category *
                  </label>
                  <select
                    value={courseData.category}
                    onChange={(e) => setCourseData({ ...courseData, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Level *
                  </label>
                  <select
                    value={courseData.level}
                    onChange={(e) => setCourseData({ ...courseData, level: e.target.value as CourseFormData['level'] })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              {/* Instructor Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Instructor Name *</label>
                <input
                  type="text"
                  placeholder="e.g., John Doe"
                  value={courseData.instructor}
                  onChange={(e) => setCourseData({ ...courseData, instructor: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Thumbnail URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Thumbnail URL</label>
                <input
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  value={courseData.thumbnail}
                  onChange={(e) => setCourseData({ ...courseData, thumbnail: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <p className="text-xs text-gray-500 mt-1">Or upload an image below</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end gap-4 mt-12 pt-8 border-t border-gray-200">
              <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium">
                Save Draft
              </button>
              <button
                onClick={() => setActiveTab('curriculum')}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Next: Curriculum
              </button>
            </div>
          </div>
        )}

        {/* Curriculum Tab */}
        {activeTab === 'curriculum' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Course Curriculum</h2>

            <div className="space-y-6">
              {/* Sections/Lessons */}
              {lessons.map((lesson, idx) => (
                <div key={lesson.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
                  <div>
                    <p className="font-medium text-gray-900">Lesson {idx + 1}</p>
                    <p className="text-sm text-gray-600">{lesson.title}</p>
                    {lesson.duration > 0 && (
                      <p className="text-xs text-gray-400 mt-1">{lesson.duration} min</p>
                    )}
                  </div>
                  <button
                    onClick={() => setLessons(lessons.filter((l) => l.id !== lesson.id))}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}

              {/* Add Lesson Form */}
              <div className="border-2 border-dashed border-indigo-300 rounded-lg p-6">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter lesson title..."
                    value={newLesson}
                    onChange={(e) => setNewLesson(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    onClick={() => {
                      if (newLesson.trim()) {
                        const lesson: Lesson = {
                          id: Date.now().toString(),
                          title: newLesson.trim(),
                          duration: 0,
                        };
                        setLessons([...lessons, lesson]);
                        setNewLesson('');
                      }
                    }}
                    className="px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center gap-2"
                  >
                    <Plus className="h-5 w-5" />
                    Add Lesson
                  </button>
                </div>
              </div>

              {lessons.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    📚 Total Lessons: <strong>{lessons.length}</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4 mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => setActiveTab('basic')}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              >
                Back: Basic Info
              </button>
              <button
                onClick={() => setActiveTab('pricing')}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Next: Pricing
              </button>
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Course Pricing</h2>

            <div className="space-y-8">
              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Course Price (USD) *
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-600 font-medium">
                    $
                  </span>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="99.99"
                    value={courseData.price || ''}
                    onChange={(e) => setCourseData({ ...courseData, price: parseFloat(e.target.value) || 0 })}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Course Duration (hours) *
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="48"
                  value={courseData.duration || ''}
                  onChange={(e) => setCourseData({ ...courseData, duration: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Pricing Preview */}
              <div className="bg-linear-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Pricing Preview</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Course Price:</span>
                    <span className="text-2xl font-bold text-gray-900">
                      ${courseData.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-indigo-200">
                    <span className="text-gray-600">Your Earning (70%):</span>
                    <span className="text-2xl font-bold text-green-600">
                      ${(courseData.price * 0.7).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4 mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => setActiveTab('curriculum')}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              >
                Back: Curriculum
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Next: Settings
              </button>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Course Settings</h2>

            <div className="space-y-8">
              {/* Course Visibility */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Course Visibility
                </label>
                <div className="space-y-3">
                  {[
                    { value: 'public', label: 'Public', desc: 'Anyone can find and enroll' },
                    { value: 'private', label: 'Private', desc: 'Only invited users can access' },
                    { value: 'draft', label: 'Draft', desc: 'Only you can see this course' },
                  ].map((option) => (
                    <div key={option.value} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        id={option.value}
                        name="visibility"
                        className="h-4 w-4 text-indigo-600"
                      />
                      <label htmlFor={option.value} className="ml-3 flex-1 cursor-pointer">
                        <p className="font-medium text-gray-900">{option.label}</p>
                        <p className="text-sm text-gray-600">{option.desc}</p>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Issue Certificate</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Students who complete the course will receive a certificate
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-5 w-5 text-indigo-600 rounded cursor-pointer"
                  />
                </div>
              </div>

              {/* Announcements */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Enable Announcements</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Allow you to send updates to enrolled students
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-5 w-5 text-indigo-600 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4 mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => setActiveTab('pricing')}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
              >
                Back: Pricing
              </button>
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                <Save className="inline h-5 w-5 mr-2" />
                Publish Course
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
