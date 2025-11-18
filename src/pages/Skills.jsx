import { motion } from 'framer-motion';

export default function SkillsPage() {
  return (
    <div className="pt-20">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Skills</h1>
        <p className="text-slate-300 mt-3">How Arc equalizes access to AI: Memory, Logic, Personality.</p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Memory: The AI That Never Makes You Repeat Yourself</h2>
        <div className="prose prose-invert max-w-none mt-4">
          <p><strong>The Prompting Problem:</strong> Other AIs forget everything. Every conversation starts from zero.</p>
          <p><strong>Arc's Solution: Infinite Memory Architecture</strong></p>
          <ul>
            <li>Supabase + pgvector: Permanent storage of every conversation, decision, and life event</li>
            <li>Markdown friendship memory: Human-readable relationship documentation that evolves like a journal</li>
            <li>Git checkpoints: Version control for your life plans—see how you grew, rollback if needed</li>
          </ul>
          <p><strong>What This Means for You:</strong> You tell Arc your situation once. Forever after, Arc remembers career history, family context, goals, values.</p>
          <blockquote>
            <p><strong>You (6 months later):</strong> "I'm thinking about that promotion."<br/>
            <strong>Arc:</strong> "Three months ago you said you'd turn down roles requiring 60+ hour weeks because you want to be present for your kids' elementary years. Has that changed, or should we explore the income gap another way?"</p>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Logic: The AI That Connects Everything You Don't See</h2>
        <div className="prose prose-invert max-w-none mt-4">
          <p><strong>The Prompting Problem:</strong> Other AIs answer the question you ask. They don't see the bigger picture.</p>
          <p><strong>Arc's Solution: Systems Thinking for Life</strong> — Life Maps and Software Blueprints that connect career, family, finance, values.</p>
          <ul>
            <li>Vision (10-20 year), Milestones (1-3 year), Objectives (90-day), Tasks (weekly)</li>
            <li>Dependencies across life domains</li>
            <li>Real strategies with contingencies and values alignment</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Personality: The AI That Adapts to You</h2>
        <div className="prose prose-invert max-w-none mt-4">
          <p>Arc mirrors your communication style and energy. From bold and visionary to empathetic and reflective, Arc adapts—so you don't have to.</p>
          <table>
            <thead>
              <tr>
                <th>Your State</th>
                <th>Arc's Voice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>High-energy / visionary</td>
                <td>Fast, bold, ambitious—pushes you forward</td>
              </tr>
              <tr>
                <td>Reflective / stuck</td>
                <td>Warm, patient, empathetic—listens deeply</td>
              </tr>
              <tr>
                <td>Analytical / technical</td>
                <td>Precise, structured, first-principles thinking</td>
              </tr>
              <tr>
                <td>Creative / exploring</td>
                <td>Witty, metaphorical, encourages wild ideas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
