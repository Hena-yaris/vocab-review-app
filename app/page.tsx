"use client"

import { RefreshCcw,Plus,BookOpen } from "lucide-react"
import formatEthiopianDate from "@/lib/date";
import Card from "@/components/ui/Card";
import { mainLinks } from "@/data/mainLinks";
import Link from "next/link";
import ActionCard from "@/components/ui/ActionCard";


const recentVocabulary = [
  {
    word: "Ubiquitous",
    definition: "Present or found everywhere at the same time.",
  },
  {
    word: "Fastidious",
    definition: "Very careful about details; hard to satisfy.",
  },
  {
    word: "Obfuscate",
    definition: "To make something confusing or unclear on purpose.",
  },
];


const mainLink = [
  {
    iconBg: "bg-emerald-50",
    icon: <Plus />,
    iconColor: "text-emerald-600",

    addBookhref: "#",
    title: "Add New Word.",
    desc: "Save words from books or podcasts.",
  },

  {
    iconBg: "bg-orange-50",
    icon: <BookOpen />,
    iconColor: "text-orange-600",

    addBookhref: "#",
    title: "View Library.",
    desc: "Browse all saved vocabulary.",
  },
];

export default function Home() {

  const progress = 81;
 

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-6xl px-4 py-6 mx-auto">
        {/* welcome */}
        <header className="flex justify-between items-center mt-4">
          <h1 className="text-3xl font-semibold text-slate-900">
            Hello, Yared!
          </h1>
          <p className="text-slate-500">{formatEthiopianDate()}</p>
        </header>

        {/* review */}
        <Card className=" p-10 my-10 shadow-lg">
          <div className="flex flex-col">
            <h2 className="text-lg text-slate-600">
              You have <span className="font-semibold">15 words</span> to review
              today.
            </h2>
            <button className=" flex justify-center items-center gap-4 bg-linear-to-r from-teal-400 to-blue-500 shadow-lg shadow-teal-500/50 text-white px-6 h-14 rounded-xl max-w-xs w-full my-6">
              <RefreshCcw className="w-4 h-4" />
              <span className="font-bold">Start Review Session</span>
            </button>

            <div className="w-full">
              <div className="flex justify-between mb-3 text-slate-400">
                <p className="">Daily Goal Progress</p>
                <span>{progress}%</span>
              </div>
              <div className="bg-gray-200 h-3 w-full rounded-full">
                <div
                  className="h-full rounded-full bg-linear-to-r from-teal-400 to-blue-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Main links*/}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mainLinks.map((item)=> (
            <ActionCard key={item.href} {...item}/>
          ))}
        </section>

        {/* Recently added words */}
        <section className="mt-10">
          <h3 className="text-slate-900 font-semibold text-xl mb-6">
            Recently Added
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentVocabulary.map((rv, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl  border border-slate-200"
              >
                <h4 className="font-semibold pb-1">{rv.word}</h4>
                <p className="text-slate-500">{rv.definition}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}