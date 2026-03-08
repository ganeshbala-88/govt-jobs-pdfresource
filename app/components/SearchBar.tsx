"use client";

import { useState } from "react";

type SearchBarProps = {
  onSearch?: (value: string) => void;
  onCategoryChange?: (value: string) => void;
};

const CATEGORIES = [
  "Notification",
  "Application",
  "Syllabus",
  "Postal Jobs",
  "Railway Jobs",
  "High Court Jobs",
  "Air Force Jobs",
];

export default function SearchBar({
  onSearch,
  onCategoryChange,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 md:p-5 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-200/60 max-w-4xl mx-auto -mt-8 relative z-10">
      {/* Search */}
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search exam, category, or state..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch?.(e.target.value);
          }}
          className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
        />
      </div>

      {/* Filter */}
      <div className="relative md:w-64">
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            onCategoryChange?.(e.target.value);
          }}
          className="w-full appearance-none pl-4 pr-10 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-700 font-medium focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none cursor-pointer"
        >
          <option value="">All Categories</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <svg className="h-4 w-4 text-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
