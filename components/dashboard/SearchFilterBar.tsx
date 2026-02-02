'use client';

import { Search, ChevronDown } from 'lucide-react';

interface SearchFilterBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filterStatus: string;
  onFilterChange: (value: string) => void;
  filterLevel?: string;
  onLevelChange?: (value: string) => void;
}

export default function SearchFilterBar({
  searchTerm,
  onSearchChange,
  filterStatus,
  onFilterChange,
  filterLevel,
  onLevelChange,
}: SearchFilterBarProps) {
  return (
    <div className="px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row gap-4">
      {/* Search Input */}
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by title or instructor..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-400"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        {/* Status Filter */}
        <div className="relative">
          <select
            value={filterStatus}
            onChange={(e) => onFilterChange(e.target.value)}
            className="appearance-none px-4 py-2.5 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10 cursor-pointer text-gray-900 min-w-[120px]"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Draft">Draft</option>
            <option value="Archived">Archived</option>
          </select>
          <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Level Filter (optional) */}
        {onLevelChange && (
          <div className="relative">
            <select
              value={filterLevel || 'All'}
              onChange={(e) => onLevelChange(e.target.value)}
              className="appearance-none px-4 py-2.5 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10 cursor-pointer text-gray-900 min-w-[120px]"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        )}
      </div>
    </div>
  );
}
