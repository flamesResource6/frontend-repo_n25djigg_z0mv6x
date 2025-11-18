export default function PricingPage(){
  return (
    <div className="pt-20">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Pricing</h1>
        <p className="text-slate-300 mt-3">Pick the plan that meets you where you are.</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-slate-300">Starter</div>
            <div className="text-4xl font-bold text-white mt-2">$10<span className="text-base text-slate-400">/mo</span></div>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm">
              <li>Core chat experience</li>
              <li>Memory basics</li>
              <li>Standard support</li>
            </ul>
            <button className="mt-6 w-full rounded-xl bg-white/10 hover:bg-white/15 text-white py-2">Get Started</button>
          </div>

          <div className="rounded-2xl border-2 border-indigo-500/50 bg-indigo-500/10 p-6 shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)]">
            <div className="text-indigo-300">Developer</div>
            <div className="text-4xl font-bold text-white mt-2">$20<span className="text-base text-indigo-300">/mo</span></div>
            <ul className="mt-4 space-y-2 text-indigo-100/90 text-sm">
              <li>Advanced tools</li>
              <li>Expanded memory</li>
              <li>Priority support</li>
            </ul>
            <button className="mt-6 w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white py-2">Choose Developer</button>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-slate-300">Pro</div>
            <div className="text-4xl font-bold text-white mt-2">$40<span className="text-base text-slate-400">/mo</span></div>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm">
              <li>Full system thinking</li>
              <li>Infinite memory vaults</li>
              <li>Dedicated support</li>
            </ul>
            <button className="mt-6 w-full rounded-xl bg-white/10 hover:bg-white/15 text-white py-2">Go Pro</button>
          </div>
        </div>
      </section>
    </div>
  );
}
