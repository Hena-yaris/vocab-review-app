"use client";


import {  Search, } from "lucide-react";
import { useState } from "react";





export default function VocabularyAddPage() {
  
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      term : form.term.value,
      type: form.type.value,
      meaning: form.meaning.value,
      example: form.example.value,
      source: form.source.value,

    }

    const res = await fetch("/api/vocabulary/add",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (!res.ok) {
      alert("Something went wrong");
      return;
    }

    form.reset();
    alert("Vocabulary saved!");

  }

  return (
    <div className="grid grid-cols-12 gap-0">
      {/* 2. MAIN FORM (Center) */}
      <main className="col-span-12 md:col-span-7 lg:col-span-9 p-6 lg:p-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold  text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-blue-600 mb-8">
            Add New Vocabulary
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="term"
                placeholder="Word / phrase / Slang"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white shadow-sm focus:ring-2 focus:ring-teal-500 outline-none transition-all"
              />
            </div>

            <div className="relative">
              <select
                name="type"
                defaultValue=""
                className="w-full md:w-1/2 appearance-none px-5 py-3 rounded-xl border border-slate-200 bg-white text-slate-600 font-medium focus:ring-2 focus:ring-teal-500 outline-none cursor-pointer"
              >
                <option value="" disabled>
                  Select type
                </option>
                <optgroup label="Vocabulary">
                  <option value="word">Word</option>
                  <option value="phrase">Phrase</option>
                  <option value="slang">Slang</option>
                </optgroup>

                <optgroup label="Expressions">
                  <option value="idiom">Idiom</option>
                  <option value="phrasal-verb">Phrasal Verb</option>
                  <option value="collocation">Collocation</option>
                </optgroup>

                <optgroup label="Language Skills">
                  <option value="pronunciation">Pronunciation</option>
                  <option value="spelling">Spelling</option>
                </optgroup>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-bold text-slate-500 uppercase tracking-tight">
                Definition
              </label>
              <textarea
                name="meaning"
                className="w-full p-4 rounded-2xl border border-slate-200 bg-white min-h-25 focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-bold text-slate-500 uppercase tracking-tight">
                Example Sentence
              </label>
              <textarea
                name="example"
                className="w-full p-4 rounded-2xl border border-slate-200 bg-white min-h-25 focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>

            <div className="relative">
              <Search
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                name="source"
                placeholder="Source (book, movie,bible, etc)"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 text-white font-bold text-lg rounded-2xl shadow-lg hover:opacity-90 transition-opacity  ${loading ? "bg-slate-400 cursor-not-allowed" : " bg-linear-to-r from-teal-500 to-blue-600 cursor-pointer"}`}
            >
              {loading ? "Saving Vocabulary..." : "Save Vocabulary"}
            </button>
          </form>
        </div>
      </main>

      {/* 3. STATS (Right) - Spans 3 of 12 columns */}
      <article className="hidden md:block md:col-span-5 lg:col-span-3  bg-white border-l border-slate-200 p-8 h-1/2 sticky top-32 mt-16 rounded-xl">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
          Stats Summary
        </h3>

        <div className="space-y-8">
          <div>
            <span className="block text-5xl font-black text-teal-600 tracking-tighter">
              421
            </span>
            <p className="text-slate-600 font-medium">Total Words Added</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase">
              Top Source
            </p>
            <p className="text-slate-800 font-semibold mt-1">Movies & Shows</p>
          </div>
        </div>
      </article>
    </div>
  );
}
