"use client";
import formatEthiopianDate from "@/lib/date";

import { usePathname } from "next/navigation";
import { FilePlus, BookCheck, Library, Search,UserPen,CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";




const navItems = [
  {
    label: "Add Vocabulary",
    href: "/dashboard/vocabulary/add",
    icon: FilePlus,
  },
  {
    label: "Review Vocabulary",
    href: "/dashboard/vocabulary/review",
    icon: BookCheck,
  },
  {
    label: "All Vocabulary",
    href: "/dashboard/vocabulary/list",
    icon: Library,
  },
];

export default function VocabularyAddPage() {
  const pathname = usePathname();
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
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="flex items-center px-4 md:px-12 justify-between h-16 bg-white shadow-sm border-b border-slate-100 sticky top-0 z-50">
        <div className="flex items-center gap-4 flex-1">
          <Link
            href="/"
            className="mr-6 lg:hidden cursor-pointer transition-all duration-300 
                hover:scale-110 hover:-translate-x-2 active:scale-95
                ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          >
            <CircleArrowLeft size={30} className="text-teal-500" />
          </Link>
          <p className="bg-slate-100 px-4 h-10 flex items-center justify-center rounded-full text-sm font-medium text-slate-600 truncate">
            {formatEthiopianDate()}
          </p>
        </div>

        <div className="bg-slate-100 p-2.5 rounded-full hover:bg-slate-200 cursor-pointer transition-colors">
          <UserPen size={20} className="text-slate-700" />
        </div>
      </header>

      {/* Main Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* 1. SIDEBAR (Left) - Spans 2 of 12 columns */}
        <aside className="hidden lg:block lg:col-span-2 bg-white border-r border-slate-200 h-[calc(100vh-64px)] sticky top-16">
          <nav className="flex flex-col pt-24 px-4 gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  href={item.href}
                  key={item.href}
                  className="relative flex items-center p-3 rounded-xl overflow-hidden group"
                >
                  {/* Gradient layer */}
                  <span
                    className={`absolute inset-0 bg-linear-to-r from-teal-500 to-blue-600
      transition-opacity duration-300
      ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
    `}
                  />

                  {/* Content */}
                  <span
                    className={`relative z-10 flex items-center transition-colors duration-300
      ${isActive ? "text-white" : "text-slate-600 group-hover:text-white"}
    `}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {item.label}
                    </span>
                  </span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* 2. MAIN FORM (Center) - Spans 7 of 12 columns */}
        <main className="col-span-1 md:col-span-7  p-6 lg:p-12">
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
        <article className="hidden md:block md:col-span-5 lg:col-span-3  bg-white border-l border-slate-200 p-8 h-1/2 sticky top-35 mt-16 rounded-xl">
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
              <p className="text-slate-800 font-semibold mt-1">
                Movies & Shows
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
