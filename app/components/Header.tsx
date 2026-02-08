export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-blue-700">
          Govt Resources
        </h1>
        <nav className="space-x-4 text-sm">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}
