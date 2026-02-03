import { Plus, BookOpen } from "lucide-react";

type MainLink = {
    title: string,
    description: string,
    href: string,
    icon: React.ElementType,
    iconColor:string,
    iconBg: string,
    
}


export const mainLinks:MainLink[] = [
  {
    title: "Add New Word",
    description: "Save words from books or podcasts",
    href: "/add",
    icon: Plus,
    iconColor:"text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  {
    title: "View Library",
    description: "Browse all saved vocabulary",
    href: "/library",
    icon: BookOpen,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
  },
];