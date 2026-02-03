"use client";

import { RefreshCcw} from "lucide-react"
import formatEthiopianDate from "@/lib/date";
import Card from "@/components/ui/Card";
import { mainLinks } from "@/data/mainLinks";
import { recentVocabulary } from "@/data/recentWords";
import ActionCard from "@/components/ui/ActionCard";

import Link from "next/link";
import VocabularyReCard from "@/components/ui/VocabularyReCard";

export default function Home() {

  const progress = 81;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-6xl px-4 py-12 mx-auto">
        {/* welcome */}
        <header className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-slate-100 pb-6 mt-8 gap-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Hello,{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-blue-600">
              Yared!
            </span>
          </h1>
          <p className="text-slate-500 font-medium flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-teal-400  animate-pulse"></span>
            
            
            {formatEthiopianDate()}
          </p>
        </header>

        {/* review card*/}
        <section className="my-10">
          <Card className="p-10  shadow-lg">
            <div className="flex flex-col">
              <h2 className="text-lg text-slate-600">
                You have <span className="font-semibold">15 words</span> to
                review today.
              </h2>
              <Link
                href="#"
                className="group relative flex justify-center items-center gap-3 bg-linear-to-br from-teal-400 to-blue-600 text-white px-8 h-16 rounded-2xl max-w-xs w-full my-8 font-bold text-lg shadow-[0_10px_20px_-10px_rgba(20,184,166,0.5)] hover:shadow-[0_20px_30px_-10px_rgba(20,184,166,0.7)] hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden"
              >
                {/* Subtle Shine Effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span>Start Review Session</span>
              </Link>

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
        </section>

        {/* Main links*/}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mainLinks.map((item) => (
            <ActionCard key={item.href} {...item} />
          ))}
        </section>

        {/* Recently added words */}
        <section className="mt-10">
          <h3 className="text-slate-900 font-semibold text-xl mb-6">
            Recently Added
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentVocabulary.map((item) => (
              <VocabularyReCard key={item.word} {...item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}



