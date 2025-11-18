import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Pricing from './pages/Pricing';
import Support from './pages/Support';
import CommandCenter from './components/CommandCenter';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar onOpenCommandCenter={() => setOpen(true)} />
      <CommandCenter open={open} onClose={() => setOpen(false)} />
      <ErrorBoundary
        fallback={
          <div className="p-6 text-center">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-xl font-semibold text-white">Something went wrong loading a section.</h2>
              <p className="mt-2 text-slate-400">Please refresh the page. If the problem persists, we\'ll automatically switch to a lightweight visual.
              </p>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home onEnter={() => setOpen(true)} />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </ErrorBoundary>
    </div>
  )
}

export default App
