'use client';

import React, { useState } from 'react';
import {
  Star,
  Users,
  Clock,
  BookOpen,
  CheckCircle,
  ChevronDown,
  Play,
  Share2,
  Heart,
  ShoppingCart,
} from 'lucide-react';

export default function CourseDetailPage() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(0);

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
            <button className="text-gray-700 hover:text-gray-900">Cart</button>
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
              JD
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-linear-to-br from-indigo-600 to-purple-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="md:col-span-2">
              <div className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-4">
                Advanced Level
              </div>
              <h1 className="text-5xl font-bold mb-4">
                Full Stack Web Development with Next.js 16 & MongoDB
              </h1>
              <p className="text-xl text-indigo-100 mb-6">
                Master modern full-stack development using Next.js 16, React, TypeScript, and MongoDB. Build
                production-ready applications with best practices.
              </p>

              <div className="flex flex-wrap gap-8 mb-8">
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                    ))}
                  </div>
                  <span className="font-medium">4.9 (2.3K reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span className="font-medium">15.2K students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">48 hours content</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-bold">
                  <ShoppingCart className="h-5 w-5" />
                  Enroll Now - $99
                </button>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors font-bold"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      isFavorite ? 'fill-white' : ''
                    }`}
                  />
                  {isFavorite ? 'Saved' : 'Save'}
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors font-bold">
                  <Share2 className="h-5 w-5" />
                  Share
                </button>
              </div>
            </div>

            {/* Right - Video Preview */}
            <div>
              <div className="bg-black bg-opacity-40 rounded-xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer hover:bg-opacity-50 transition-colors">
                <Play className="h-16 w-16 fill-white text-white" />
              </div>
              <p className="text-center text-sm text-indigo-100 mt-3">Preview video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What You'll Learn */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Build scalable full-stack applications',
                  'Master Next.js 16 features and optimization',
                  'Create RESTful and GraphQL APIs',
                  'Database design with MongoDB',
                  'Authentication & Authorization',
                  'Deployment strategies',
                  'Performance optimization techniques',
                  'Testing & debugging best practices',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Curriculum</h2>
              <div className="space-y-4">
                {[
                  {
                    section: 'Getting Started',
                    lessons: 6,
                    duration: '2h 30m',
                    isOpen: true,
                  },
                  {
                    section: 'Next.js Fundamentals',
                    lessons: 12,
                    duration: '5h 15m',
                    isOpen: false,
                  },
                  {
                    section: 'Building APIs',
                    lessons: 9,
                    duration: '4h 20m',
                    isOpen: false,
                  },
                  {
                    section: 'Database Integration',
                    lessons: 8,
                    duration: '3h 45m',
                    isOpen: false,
                  },
                ].map((section, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-indigo-600" />
                        <div className="text-left">
                          <h4 className="font-bold text-gray-900">{section.section}</h4>
                          <p className="text-sm text-gray-600">
                            {section.lessons} lessons • {section.duration}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          section.isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {section.isOpen && (
                      <div className="bg-gray-50 border-t border-gray-200 divide-y divide-gray-200">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="px-6 py-3 flex items-center gap-3 hover:bg-gray-100 cursor-pointer transition-colors">
                            <Play className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-700">
                              Lesson {i + 1}: Introduction to Course
                            </span>
                            <span className="ml-auto text-xs text-gray-500">15:30</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Instructor */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">About The Instructor</h2>
              <div className="bg-white rounded-xl border border-gray-200 p-8 flex gap-6">
                <div className="h-24 w-24 rounded-full bg-linear-to-br from-indigo-400 to-purple-500 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">John Doe</h3>
                  <p className="text-indigo-600 font-medium mb-3">Senior Full Stack Developer</p>
                  <p className="text-gray-600 mb-4">
                    John is a senior developer with 10+ years of experience in building scalable web
                    applications. He's passionate about teaching and has trained 50K+ students online.
                  </p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>⭐ 4.9 Instructor Rating</span>
                    <span>👥 50K+ Students</span>
                    <span>🎓 5 Courses</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Student Reviews</h2>
              <div className="space-y-6">
                {[
                  {
                    name: 'Sarah Williams',
                    rating: 5,
                    text: 'Excellent course! The instructor explains complex concepts in a simple way.',
                  },
                  {
                    name: 'Michael Chen',
                    rating: 5,
                    text: 'This course transformed my career. I landed a job within a month of completing it.',
                  },
                  {
                    name: 'Emma Johnson',
                    rating: 4,
                    text: 'Great content and real-world projects. Would recommend to anyone learning fullstack.',
                  },
                ].map((review, idx) => (
                  <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                        <div className="flex gap-1 mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">2 weeks ago</span>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Course Card */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden sticky top-24">
              <div className="h-40 bg-linear-to-br from-indigo-100 to-purple-100" />
              <div className="p-6 space-y-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">$99</div>
                  <button className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-bold mb-3">
                    Enroll Now
                  </button>
                  <p className="text-sm text-center text-gray-600">30-day money-back guarantee</p>
                </div>

                <div className="space-y-3 border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-700">48 hours on-demand video</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-700">Project files included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-700">Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-700">Lifetime access</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 space-y-3">
                  <h4 className="font-bold text-gray-900 text-sm">Requirements</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Basic JavaScript knowledge</li>
                    <li>• Node.js installed on your computer</li>
                    <li>• A code editor (VSCode recommended)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
