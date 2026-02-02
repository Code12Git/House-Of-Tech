'use client';

import { useState, useEffect, useCallback } from 'react';
import { Plus, BookOpen, Users, TrendingUp, DollarSign, RefreshCw } from 'lucide-react';
import { CourseFormData } from '@/types/course';
import { Course } from '@/types';
import StatsCard from './StatsCard';
import CourseModal from './CourseModal';
import CoursesTable from './CoursesTable';
import SearchFilterBar from './SearchFilterBar';
import Pagination from './Pagination';
import Navbar from '@/components/Navbar';
import * as courseService from '@/services/courseService';
import toast from 'react-hot-toast';

export default function DashboardClient() {
  const [courses, setCourses] = useState<CourseFormData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterLevel, setFilterLevel] = useState('All');
  const [editingCourse, setEditingCourse] = useState<CourseFormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [stats, setStats] = useState({
    totalCourses: 0,
    activeCourses: 0,
    totalStudents: 0,
    totalRevenue: 0,
  });

  const fetchCourses = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await courseService.getCourses({
        page: currentPage,
        limit: 10,
        search: searchTerm || undefined,
        status: filterStatus !== 'All' ? filterStatus : undefined,
        level: filterLevel !== 'All' ? filterLevel : undefined,
      });

      const formattedCourses: CourseFormData[] = response.courses.map((course: Course) => ({
        _id: course._id,
        title: course.title,
        instructor: course.instructor,
        description: course.description,
        duration: course.duration,
        price: course.price,
        level: course.level,
        status: course.status,
        students: course.students,
        thumbnail: course.thumbnail,
        category: course.category,
        updatedAt: course.updatedAt,
        createdAt: course.createdAt,
      }));

      setCourses(formattedCourses);
      setTotalPages(response.pagination.totalPages);
      setTotalItems(response.pagination.total);
    } catch (error) {
      console.error('Failed to fetch courses:', error);
      toast.error('Failed to load courses');
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, searchTerm, filterStatus, filterLevel]);

  const fetchStats = useCallback(async () => {
    try {
      const statsData = await courseService.getDashboardStats();
      setStats(statsData);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
    fetchStats();
  }, [fetchCourses, fetchStats]);

  const handleAddCourse = () => {
    setEditingCourse(null);
    setIsModalOpen(true);
  };

  const handleEditCourse = (course: CourseFormData) => {
    setEditingCourse(course);
    setIsModalOpen(true);
  };

  const handleDeleteCourse = async (id: string) => {
    if (!confirm('Are you sure you want to delete this course?')) return;
    try {
      await courseService.deleteCourse(id);
      toast.success('Course deleted successfully');
      fetchCourses();
      fetchStats();
    } catch (error) {
      console.error('Failed to delete course:', error);
      toast.error('Failed to delete course');
    }
  };

  const handleSubmitCourse = async (data: Partial<CourseFormData>) => {
    try {
      setIsSubmitting(true);
      if (editingCourse && editingCourse._id) {
        await courseService.updateCourse(editingCourse._id, data);
        toast.success('Course updated successfully');
      } else {
        await courseService.createCourse(data);
        toast.success('Course created successfully');
      }
      setIsModalOpen(false);
      fetchCourses();
      fetchStats();
    } catch (error) {
      console.error('Failed to save course:', error);
      toast.error('Failed to save course');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRefresh = () => {
    fetchCourses();
    fetchStats();
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard title="Total Courses" value={stats.totalCourses} icon={BookOpen} bgColor="bg-blue-100" iconColor="text-blue-600" />
          <StatsCard title="Active Courses" value={stats.activeCourses} icon={TrendingUp} bgColor="bg-green-100" iconColor="text-green-600" />
          <StatsCard title="Total Students" value={stats.totalStudents} icon={Users} bgColor="bg-purple-100" iconColor="text-purple-600" />
          <StatsCard title="Total Revenue" value={`$${stats.totalRevenue.toLocaleString()}`} icon={DollarSign} bgColor="bg-orange-100" iconColor="text-orange-600" />
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-lg font-bold text-gray-900">Courses Management</h2>
            <div className="flex items-center gap-3">
              <button onClick={handleRefresh} disabled={isLoading} className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 disabled:opacity-50">
                <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button onClick={handleAddCourse} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                <Plus className="h-5 w-5" />
                Add Course
              </button>
            </div>
          </div>

          <SearchFilterBar
            searchTerm={searchTerm}
            onSearchChange={(value) => { setSearchTerm(value); setCurrentPage(1); }}
            filterStatus={filterStatus}
            onFilterChange={(value) => { setFilterStatus(value); setCurrentPage(1); }}
            filterLevel={filterLevel}
            onLevelChange={(value) => { setFilterLevel(value); setCurrentPage(1); }}
          />

          <CoursesTable courses={courses} onEdit={handleEditCourse} onDelete={handleDeleteCourse} isLoading={isLoading} />

          <Pagination currentPage={currentPage} totalPages={totalPages} totalItems={totalItems} onPageChange={setCurrentPage} />
        </div>

        <CourseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} editingCourse={editingCourse} onSubmit={handleSubmitCourse} isLoading={isSubmitting} />
      </div>
    </>
  );
}
