'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Edit2,
  Save,
  Camera,
  BookOpen,
  Award,
  TrendingUp,
  Clock,
} from 'lucide-react';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Full-stack developer passionate about building scalable applications and learning new technologies.',
    website: 'https://johndoe.dev',
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
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              Dashboard
            </button>
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold cursor-pointer">
              JD
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Profile Header Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          {/* Background */}
          <div className="h-32 bg-linear-to-r from-indigo-500 to-purple-600" />

          {/* Profile Info */}
          <div className="relative px-8 pb-8">
            <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-16">
              {/* Avatar */}
              <div className="relative">
                <div className="h-32 w-32 rounded-full bg-linear-to-br from-indigo-400 to-purple-500 border-4 border-white flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  JD
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
                  <Camera className="h-5 w-5" />
                </button>
              </div>

              {/* Profile Header Info */}
              <div className="flex-1 pb-4">
                <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
                <p className="text-gray-600 mt-1">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  {profile.location}
                </p>
                <div className="flex gap-4 mt-4 flex-wrap">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">12</p>
                    <p className="text-xs text-gray-600">Courses Enrolled</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">4</p>
                    <p className="text-xs text-gray-600">Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">8</p>
                    <p className="text-xs text-gray-600">In Progress</p>
                  </div>
                </div>
              </div>

              {/* Edit Button */}
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                {isEditing ? (
                  <>
                    <Save className="h-5 w-5" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit2 className="h-5 w-5" />
                    Edit Profile
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Profile Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.location}
                      onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.location}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                  {isEditing ? (
                    <input
                      type="url"
                      value={profile.website}
                      onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-indigo-600 hover:underline cursor-pointer">{profile.website}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  {isEditing ? (
                    <textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  ) : (
                    <p className="text-gray-700">{profile.bio}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Learning Statistics */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                  <p className="text-sm text-gray-600 mt-1">Courses Enrolled</p>
                </div>

                <div className="text-center">
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">4</p>
                  <p className="text-sm text-gray-600 mt-1">Completed</p>
                </div>

                <div className="text-center">
                  <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">156</p>
                  <p className="text-sm text-gray-600 mt-1">Hours Logged</p>
                </div>

                <div className="text-center">
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">78%</p>
                  <p className="text-sm text-gray-600 mt-1">Avg. Progress</p>
                </div>

                <div className="text-center">
                  <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="h-6 w-6 text-red-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                  <p className="text-sm text-gray-600 mt-1">In Progress</p>
                </div>

                <div className="text-center">
                  <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-indigo-600" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">4</p>
                  <p className="text-sm text-gray-600 mt-1">Certificates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Recent Courses */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Current Courses</h3>
              <div className="space-y-4">
                {[
                  { title: 'Full Stack Web Dev', progress: 65 },
                  { title: 'React Mastery', progress: 45 },
                  { title: 'TypeScript Pro', progress: 80 },
                ].map((course, idx) => (
                  <div key={idx}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900 text-sm">{course.title}</h4>
                      <span className="text-xs text-gray-500">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-8 px-4 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium">
                View All Courses
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
