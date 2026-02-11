"use client";

import {ChevronRight, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { SOURCE_CONFIG, SourceKey } from "@/lib/sourceConfig";



type Vocabulary = {
  term :string;
  type:string;
  meaning: string;
  example?:string;
  source: string;
  createdAt: string;
}


export default function VocabularyPage() {
  const [openSource, setOpenSource] = useState<string | null>("bible");
  const [vocabularies, setVocabularies] = useState<Vocabulary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    async function fetchData(){
      const res = await fetch("/api/vocabulary/list");
      const data = await res.json();

      setVocabularies(data);
      setLoading(false);
    }
    fetchData();
  },[])


  // GROUPING VOCABULARIES BY ITS SOURCE
  function groupBySource(vocabularies: Vocabulary[]) {
    const map: Record<string, string[]> = {};

    for (const vocab of vocabularies) {
      const source = vocab.source ?? "Unknown";

      if (!map[source]) {
        map[source] = [];
      }

      map[source].push(vocab.term);
    }

    return Object.entries(map).map(([source, words]) => ({
      source,
      count: words.length,
      words,
    }));
  }

  const groupedData = groupBySource(vocabularies);

  

if (loading) {
  return (
    <div className="space-y-4 animate-pulse px-6 py-12 lg:p-12  ">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6"
        >
          <div className="h-4 bg-slate-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-slate-200 rounded w-full"></div>
            <div className="h-3 bg-slate-200 rounded w-5/6"></div>
          </div>
        </div>
      ))}
    </div>
  );
}


  


  return (
    <div className="px-6 py-12 lg:p-12 space-y-6">
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

      
          <div className="space-y-4">
            {groupedData.map((group) => {
              const isOpen = openSource === group.source;
              const key = group.source.toLowerCase() as SourceKey;
              const config = SOURCE_CONFIG[key] ?? SOURCE_CONFIG["movie"];
              const ICON = config.icon;
              

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
                      <div className={`p-2 rounded-lg ${config.bg} ${config.color}`}>
                        <ICON className="w-5 h-5" />
                      </div>
                      <span className="font-semibold capitalize  text-slate-700">
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
