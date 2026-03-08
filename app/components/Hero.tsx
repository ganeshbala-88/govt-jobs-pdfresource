export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36">
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#eff6ff_100%)]"></div>
      
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/50 text-blue-700 text-sm font-semibold mb-8 shadow-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          Latest 2026 Notifications Available
        </div>
        
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
          All India <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">Govt Jobs</span> Resources
        </h2>
        
        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
          From official government websites to direct syllabus, PDFs, and crucial resources. Everything you need to succeed, in one unified platform.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#resources" className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 pointer-events-auto">
            Browse Jobs
          </a>
          <a href="#syllabus" className="px-8 py-3.5 rounded-full bg-white text-slate-700 font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm transition-all pointer-events-auto">
            Download Syllabus
          </a>
        </div>
      </div>
    </section>
  );
}