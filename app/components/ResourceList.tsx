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
    <section className="max-w-6xl mx-auto px-4 py-16" id="resources">
      <SearchBar
        onSearch={setSearchQuery}
        onCategoryChange={setSelectedCategory}
      />

      <div className="grid gap-8 md:grid-cols-2 mt-12">
        {filteredResources.length > 0 ? (
          filteredResources.map((item) => (
            <ResourceCard key={item.id} resource={item as any} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
              <svg className="w-8 h-8 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">No resources found</h3>
            <p className="text-slate-500">We couldn't find anything matching your search criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
