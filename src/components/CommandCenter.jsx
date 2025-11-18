import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function CommandCenter({ open, onClose }) {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Welcome to Arc. Ask anything. This demo streams responses for effect.' },
  ]);
  const [input, setInput] = useState('');
  const streamRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(streamRef.current);
  }, []);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input.trim() };
    setMessages((m) => [...m, userMsg, { role: 'assistant', content: '' }]);
    setInput('');

    const full = "Got it. Ill map your goals into a 90-day Life Map with weekly actions and metrics. First what does meaningful progress look like 30 days from now?";
    let i = 0;
    clearInterval(streamRef.current);
    streamRef.current = setInterval(() => {
      i += 2;
      setMessages((m) => {
        const clone = [...m];
        const idx = clone.findIndex((x, ix) => ix === clone.length - 1);
        clone[idx] = { ...clone[idx], content: full.slice(0, i) };
        return clone;
      });
      if (i >= full.length) clearInterval(streamRef.current);
    }, 30);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[60]">
          {/* split panels */}
          <motion.div initial={{x:'-100%'}} animate={{x:0}} exit={{x:'-100%'}} transition={{type:'spring', stiffness:90, damping:18}} className="absolute inset-y-0 left-0 right-1/2 bg-slate-900/70 backdrop-blur-xl border-r border-white/10" />
          <motion.div initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{type:'spring', stiffness:90, damping:18}} className="absolute inset-y-0 right-0 left-1/2 bg-slate-900/70 backdrop-blur-xl border-l border-white/10" />

          {/* content card */}
          <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.96, opacity:0}} transition={{type:'spring', stiffness:120, damping:16}} className="relative z-10 mx-auto mt-24 w-[min(100%,900px)] rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl shadow-[0_0_80px_-20px_rgba(99,102,241,0.6)] p-4 md:p-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="text-sm uppercase tracking-widest text-indigo-300">Arc Command Center</div>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/5 text-slate-300"><X className="h-5 w-5"/></button>
            </div>

            <div className="h-[50vh] md:h-[56vh] overflow-y-auto space-y-3 py-4 pr-1 custom-scroll">
              {messages.map((m, i) => (
                <div key={i} className={`${m.role === 'user' ? 'justify-end' : 'justify-start'} flex`}>
                  <div className={`${m.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-200'} max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed`}>{m.content}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=> e.key==='Enter' && send()} placeholder="Ask Arc anything…" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder:text-slate-500 outline-none focus:ring-2 ring-indigo-500/50"/>
              <button onClick={send} className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"><Send className="h-4 w-4"/>Send</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
