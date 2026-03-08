export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/60 mt-20" id="contact">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Govt Resources
            </span>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-sm">
              Your trusted platform for discovering central and state government job opportunities, syllabus PDFs, and official notifications.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="/" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#resources" className="hover:text-blue-600 transition-colors">Latest Jobs</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 font-medium">
            Disclaimer: Not an official government website. We provide information for educational purposes.
          </p>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Govt Resources. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
