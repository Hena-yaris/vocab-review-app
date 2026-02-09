import { Plus, BookOpen } from "lucide-react";
import { MainLink } from "@/types/mainLink";




export const mainLinks:MainLink[] = [
  {
    title: "Add New Word",
    description: "Save words from books or podcasts",
    href: "/dashboard/vocabulary/add",
    icon: Plus,
    iconColor:"text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  {
    title: "View Library",
    description: "Browse all saved vocabulary",
    href: "/dashboard/vocabulary/list",
    icon: BookOpen,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
  },
];