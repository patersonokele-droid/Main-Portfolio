import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUp, ArrowUpRight, Mail } from 'lucide-react';

const formspreeEndpoint = 'https://formspree.io/f/myezdddw';

export default function Footer() {
     const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');
    const form = event.currentTarget;
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        const detail = Array.isArray(result.errors) ? result.errors.map((error) => error.message).filter(Boolean).join(' ') : '';
        throw new Error(detail || 'The message could not be sent. Please try again or email me directly.');
      }
      setStatus('success');
      setMessage('Message sent. Thanks for reaching out — I’ll get back to you soon.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again or email me directly.');
    }
  }

  function backToTop() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'instant' : 'smooth' });
  }

  return (
    <>
      <footer id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.07] bg-[#0c0e0b]">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-amber-700/[0.08] blur-[110px]" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mb-12 grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.23em] text-amber-200/75"><span className="font-mono text-amber-300/50">03</span><span className="h-px w-8 bg-amber-200/35" aria-hidden="true" /> Get in touch</div>
              <h2 className="max-w-lg font-display text-5xl font-semibold leading-[0.98] tracking-[-0.07em] text-[#f2eee6] sm:text-6xl">Let’s work<br /><span className="font-medium italic text-amber-200">together.</span></h2>
              <p className="mt-6 max-w-md text-[13px] leading-7 text-stone-400 sm:text-sm sm:leading-7">I’m open to full-stack and frontend missions, short or long-term. Landing page, full product build, or just a second pair of eyes — let’s talk.</p>

              <div className="mt-9 space-y-4">
                <a href="mailto:patersonokele@gmail.com" className="group flex w-fit items-center gap-3 text-[13px] text-stone-300 transition motion-reduce:transition-none hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"><span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-amber-200/80 transition motion-reduce:transition-none group-hover:border-amber-200/40"><Mail size={15} aria-hidden="true" /></span>patersonokele@gmail.com<ArrowUpRight size={13} className="text-stone-400 transition motion-reduce:transition-none group-hover:text-amber-200" aria-hidden="true" /></a>
                <div className="flex items-center gap-3 text-[12px] text-stone-400">
<a
  href="https://www.linkedin.com/in/paterson-okele-9bba31227"
  target="_blank"
  rel="noreferrer"
  aria-label="Visit LinkedIn profile"
  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-amber-200/80 transition hover:border-amber-200/40"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
  </svg>
</a><span>linkedin.com/in/paterson-okele-9bba31227</span></div>
                
<div className="flex items-center gap-3 text-[12px] text-stone-400">
  <a
    href="https://github.com/patersonokele-droid"
    target="_blank"
    rel="noreferrer"
    aria-label="Visit GitHub profile"
    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-amber-200/80 transition hover:border-amber-200/40"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  </a>
  <span>github.com/patersonokele-droid</span>
</div>

              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.07] pt-5 text-[10px]">
                <a href="https://www.linkedin.com/in/paterson-okele-9bba31227" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-stone-400 transition motion-reduce:transition-none hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200">LinkedIn <ArrowUpRight size={11} aria-hidden="true" /></a>
                <a href="https://github.com/patersonokele-droid" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-stone-400 transition motion-reduce:transition-none hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200">GitHub <ArrowUpRight size={11} aria-hidden="true" /></a>
                <a href="#" onClick={(event) => event.preventDefault()} aria-label="Twitter or X profile link was not supplied" className="inline-flex items-center gap-1.5 text-stone-400 transition motion-reduce:transition-none hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200">Twitter / X <ArrowUpRight size={11} aria-hidden="true" /></a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.09] bg-[#11140f]/90 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.2)] sm:p-8">
              {status === 'success' ? (
                <div className="flex min-h-[340px] flex-col items-start justify-center" role="status" aria-live="polite">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-emerald-200/20 bg-emerald-200/[0.08] text-emerald-200"><ArrowRight size={19} aria-hidden="true" /></span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-stone-100">Message sent.</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-stone-400">{message}</p>
                  <button type="button" onClick={() => { setStatus('idle'); setMessage(''); }} className="mt-7 text-[12px] font-medium text-amber-100 underline decoration-amber-100/35 underline-offset-4 transition motion-reduce:transition-none hover:decoration-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-200">Send another message</button>
                </div>
              ) : (
                <>
                  <div className="mb-7"><p className="font-display text-xl font-semibold text-stone-100">Tell me what you’re building.</p><p className="mt-1.5 text-[11px] text-stone-400">I’ll get back to you as soon as I can.</p></div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className="mb-2 block text-[11px] font-medium text-stone-300">Name <span className="text-amber-200">*</span></label>
                        <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Jane Smith" required className="min-h-11 w-full rounded-lg border border-white/10 bg-[#090b09] px-3.5 text-[12px] text-stone-100 outline-none transition motion-reduce:transition-none placeholder:text-stone-400 focus:border-amber-200/60 focus:ring-2 focus:ring-amber-200/10" />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="mb-2 block text-[11px] font-medium text-stone-300">Email <span className="text-amber-200">*</span></label>
                        <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" required className="min-h-11 w-full rounded-lg border border-white/10 bg-[#090b09] px-3.5 text-[12px] text-stone-100 outline-none transition motion-reduce:transition-none placeholder:text-stone-400 focus:border-amber-200/60 focus:ring-2 focus:ring-amber-200/10" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="mb-2 block text-[11px] font-medium text-stone-300">Message <span className="text-amber-200">*</span></label>
                      <textarea id="contact-message" name="message" rows="5" placeholder="Tell me about your project..." required className="w-full resize-y rounded-lg border border-white/10 bg-[#090b09] px-3.5 py-3 text-[12px] leading-6 text-stone-100 outline-none transition motion-reduce:transition-none placeholder:text-stone-400 focus:border-amber-200/60 focus:ring-2 focus:ring-amber-200/10" />
                    </div>
                    {status === 'error' && <p role="alert" className="rounded-lg border border-red-300/15 bg-red-300/[0.06] px-3.5 py-3 text-[11px] leading-5 text-red-200">{message}</p>}
                    <button type="submit" disabled={status === 'sending'} className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-amber-200 px-5 text-[12px] font-semibold text-[#18150f] transition motion-reduce:transition-none hover:bg-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber-200 disabled:cursor-wait disabled:opacity-65 motion-reduce:transition-none">
                      {status === 'sending' ? 'Sending…' : 'Send message'} <ArrowUpRight size={15} className="transition-transform motion-reduce:transition-none group-hover:-translate-y-0.5 motion-reduce:transform-none group-hover:translate-x-0.5" aria-hidden="true" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 border-t border-white/[0.07] pt-6 text-[10px] text-stone-400 sm:flex-row sm:items-center">
            <p>© {year ?? '2026'} Paterson Okele. All rights reserved.</p>
            <p>Designed &amp; built by <span className="text-amber-200/75">Paterson</span></p>
          </div>
        </div>
      </footer>

      <button type="button" onClick={backToTop} aria-label="Back to top" title="Back to top" className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-amber-100/25 bg-[#171912]/90 text-amber-100 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition motion-reduce:transition-none hover:-translate-y-1 hover:border-amber-100/60 hover:bg-[#25271f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber-200 motion-reduce:transition-none sm:bottom-7 sm:right-7">
        <ArrowUp size={16} aria-hidden="true" />
      </button>
    </>
  );
}
