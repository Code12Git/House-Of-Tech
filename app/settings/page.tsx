'use client';

import React, { useState } from 'react';
import {
  Settings,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronRight,
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [settings, setSettings] = useState({
    emailNotifications: true,
    courseUpdates: true,
    weeklyReport: false,
    twoFA: false,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings className="h-6 w-6 text-indigo-600" />
            <h1 className="text-xl font-bold text-gray-900">Settings</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-gray-900">Help</button>
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold cursor-pointer">
              JD
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden sticky top-24">
              <nav className="flex flex-col">
                {[
                  { id: 'account', label: 'Account', icon: '👤' },
                  { id: 'notifications', label: 'Notifications', icon: '🔔' },
                  { id: 'security', label: 'Security', icon: '🔒' },
                  { id: 'billing', label: 'Billing', icon: '💳' },
                  { id: 'help', label: 'Help & Support', icon: '❓' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full px-6 py-4 text-left flex items-center justify-between border-l-4 transition-colors ${
                      activeTab === item.id
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-600 font-medium'
                        : 'border-transparent text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      {item.label}
                    </div>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {/* Account Settings */}
            {activeTab === 'account' && (
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Account Settings</h2>

                <div className="space-y-8">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <p className="text-xs text-gray-500 mt-2">We&apos;ll send important updates to this email</p>
                  </div>

                  {/* Account Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Type
                    </label>
                    <div className="px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 font-medium">
                      Instructor Account
                    </div>
                  </div>

                  {/* Account Created */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Created
                    </label>
                    <div className="px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-600">
                      January 15, 2024
                    </div>
                  </div>

                  {/* Delete Account */}
                  <div className="pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-red-600 mb-4">
                      Danger Zone
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
                      Delete Account
                    </button>
                  </div>
                </div>

                {/* Save Button */}
                <div className="mt-8 pt-8 border-t border-gray-200 flex justify-end gap-4">
                  <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium">
                    Cancel
                  </button>
                  <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Notification Preferences</h2>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Email Notifications',
                      description: 'Receive email notifications for course updates and student activity',
                      checked: settings.emailNotifications,
                      key: 'emailNotifications',
                    },
                    {
                      title: 'Course Updates',
                      description: 'Get notified when students enroll in your courses',
                      checked: settings.courseUpdates,
                      key: 'courseUpdates',
                    },
                    {
                      title: 'Weekly Report',
                      description: 'Receive a weekly summary of your course performance',
                      checked: settings.weeklyReport,
                      key: 'weeklyReport',
                    },
                    {
                      title: 'Two-Factor Authentication Alerts',
                      description: 'Get notified of login attempts and security events',
                      checked: settings.twoFA,
                      key: 'twoFA',
                    },
                  ].map((setting) => (
                    <div
                      key={setting.key}
                      className="flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-900">{setting.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{setting.description}</p>
                      </div>
                      <button
                        onClick={() =>
                          setSettings({
                            ...settings,
                            [setting.key]: !settings[setting.key as keyof typeof settings],
                          })
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          settings[setting.key as keyof typeof settings]
                            ? 'bg-indigo-600'
                            : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            settings[setting.key as keyof typeof settings]
                              ? 'translate-x-6'
                              : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Security Settings</h2>

                <div className="space-y-8">
                  {/* Change Password */}
                  <div className="pb-8 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Change Password</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="pb-8 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Two-Factor Authentication
                    </h3>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <p className="text-sm text-blue-900">
                        📱 Enhance your account security with two-factor authentication. Require a code from your phone when you log in.
                      </p>
                    </div>
                    <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                      Enable 2FA
                    </button>
                  </div>

                  {/* Active Sessions */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Sessions</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Chrome on macOS</p>
                          <p className="text-sm text-gray-600">Last active: 2 minutes ago</p>
                        </div>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          Current
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">Safari on iPhone</p>
                          <p className="text-sm text-gray-600">Last active: 3 hours ago</p>
                        </div>
                        <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Settings */}
            {activeTab === 'billing' && (
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Billing & Payments</h2>

                <div className="space-y-8">
                  {/* Plan Information */}
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Current Plan: Professional</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Unlimited courses, advanced analytics, and priority support.
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-gray-900">$29/month</p>
                      <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium">
                        Change Plan
                      </button>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
                    <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-6 w-6 text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-900">Visa ending in 4242</p>
                          <p className="text-sm text-gray-600">Expires 12/2025</p>
                        </div>
                      </div>
                      <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                        Edit
                      </button>
                    </div>
                  </div>

                  {/* Billing History */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing History</h3>
                    <div className="space-y-3">
                      {[
                        { date: 'Jan 1, 2024', amount: '$29.00', status: 'Paid' },
                        { date: 'Dec 1, 2023', amount: '$29.00', status: 'Paid' },
                        { date: 'Nov 1, 2023', amount: '$29.00', status: 'Paid' },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{item.date}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-gray-900 font-medium">{item.amount}</span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                              {item.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Help & Support */}
            {activeTab === 'help' && (
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Help & Support</h2>

                <div className="space-y-8">
                  {/* Contact Support */}
                  <div className="bg-linear-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-8">
                    <HelpCircle className="h-12 w-12 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help?</h3>
                    <p className="text-gray-600 mb-6">
                      Our support team is ready to help. Contact us or check our knowledge base for common issues.
                    </p>
                    <div className="flex gap-4">
                      <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                        Contact Support
                      </button>
                      <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium">
                        Knowledge Base
                      </button>
                    </div>
                  </div>

                  {/* FAQ */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-3">
                      {[
                        { q: 'How do I upload a course?', a: 'You can upload a course from the dashboard using the Create Course button.' },
                        { q: 'What payment methods do you accept?', a: 'We accept all major credit cards and PayPal.' },
                        { q: 'How do I withdraw my earnings?', a: 'You can request a withdrawal from your earnings page anytime.' },
                      ].map((item, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-lg p-4">
                          <p className="font-medium text-gray-900 mb-2">{item.q}</p>
                          <p className="text-sm text-gray-600">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Logout */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-200 mt-12">
        <button className="flex items-center gap-2 px-6 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium">
          <LogOut className="h-5 w-5" />
          Log Out
        </button>
      </div>
    </div>
  );
}
