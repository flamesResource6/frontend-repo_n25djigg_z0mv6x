import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";

export default function Navbar({ onOpenCommandCenter }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase = "text-sm md:text-base px-3 py-2 rounded-lg transition-colors";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? "backdrop-blur-md bg-slate-900/70" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-indigo-500/20 border border-indigo-400/30 grid place-items-center shadow-[0_0_25px_rgba(99,102,241,0.35)]">
              <div className="h-3 w-3 rounded-full bg-indigo-400"></div>
            </div>
            <span className="font-semibold text-white tracking-tight">Arc</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-slate-200">
            <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive ? 'text-white bg-white/5' : 'hover:text-white/90 text-slate-300'}`}>Home</NavLink>
            <NavLink to="/skills" className={({isActive}) => `${linkBase} ${isActive ? 'text-white bg-white/5' : 'hover:text-white/90 text-slate-300'}`}>Skills</NavLink>
            <NavLink to="/pricing" className={({isActive}) => `${linkBase} ${isActive ? 'text-white bg-white/5' : 'hover:text-white/90 text-slate-300'}`}>Pricing</NavLink>
            <NavLink to="/support" className={({isActive}) => `${linkBase} ${isActive ? 'text-white bg-white/5' : 'hover:text-white/90 text-slate-300'}`}>Support</NavLink>
          </nav>

          <button onClick={onOpenCommandCenter} className="inline-flex items-center gap-2 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 hover:text-indigo-200 border border-indigo-400/30 px-3 py-2 text-sm transition-colors shadow-[0_0_20px_rgba(99,102,241,0.25)]">
            <MessageSquare className="h-4 w-4" />
            Chat with Arc
          </button>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
    </header>
  );
}
