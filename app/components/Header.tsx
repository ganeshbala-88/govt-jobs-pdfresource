import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/70 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 px-6 md:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 group-hover:shadow-blue-600/40 group-hover:-translate-y-0.5 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent group-hover:to-indigo-500 transition-colors">
            Govt Resources
          </span>
        </Link>
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
          <a href="#resources" className="text-slate-600 hover:text-blue-600 transition-colors">Notifications</a>
          <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
