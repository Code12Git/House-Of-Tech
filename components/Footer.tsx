'use client';

import { BookOpen, Github, Linkedin, Mail, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">House of Tech</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              A full-stack CRUD application built with Next.js 16, React, TypeScript, and MongoDB.
              Master modern web development with our comprehensive learning platform.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/SakshamSaxena0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/saksham-saxena"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:saksham@example.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/browse-courses" className="text-gray-400 hover:text-white transition-colors">
                  Browse Courses
                </Link>
              </li>
              <li>
                <Link href="/create-course" className="text-gray-400 hover:text-white transition-colors">
                  Create Course
                </Link>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-semibold mb-4">Tech Stack</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Next.js 16</li>
              <li>React 19</li>
              <li>TypeScript 5</li>
              <li>MongoDB & Mongoose</li>
              <li>Tailwind CSS v4</li>
              <li>JWT Authentication</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} House of Tech. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by{' '}
              <a
                href="https://github.com/SakshamSaxena0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-medium"
              >
                Saksham Saxena
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
