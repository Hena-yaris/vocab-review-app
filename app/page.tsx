import { RefreshCcw,Plus,BookOpen } from "lucide-react"
import formatEthiopianDate from "@/lib/date";

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
        <section className="bg-white p-10 my-10 rounded-2xl">
          <div className="flex flex-col">
            <h2 className="text-lg text-slate-600">
              You have <span className="font-semibold">15 words</span> to review
              today.
            </h2>
            <button className=" flex justify-center items-center gap-3 bg-linear-to-r from-teal-400 to-blue-500 text-white px-6 h-14 rounded-xl max-w-xs w-full my-6">
              <RefreshCcw className="w-4 h-4" />
              <span className="font-bold">Start Review Session</span>
            </button>

            <div className="w-full">
              <div className="flex justify-between mb-3 text-slate-400">
                <p className="">Daily Goal Progress</p>
                <span>{progress}%</span>
              </div>
              <div className="bg-gray-200 h-2 w-full rounded-full">
                <div
                  className="h-full rounded-full bg-linear-to-r from-teal-400 to-blue-500"
                  style={{ width: `${progress}%` }}
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main links*/}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Add new word */}
          <div className="flex items-center bg-white p-6 gap-6 rounded-2xl">
            <div className="flex items-center justify-center bg-emerald-50 p-4 rounded-full">
              <Plus className="w-6 h-6 text-emerald-600" />
            </div>

            <div>
              <h3 className="font-semibold">Add New Word</h3>
              <p className="text-slate-600 text-base">
                Save words from books or podcasts
              </p>
            </div>
          </div>

          {/* View words */}
          <div className="flex items-center bg-white p-6 gap-6 rounded-2xl">
            <div className="flex items-center justify-center bg-orange-50 p-4 rounded-full">
              <BookOpen className="w-6 h-6 text-orange-500" />
            </div>

            <div>
              <h3 className="font-semibold">View Library</h3>
              <p className="text-slate-600 text-base">
                Browse all saved vocabulary
              </p>
            </div>
          </div>
        </section>

        {/* Recently added words */}
        <section className="mt-10">
          <h3 className="text-slate-900 font-semibold text-xl mb-6">
            Recently Added
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl">
              <h4 className="font-semibold pb-1">Ubiquitous</h4>
              <p className="text-slate-500">
                Present or found everywhere at the same time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h4 className="font-semibold pb-1">Obfuscate</h4>
              <p className="text-slate-500">
                To make something confusing or unclear on purpose.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h4 className="font-semibold pb-1">Fastidious</h4>
              <p className="text-slate-500">
                Very careful about details; hard to satisfy.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}