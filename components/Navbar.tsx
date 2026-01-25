import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center gap-8 h-16   border-b border-border">
      <Link
        className="text-sm text-muted hover:text-foreground transition"
        href="/add"
      >
        Add Vocabulary
      </Link>
      <Link
        href="/review"
        className="text-sm text-muted hover:text-foreground transition"
      >
        Review today's
      </Link>
      <Link
        href="/vocabulary"
        className="text-sm text-muted hover:text-foreground transition"
      >
        All listes
      </Link>
    </nav>
  );
}
