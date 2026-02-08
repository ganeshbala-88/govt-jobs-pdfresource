"use client";

import { useState } from "react";
import ResourceCard from "./ResourceCard";
import SearchBar from "./SearchBar";
import resource from "../data/resource.json";

type Resource = {
  id: number;
  exam: string;
  category: string;
  state: string;
  notification?: {
    title?: string;
    type?: string;
    link: string;
  };
  application?: {
    applyLink?: string;
    applicationStart?: string;
    applicationEnd?: string;
  };
  source: string; // ✅ FIXED
  updatedAt?: string;
};

export default function ResourceList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredResources = resource.filter((item) => {
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      item.exam.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.state.toLowerCase().includes(query);

    const matchesCategory =
      !selectedCategory || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <SearchBar
        onSearch={setSearchQuery}
        onCategoryChange={setSelectedCategory}
      />

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        {filteredResources.length > 0 ? (
          filteredResources.map((item) => (
            <ResourceCard key={item.id} resource={item} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No matching resources found.
          </p>
        )}
      </div>
    </section>
  );
}
