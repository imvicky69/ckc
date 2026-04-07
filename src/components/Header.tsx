import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b bg-transparent border-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-full bg-brand p-2 w-10 h-10 flex items-center justify-center">
            <span className="text-white font-bold">CK</span>
          </div>
          <div>
            <div className="text-lg font-semibold">Concept King</div>
            <div className="text-xs text-slate-500">Coaching & Mentorship</div>
          </div>
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          <Link href="/courses" className="text-slate-700 hover:text-brand transition-colors">Courses</Link>
          <Link href="/about" className="text-slate-700 hover:text-brand transition-colors">About</Link>
          <Link href="/blog" className="text-slate-700 hover:text-brand transition-colors">Blog</Link>
          <Link href="/contact" className="btn-primary">Contact</Link>
        </nav>

        <div className="sm:hidden">
          <Link href="/contact" className="btn-primary">Get Started</Link>
        </div>
      </div>
    </header>
  );
}
