import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-22% 0px -62% 0px', threshold: [0, 0.15, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#090b09]/85 backdrop-blur-2xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
        <a href="#home" onClick={closeMenu} className="group flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300" aria-label="Paterson Okele home">
          <span className="grid h-9 w-9 place-items-center border border-amber-300/35 bg-amber-300/[0.08] font-display text-[11px] font-extrabold tracking-[-0.08em] text-amber-200 transition-colors motion-reduce:transition-none group-hover:bg-amber-300/15">PO</span>
          <span className="font-display text-[13px] font-extrabold tracking-[0.17em] text-[#f1eee8]">PATER<span className="text-amber-300">SON</span></span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const sectionId = link.href.slice(1);
            const selected = active === sectionId;
            return (
              <a key={link.href} href={link.href} aria-current={selected ? 'location' : undefined} className={`group relative py-2 text-[13px] transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 ${selected ? 'text-amber-200' : 'text-stone-400 hover:text-stone-100'}`}>
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-amber-300 transition-all motion-reduce:transition-none duration-300 ${selected ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            );
          })}
        </div>

        <a href="#contact" className="hidden items-center gap-2 rounded-full border border-amber-200/35 px-4 py-2.5 text-[12px] font-semibold text-amber-100 transition motion-reduce:transition-none hover:border-amber-200 hover:bg-amber-200/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 md:inline-flex">
          Let’s talk <ArrowUpRight size={14} aria-hidden="true" />
        </a>

        <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-stone-200 transition motion-reduce:transition-none hover:border-amber-200/50 hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 md:hidden" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
          {open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
      </nav>

      <div id="mobile-navigation" className={`overflow-hidden border-t border-white/[0.06] bg-[#0b0d0b] transition-[max-height,opacity] motion-reduce:transition-none duration-300 motion-reduce:transition-none md:hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 border-transparent opacity-0'}`} aria-hidden={!open}>
        <div className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
          {links.map((link) => {
            const selected = active === link.href.slice(1);
            return (
              <a key={link.href} href={link.href} tabIndex={open ? 0 : -1} aria-current={selected ? 'location' : undefined} onClick={closeMenu} className={`flex items-center justify-between border-b border-white/[0.05] py-4 text-sm transition-colors motion-reduce:transition-none last:border-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300 ${selected ? 'text-amber-200' : 'text-stone-300 hover:text-amber-100'}`}>
                {link.label}<span className="text-amber-200/50" aria-hidden="true">↗</span>
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
