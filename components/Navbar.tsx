"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathname = usePathname(); // current route

    const  isActive = (path: string)=> pathname=== path;

  return (
    <nav className="flex justify-center items-center gap-6 h-16 border-b border-border">
      <Link
        href="/dashboard/vocabulary/add"
        className={`text-sm transition-all px-4 py-2 rounded-full ${
          isActive("/dashboard/vocabulary/add")
            ? "bg-gray-100 text-foreground"
            : "text-muted hover:text-foreground"
        }`}
      >
        Add Vocabulary
      </Link>

      <Link
        href="/dashboard/vocabulary/review"
        className={`text-sm transition-all px-4 py-2 rounded-full ${
          isActive("/dashboard/vocabulary/review")
            ? "bg-gray-100 text-foreground"
            : "text-muted hover:text-foreground"
        }`}
      >
        Review Today
      </Link>

      <Link
        href="/dashboard/vocabulary/list"
        className={`text-sm transition-all px-4 py-2 rounded-full ${
          isActive("/dashboard/vocabulary/list")
            ? "bg-gray-100 text-foreground"
            : "text-muted hover:text-foreground"
        }`}
      >
        All Lists
      </Link>
    </nav>
  );
}
