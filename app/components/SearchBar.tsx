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
    <div className="flex flex-col md:flex-row gap-4">
      {/* Search */}
      <input
        type="text"
        placeholder="Search exam / category / state..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch?.(e.target.value);
        }}
        className="flex-1 border rounded-lg px-4 py-3 text-sm"
      />

      {/* Filter */}
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          onCategoryChange?.(e.target.value);
        }}
        className="border rounded-lg px-4 py-3 text-sm"
      >
        <option value="">All Categories</option>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
