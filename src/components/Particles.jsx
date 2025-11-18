import React from 'react';

// Lightweight animated background fallback (no external deps)
// Replaces the particles effect to avoid missing package errors
export default function PlasmaBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_80%,rgba(167,139,250,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(30%_30%_at_80%_20%,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="absolute -inset-[10%] animate-[plasma_16s_ease-in-out_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.10),rgba(167,139,250,0.10),rgba(56,189,248,0.08),rgba(99,102,241,0.10))] mix-blend-soft-light opacity-70" />
      <style>{`
        @keyframes plasma {
          0% { transform: translate3d(0,0,0) rotate(0deg) scale(1); filter: blur(40px); }
          25% { transform: translate3d(-2%,1%,0) rotate(30deg) scale(1.05); filter: blur(52px); }
          50% { transform: translate3d(1%,-2%,0) rotate(90deg) scale(1.02); filter: blur(46px); }
          75% { transform: translate3d(2%,2%,0) rotate(140deg) scale(1.06); filter: blur(54px); }
          100% { transform: translate3d(0,0,0) rotate(360deg) scale(1); filter: blur(40px); }
        }
      `}</style>
    </div>
  );
}
