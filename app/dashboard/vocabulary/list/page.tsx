"use client";

import {ChevronRight, BookOpen } from "lucide-react";
import { useState } from "react";

const mockData = [
  {
    source: "Movie",
    count: 21,
    words: ["curious", "plot twist", "binge-watch"],
  },
  {
    source: "Book",
    count: 12,
    words: ["inevitable", "metaphor"],
  },
];

export default function VocabularyPage() {
  const [openSource, setOpenSource] = useState<string | null>("Movie");

  return (
    <div className="p-6 lg:p-12 space-y-6">
      <div className="lg:ml-8">
        {/* Page Header */}
        <div>
          <h1 className="text-4xl font-bold  text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-blue-600 mb-6">
            Your Library
          </h1>
          <p className="text-slate-500 text-sm font-bold mb-2">
            Explore and manage your saved words
          </p>
        </div>

        {/* Source Groups */}
        <div className="space-y-4">
          {mockData.map((group) => {
            const isOpen = openSource === group.source;

            return (
              <div
                key={group.source}
                className="bg-white border border-slate-200 rounded-2xl shadow-sm"
              >
                {/* Source Header */}
                <button
                  onClick={() => setOpenSource(isOpen ? null : group.source)}
                  className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-teal-100 text-teal-600">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-slate-700">
                      {group.source}
                      <span className="ml-2 text-slate-400 text-sm">
                        ({group.count})
                      </span>
                    </span>
                  </div>

                  <ChevronRight
                    className={`text-teal-500 transition-transform duration-300 ${
                      isOpen ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Word List */}
                {isOpen && (
                  <div className="px-6 pb-4 space-y-2">
                    {group.words.map((word) => (
                      <button
                        key={word}
                        className="w-full text-left px-4 py-2 rounded-xl text-slate-600 hover:bg-linear-to-r hover:from-teal-500 hover:to-blue-600 hover:text-white transition cursor-pointer"
                      >
                        {word}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
