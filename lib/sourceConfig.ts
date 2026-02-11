import { BookOpen, Mic, Film, BookMarked } from "lucide-react";

export const SOURCE_CONFIG = {
  movie: {
    icon: Film,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  podcast: {
    icon: Mic,
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  book: {
    icon: BookMarked,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  bible: {
    icon: BookOpen,
    bg: "bg-teal-100",
    color: "text-teal-600",
  },
} as const;

//  important part
export type SourceKey = keyof typeof SOURCE_CONFIG;
