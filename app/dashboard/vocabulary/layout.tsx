"use client";

import formatEthiopianDate from "@/lib/date";
import { usePathname } from "next/navigation";

import { ScanSearch, Landmark,LayoutGrid, UserPen,CopyPlus } from "lucide-react";
import Link from "next/link";




const navItems = [
  {
    label: "Add Vocabulary",
    href: "/dashboard/vocabulary/add",
    icon: CopyPlus,
  },
  {
    label: "Review Vocabulary",
    href: "/dashboard/vocabulary/review",
    icon: ScanSearch,
  },
  {
    label: "All Vocabulary",
    href: "/dashboard/vocabulary/list",
    icon: Landmark,
  },
];


export default function VocabularyLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="flex items-center px-4 md:px-12 justify-between h-16 bg-white shadow-sm border-b border-slate-100 sticky top-0 z-50">
        <div className="flex items-center gap-4 flex-1">
          <Link
            href="/"
            className="mr-6 cursor-pointer transition-all duration-300 
                                hover:-translate-x-2 active:scale-95
                               ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          >
            <LayoutGrid size={30} className="text-teal-500" />
          </Link>
          <p className="bg-slate-100 px-4 h-10 flex items-center justify-center rounded-full text-sm font-medium text-slate-600 truncate">
            {formatEthiopianDate()}
          </p>
        </div>

        <div className="bg-slate-100 p-2.5 rounded-full hover:bg-slate-200 cursor-pointer transition-colors">
          <UserPen size={20} className="text-slate-700" />
        </div>
      </header>

      {/*    GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* SIDEBAR */}
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

        {/* PAGE CONTENT */}
        <section className="col-span-12 lg:col-span-10">
          <div className="w-full"> {children}</div>
        </section>
      </div>
    </div>
  );
}