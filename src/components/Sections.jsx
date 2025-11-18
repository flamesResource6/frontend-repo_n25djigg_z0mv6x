import { motion } from 'framer-motion';

export function ExecutiveSummary() {
  return (
    <section className="relative py-20" id="summary">
      <div className="mx-auto max-w-5xl px-4">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-4xl font-semibold text-white">Executive Summary</motion.h2>
        <div className="prose prose-invert prose-slate max-w-none mt-6">
          <p className="text-slate-300 text-lg">The Real Problem: AI's Potential is Locked Behind a Skill Barrier</p>
          <p>AI is supposed to democratize intelligence. Instead, it's creating a new elite: people who know how to prompt.</p>
          <p>ChatGPT, Claude, Gemini—they're incredibly powerful. But only if you know how to ask the right questions. Structure the perfect prompt. Provide the right context. Maintain continuity across conversations. Most people can't do this. And it's only getting harder as AI moves faster than anyone can keep up.</p>
          <p>The result? AI's transformational potential is locked behind a skill barrier that most people will never cross.</p>
          <ul>
            <li>Executives struggle to get strategic insights without learning prompt engineering</li>
            <li>Entrepreneurs waste hours fighting context loss instead of building</li>
            <li>Parents can't leverage AI for family planning because they don't know where to start</li>
            <li>Students get generic advice because they can't articulate complex prompts</li>
            <li>Career changers give up because "talking to AI" feels like work, not help</li>
          </ul>
          <p><strong>The brutal truth:</strong> AI was supposed to level the playing field. Instead, it's creating a new divide between those who can harness its power and those who can't.</p>
        </div>
      </div>
    </section>
  );
}

export function LevelsThePlayingField() {
  return (
    <section className="relative py-20" id="levels">
      <div className="mx-auto max-w-5xl px-4">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-4xl font-semibold text-white">Arc Levels the Playing Field for Everyone</motion.h2>
        <div className="prose prose-invert prose-slate max-w-none mt-6">
          <p>Arc is the first AI that doesn't require you to be good at AI to get life-changing results.</p>
          <p><strong>You just talk. Arc:</strong></p>
          <ul>
            <li>Asks the right questions so you don't have to figure out what to tell it</li>
            <li>Remembers everything forever so you never repeat yourself</li>
            <li>Connects the dots across your life and business automatically</li>
            <li>Builds strategic plans (Life Maps, Software Blueprints) without you knowing how to prompt for them</li>
            <li>Adapts to how you think instead of forcing you to think like a computer</li>
          </ul>
          <p><strong>Whether you're:</strong> A 55-year-old executive, a 22-year-old founder, a parent, or a student — Arc meets you where you are and unlocks intelligence that works for everyone.</p>
        </div>
      </div>
    </section>
  );
}

export function WhyDifferent() {
  return (
    <section className="relative py-20" id="different">
      <div className="mx-auto max-w-5xl px-4">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl md:text-4xl font-semibold text-white">Why Arc is Different: The Equalizer Architecture</motion.h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Memory</h3>
            <p className="text-slate-300 mt-2">The AI that never makes you repeat yourself. Infinite Memory Architecture with human-readable friendship memory and versioned life plans.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Logic</h3>
            <p className="text-slate-300 mt-2">Systems Thinking for Life: Life Maps and Software Blueprints that connect career, family, finance, values.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Personality</h3>
            <p className="text-slate-300 mt-2">Adaptive mentor who mirrors your communication style — visionary, reflective, analytical, or creative.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section className="relative py-20" id="pricing">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">Pricing</h2>
        <p className="text-slate-300 text-center mt-2">Simple, transparent plans.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-slate-300">Starter</div>
            <div className="text-4xl font-bold text-white mt-2">$10<span className="text-base text-slate-400">/mo</span></div>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm">
              <li>Core chat experience</li>
              <li>Basic memory</li>
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
      </div>
    </section>
  );
}
