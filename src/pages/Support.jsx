export default function SupportPage(){
  return (
    <div className="pt-20">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Support</h1>
        <p className="text-slate-300 mt-3">Were here to help. Email hello@justaskarc.com</p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">FAQ</h3>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc pl-5">
              <li>How is my memory stored? – Secure database with encryption.</li>
              <li>Can I export my plans? – Yes, as Markdown and PDF.</li>
              <li>Is there a free trial? – Coming soon.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Contact</h3>
            <p className="text-slate-300">Email us anytime at hello@justaskarc.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
