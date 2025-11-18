import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Pricing from './pages/Pricing';
import Support from './pages/Support';
import CommandCenter from './components/CommandCenter';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar onOpenCommandCenter={() => setOpen(true)} />
      <CommandCenter open={open} onClose={() => setOpen(false)} />
      <Routes>
        <Route path="/" element={<Home onEnter={() => setOpen(true)} />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  )
}

export default App
