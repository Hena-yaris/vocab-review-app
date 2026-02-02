import { RefreshCcw,Plus,BookOpen } from "lucide-react"
import formatEthiopianDate from "@/lib/date";

export default function Home() {
 

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
        <section className="bg-white p-8 my-10">
          <div className="flex flex-col">
            <h2 className="text-lg text-slate-600">
              You have <span className="font-semibold">15 words</span> to review
              today.
            </h2>
            <button className=" flex justify-center items-center gap-3 bg-linear-to-r from-teal-500 to-blue-500 text-white px-6 h-14 rounded-xl max-w-xs w-full my-6">
              <RefreshCcw className="w-4 h-4"/>
              <span className="font-bold">Start Review Session</span>
            </button>

            <div>
              <p>Daily Goal Progress</p>
              <p>71%</p>
            </div>
            <div>
              <span>Progress bar</span>
            </div>
          </div>
        </section>

        {/* Main links*/}
        <section>
          {/* Add new word */}
          <div>
            <Plus />
            <div>
              <h3>Add New Word</h3>
              <p>Save words from books or podcasts</p>
            </div>
          </div>

          {/* View words */}
          <div>
            <BookOpen />
            <div>
              <h3>View Library</h3>
              <p>Browse all saved vocabulary</p>
            </div>
          </div>
        </section>

        {/* Recently added words */}
        <section>
          <h3>Recently Added</h3>
          <div>
            <div>
              <h4>Breaking Bad</h4>
              <p>Awesome tv series...</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}