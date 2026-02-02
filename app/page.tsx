'use client';

import React from 'react';
import Link from 'next/link';
import {
  Code2,
  Users,
  TrendingUp,
  Zap,
  Shield,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master Tech Skills for the Future
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of learners on House of Tech. Learn from industry experts,
              build real-world projects, and advance your career in tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/browse-courses"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium"
              >
                Explore Courses
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-linear-to-br from-indigo-100 to-purple-100 rounded-2xl blur-3xl opacity-60 animate-pulse" />
            <div className="relative bg-linear-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200 h-full flex flex-col justify-center">
              <div className="space-y-4">
                <div className="h-3 bg-indigo-200 rounded-full w-3/4 animate-pulse" />
                <div className="h-3 bg-indigo-200 rounded-full w-full animate-pulse" />
                <div className="h-3 bg-indigo-200 rounded-full w-5/6 animate-pulse" />
              </div>
              <div className="mt-8 space-y-3">
                <div className="h-12 bg-indigo-100 rounded-lg animate-pulse" />
                <div className="h-12 bg-indigo-100 rounded-lg animate-pulse w-5/6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative bg-gray-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose House of Tech?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive learning platform designed for modern developers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Expert Instructors</h4>
              <p className="text-gray-600">
                Learn from industry professionals with years of hands-on experience in modern tech stacks.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Career Growth</h4>
              <p className="text-gray-600">
                Access job-ready projects and certifications that boost your professional profile.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Community Support</h4>
              <p className="text-gray-600">
                Join a vibrant community of learners, network with peers, and collaborate on projects.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Flexible Learning</h4>
              <p className="text-gray-600">
                Learn at your own pace with lifetime access to course materials and updates.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Secure Platform</h4>
              <p className="text-gray-600">
                Enterprise-grade security and privacy protection for all your learning data.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-indigo-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Certifications</h4>
              <p className="text-gray-600">
                Earn recognized certifications to showcase your achievements to employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Popular Courses</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start learning from our most popular and highly-rated courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Full Stack Web Development',
              level: 'Advanced',
              students: 412,
              rating: 4.8,
            },
            {
              title: 'Next.js 16 Masterclass',
              level: 'Advanced',
              students: 356,
              rating: 4.9,
            },
            {
              title: 'React Fundamentals',
              level: 'Beginner',
              students: 521,
              rating: 4.7,
            },
            {
              title: 'TypeScript Mastery',
              level: 'Intermediate',
              students: 289,
              rating: 4.8,
            },
            {
              title: 'MongoDB & Databases',
              level: 'Intermediate',
              students: 178,
              rating: 4.6,
            },
            {
              title: 'AI Integration with Node.js',
              level: 'Advanced',
              students: 145,
              rating: 4.9,
            },
          ].map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="h-40 bg-linear-to-br from-indigo-100 to-purple-100" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                    {course.level}
                  </span>
                  <span className="text-sm font-medium text-gray-600">★ {course.rating}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  {course.students} students
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-indigo-600 to-purple-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join House of Tech today and transform your career. Get started with our free trial.
          </p>
          <a
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-50 transition-colors font-bold text-lg"
          >
            Create Free Account
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
