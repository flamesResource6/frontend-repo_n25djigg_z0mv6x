import { motion } from 'framer-motion';

export default function Hero({ onEnter }) {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Content */}
      <div className="relative z-[1] w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-28">
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold tracking-tight text-white"
              >
                ARC | AI Life Navigator
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-5 text-slate-300 text-lg md:text-xl leading-relaxed"
              >
                The first AI that makes intelligence accessible to everyone. No prompt engineering. No context juggling. Just talk, and Arc does the rest.
              </motion.p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={onEnter}
                  className="relative inline-flex items-center justify-center px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_10px_40px_-10px_rgba(99,102,241,0.9)] transition-colors"
                >
                  Enter Command Center
                </button>
                <a href="#pricing" className="px-5 py-3 rounded-xl bg-white/5 text-slate-200 hover:bg-white/10 transition-colors">
                  See Pricing
                </a>
              </div>

              <div className="mt-6 text-xs text-slate-400">Dark-mode only • Indigo/Violet • Built for speed</div>
            </div>

            {/* Visual panel (Spline-free fallback) */}
            <div className="relative h-[360px] md:h-[520px]">
              <div className="absolute inset-0 -right-10 rounded-3xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-xl">
                {/* Animated conic gradient */}
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
                  className="absolute -inset-10 opacity-70"
                  style={{
                    background:
                      'conic-gradient(from 90deg at 50% 50%, rgba(99,102,241,0.15), rgba(167,139,250,0.12), rgba(14,165,233,0.10), rgba(99,102,241,0.15))',
                    filter: 'blur(20px)'
                  }}
                />

                {/* Glass content */}
                <div className="relative z-[1] h-full w-full grid grid-rows-3 gap-3 p-6">
                  <div className="rounded-2xl bg-slate-900/40 border border-white/5 p-4">
                    <div className="h-3 w-24 rounded bg-white/10" />
                    <div className="mt-3 h-2 w-2/3 rounded bg-white/5" />
                  </div>
                  <div className="rounded-2xl bg-slate-900/40 border border-white/5 p-4 grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 border border-white/5 h-24" />
                    <div className="rounded-xl bg-white/5 border border-white/5 h-24" />
                    <div className="rounded-xl bg-white/5 border border-white/5 h-24" />
                  </div>
                  <div className="rounded-2xl bg-slate-900/40 border border-white/5 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400/80 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
                      <div className="h-2 w-24 rounded bg-white/10" />
                    </div>
                    <div className="h-2 w-16 rounded bg-white/10" />
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 -inset-12 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient edges */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/60" />
    </section>
  );
}
