'use client';

import React, { useState } from 'react';
import {
  Search,
  ChevronDown,
  Star,
  Users,
  Clock,
  BookOpen,
  Filter,
  Grid,
  List,
} from 'lucide-react';

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  students: number;
  duration: number;
  level: string;
  price: number;
  image: string;
}

const mockCourses: Course[] = [
  {
    id: 1,
    title: 'Advanced React Development',
    instructor: 'John Doe',
    rating: 4.8,
    reviews: 1230,
    students: 234,
    duration: 32,
    level: 'Advanced',
    price: 99,
    image: 'from-indigo-400 to-purple-500',
  },
  {
    id: 2,
    title: 'Next.js 16 Masterclass',
    instructor: 'Jane Smith',
    rating: 4.9,
    reviews: 2100,
    students: 356,
    duration: 48,
    level: 'Advanced',
    price: 129,
    image: 'from-blue-400 to-cyan-500',
  },
  {
    id: 3,
    title: 'React Fundamentals',
    instructor: 'Mike Johnson',
    rating: 4.7,
    reviews: 1890,
    students: 521,
    duration: 24,
    level: 'Beginner',
    price: 79,
    image: 'from-green-400 to-emerald-500',
  },
  {
    id: 4,
    title: 'TypeScript Mastery',
    instructor: 'Sarah Williams',
    rating: 4.8,
    reviews: 945,
    students: 289,
    duration: 28,
    level: 'Intermediate',
    price: 89,
    image: 'from-orange-400 to-red-500',
  },
  {
    id: 5,
    title: 'MongoDB & Databases',
    instructor: 'David Brown',
    rating: 4.6,
    reviews: 756,
    students: 178,
    duration: 20,
    level: 'Intermediate',
    price: 79,
    image: 'from-pink-400 to-rose-500',
  },
  {
    id: 6,
    title: 'AI Integration with Node.js',
    instructor: 'Emma Johnson',
    rating: 4.9,
    reviews: 1123,
    students: 145,
    duration: 40,
    level: 'Advanced',
    price: 149,
    image: 'from-purple-400 to-pink-500',
  },
];

export default function BrowseCoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');

  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;

    const matchesPrice =
      selectedPrice === 'All' ||
      (selectedPrice === 'free' && course.price === 0) ||
      (selectedPrice === 'paid' && course.price > 0);

    return matchesSearch && matchesLevel && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-indigo-600" />
            <h1 className="text-xl font-bold text-gray-900">House of Tech</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-gray-900">My Courses</button>
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold cursor-pointer">
              JD
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Courses</h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover thousands of courses to enhance your skills and advance your career
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses, instructors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </h3>

              {/* Level Filter */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Level</h4>
                <div className="space-y-3">
                  {['All', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
                    <label key={level} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="level"
                        value={level}
                        checked={selectedLevel === level}
                        onChange={(e) => setSelectedLevel(e.target.value)}
                        className="h-4 w-4 text-indigo-600"
                      />
                      <span className="text-gray-700">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Price</h4>
                <div className="space-y-3">
                  {['All', 'free', 'paid'].map((price) => (
                    <label key={price} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        value={price}
                        checked={selectedPrice === price}
                        onChange={(e) => setSelectedPrice(e.target.value)}
                        className="h-4 w-4 text-indigo-600"
                      />
                      <span className="text-gray-700 capitalize">
                        {price === 'free' ? 'Free' : price === 'paid' ? 'Paid' : 'All Prices'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedLevel('All');
                  setSelectedPrice('All');
                }}
                className="w-full py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors font-medium text-sm"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
              <p className="text-gray-600">
                Showing <strong>{filteredCourses.length}</strong> courses
              </p>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10 cursor-pointer text-sm"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-indigo-100 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list'
                        ? 'bg-indigo-100 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Courses */}
            {filteredCourses.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg text-gray-600 mb-2">No courses found</p>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer group"
                  >
                    <div className={`h-40 bg-linear-to-br ${course.image}`} />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                          {course.level}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium text-gray-900">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{course.instructor}</p>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {course.students}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}h
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900">
                          ${course.price}
                        </span>
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                          Enroll
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer flex gap-6"
                  >
                    <div className={`h-32 w-40 rounded-lg bg-linear-to-br ${course.image} flex-shrink-0`} />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {course.title}
                          </h3>
                          <p className="text-sm text-gray-600">{course.instructor}</p>
                        </div>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                          {course.level}
                        </span>
                      </div>

                      <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{course.rating}</span>
                          <span className="text-gray-500">({course.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {course.students} students
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration} hours
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900">
                          ${course.price}
                        </span>
                        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
