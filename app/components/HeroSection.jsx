import { useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Check, Code2, ExternalLink, Layers3, Sparkles } from 'lucide-react';

const skills = [
  { name: 'React', value: '88%', width: 'w-[88%]' },
  { name: 'Next.js', value: '82%', width: 'w-[82%]' },
  { name: 'JavaScript (ES6+)', value: '85%', width: 'w-[85%]' },
  { name: 'Python', value: '75%', width: 'w-[75%]' },
  { name: 'Django', value: '65%', width: 'w-[65%]' },
  { name: 'Tailwind CSS', value: '90%', width: 'w-[90%]' },
];

const projects = [
  {
    title: 'Moniepoint Clone',
    category: 'web',
    label: 'Web App',
    image: '/images/moniepoint-project.png',
    alt: 'Moniepoint Clone project screenshot',
    description: 'Modern landing page showcasing creative financial services and brand presence.',
    tags: ['HTML', 'Tailwind CSS'],
    href: 'https://moniepoint-replication.vercel.app/',
  },
  {
    title: 'Aura Studio',
    category: 'ecommerce',
    label: 'Web App',
    image: '/images/aura.png',
    alt: 'Aura Studio project screenshot',
    description: 'We shape thoughtful brands and digital experiences with clarity, character, and a little bit of magic.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    href: 'https://aura-studio-fawn-five.vercel.app/',
  },
  {
    title: 'BrightEdge-Task-Manager',
    // category: 'dashboard',
    // label: 'Dashboard',
    image: '/images/Brighedge.png',
    alt: ' BrightEdge-Task-Manager screenshot',
    description: 'A clean, lightweight task manager built with Next.js and React. Add, complete, and delete tasks, with progress tracking and automatic saving in the browser.',
    tags: ['Next.JS', 'React'],
    href: 'https://brightedge-task-manager-tau.vercel.app/',
  },
];

const filters = [
  { label: 'All work', value: 'all' },
  { label: 'Web apps', value: 'web' },
  { label: 'E-commerce', value: 'ecommerce' },
  { label: 'Dashboards', value: 'dashboard' },
];

function SectionEyebrow({ number, children }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-200/80">
      <span className="font-mono text-amber-300/55">{number}</span>
      <span className="h-px w-8 bg-amber-200/35" aria-hidden="true" />
      {children}
    </div>
  );
}

function ImageFrame({ src, alt, kind = 'project', className = '' }) {
  const [failed, setFailed] = useState(false);
  const isPortrait = kind === 'portrait';
  return (
    <div className={`relative isolate overflow-hidden bg-[#151914] ${className}`}>
      {!failed ? (
        <img src={src} alt={alt} onError={() => setFailed(true)} className="absolute inset-0 h-full w-full object-cover transition motion-reduce:transition-none duration-700 group-hover:scale-[1.035] motion-reduce:transform-none" loading={isPortrait ? 'eager' : 'lazy'} />
      ) : (
        <div role="img" aria-label={`${alt}. Add the supplied file at ${src} to display it.`} className="absolute inset-0 grid place-items-center overflow-hidden bg-[radial-gradient(ellipse_at_58%_36%,rgba(177,125,67,0.20),transparent_48%),linear-gradient(145deg,#1b201a_0%,#10130f_56%,#18130e_100%)]">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(230,211,177,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(230,211,177,0.11)_1px,transparent_1px)] [background-size:38px_38px]" aria-hidden="true" />
          <div className="relative flex flex-col items-center gap-3 text-center">
            {isPortrait ? (
              <span className="grid h-20 w-20 place-items-center rounded-full border border-amber-100/20 bg-black/25 font-display text-2xl font-medium tracking-[-0.08em] text-amber-100/80">PO</span>
            ) : (
              <span className="grid h-12 w-12 place-items-center border border-amber-100/20 bg-black/20 text-amber-100/70"><Layers3 size={19} strokeWidth={1.4} aria-hidden="true" /></span>
            )}
            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-stone-400">Add supplied image to <span className="text-amber-100/65">public{src}</span></span>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080a08]/65 via-transparent to-white/[0.03]" aria-hidden="true" />
    </div>
  );
}

function SkillRow({ name, value, width }) {
  return (
    <div className="group/skill">
      <div className="mb-2 flex items-center justify-between gap-4 text-[13px]">
        <span className="text-stone-300 transition-colors motion-reduce:transition-none group-hover/skill:text-white">{name}</span>
        <span className="font-mono text-[11px] text-amber-200/75">{value}</span>
      </div>
      <div className="h-[3px] overflow-hidden rounded-full bg-white/[0.08]" role="meter" aria-label={`${name} proficiency`} aria-valuemin="0" aria-valuemax="100" aria-valuenow={Number.parseInt(value, 10)}>
        <div className={`h-full rounded-full bg-gradient-to-r from-amber-600 via-amber-300 to-[#f2d7a0] shadow-[0_0_14px_rgba(211,164,95,0.42)] transition-transform motion-reduce:transition-none duration-700 origin-left group-hover/skill:scale-y-[1.8] ${width}`} />
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const visibleProjects = projects.filter((project) => activeFilter === 'all' || project.category === activeFilter);

  return (
    <main>
      <section id="home" className="relative isolate scroll-mt-24 overflow-hidden border-b border-white/[0.06] pt-[76px] bg-[#0c0e0b]">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-40 top-12 h-[32rem] w-[32rem] rounded-full bg-amber-600/[0.09] blur-[110px]" />
          <div className="absolute -left-40 top-64 h-[24rem] w-[24rem] rounded-full bg-emerald-900/[0.12] blur-[110px]" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-12 lg:pb-24 lg:pt-20">
          <div className="relative z-10 order-2 lg:order-1">
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-200/15 bg-emerald-300/[0.055] px-3.5 py-2 text-[11px] font-medium tracking-wide text-emerald-100/85">
              <span className="relative flex h-2 w-2" aria-hidden="true"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-40 motion-reduce:animate-none" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" /></span>
              Available for freelance
            </div>

            <p className="mb-3 font-display text-[13px] font-medium tracking-[0.08em] text-stone-400">Hello, I’m Paterson Okele.</p>
            <h1 className="max-w-[780px] font-display text-[clamp(3.25rem,8vw,6.6rem)] font-semibold leading-[0.98] tracking-[-0.075em] text-[#f4f0e8]">
              Full Stack<br /><span className="bg-gradient-to-r from-amber-100 via-[#d9b479] to-amber-500 bg-clip-text text-transparent">Software</span><br />Engineer<span className="text-amber-300">.</span>
            </h1>
            <p className="mt-7 max-w-[590px] text-[15px] leading-7 text-stone-400 sm:text-base sm:leading-8">
              I design and engineer scalable digital products across web, mobile, desktop, and backend. From APIs and AI-powered tools to full-stack applications, I build software that solves real problems and drives business results.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-amber-200 px-5 text-[13px] font-semibold text-[#18150f] transition motion-reduce:transition-none hover:-translate-y-0.5 motion-reduce:transform-none hover:bg-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200 motion-reduce:transition-none">
                View projects <ArrowDownRight size={16} className="transition-transform motion-reduce:transition-none group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden="true" />
              </a>
              <a href="#contact" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 px-5 text-[13px] font-medium text-stone-200 transition motion-reduce:transition-none hover:border-amber-200/50 hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200 motion-reduce:transition-none">
                Contact me <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-[10px] font-medium uppercase tracking-[0.15em] text-stone-400">
              <span className="inline-flex items-center gap-2"><Code2 size={14} className="text-amber-200/70" aria-hidden="true" /> Web & mobile</span>
              <span className="inline-flex items-center gap-2"><BriefcaseBusiness size={14} className="text-amber-200/70" aria-hidden="true" /> Backend systems</span>
              <span className="inline-flex items-center gap-2"><Sparkles size={14} className="text-amber-200/70" aria-hidden="true" /> AI-powered tools</span>
            </div>
          </div>

          <div className="group relative order-1 mx-auto w-full max-w-[480px] lg:order-2 lg:ml-auto lg:mr-0">
            <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-amber-300/[0.12] via-transparent to-emerald-300/[0.06] blur-2xl" aria-hidden="true" />
            <div className="relative aspect-[0.93] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#121510] p-2 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:aspect-[1.04] lg:aspect-[0.88]">
              <ImageFrame src="/images/pat.jpeg" alt="Paterson Okele" kind="portrait" className="h-full rounded-[1.05rem]" />
              <div className="absolute inset-x-2 bottom-2 flex items-end justify-between rounded-b-[1.05rem] bg-gradient-to-t from-black/75 via-black/20 to-transparent px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
                <div>
                  <p className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">Paterson Okele</p>
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-amber-100/75">Full Stack Software Engineer</p>
                </div>
                <span className="mb-0.5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[10px] text-stone-100 backdrop-blur-md"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Available</span>
              </div>
              <span className="pointer-events-none absolute right-5 top-5 font-mono text-[10px] tracking-[0.2em] text-white/45">PROFILE</span>
            </div>
            <div className="absolute -bottom-7 -left-3 hidden rounded-2xl border border-white/10 bg-[#11140f]/85 px-4 py-3 shadow-xl backdrop-blur-xl sm:block lg:-left-10">
              <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-full border border-amber-200/15 bg-amber-200/[0.08] text-amber-100"><Check size={16} aria-hidden="true" /></span></div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-3 border-t border-white/[0.07] px-5 py-6 sm:px-8 lg:px-12 lg:py-7">
          {[
            { value: '5+', label: 'Projects done' },
            { value: '4+', label: 'Happy clients' },
            { value: '2y', label: 'Experience' },
          ].map((stat, index) => (
            <div key={stat.label} className={`px-3 sm:px-6 ${index > 0 ? 'border-l border-white/[0.07]' : ''}`}>
              <p className="font-display text-2xl font-semibold tracking-[-0.06em] text-[#f2eee6] sm:text-3xl">{stat.value}</p>
              <p className="mt-1.5 text-[9px] uppercase tracking-[0.14em] text-stone-400 sm:text-[10px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="relative scroll-mt-24 border-b border-white/[0.06] py-24 sm:py-28 lg:py-36 bg-[#0c0e0b]">
        <div className="pointer-events-none absolute right-0 top-10 -z-10 h-80 w-80 rounded-full bg-amber-800/[0.07] blur-[100px]" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionEyebrow number="01">A little about me</SectionEyebrow>
          <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
            <div>
              <h2 className="max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.06em] text-[#f2eee6] sm:text-5xl lg:text-[3.6rem]">Engineering with <span className="font-medium italic text-amber-200">purpose.</span></h2>
              <p className="mt-7 max-w-xl text-[14px] leading-7 text-stone-400 sm:text-[15px] sm:leading-8">
                I’m Paterson, a Full Stack Software Engineer. I specialize in building scalable digital products, from web to backend systems, APIs, desktop software and AI-powered tools.
              </p>
              <p className="mt-4 max-w-xl text-[14px] leading-7 text-stone-400 sm:text-[15px] sm:leading-8">
                My approach combines modern engineering practices with a focus on user experience. Every project I take on is built with maintainability, performance, and long-term value in mind.
              </p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 border-b border-amber-200/35 pb-2 text-[12px] font-medium text-amber-100 transition motion-reduce:transition-none hover:border-amber-100 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200">Let’s build something useful <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>

            <div className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 sm:p-7 lg:p-8">
              <div className="mb-8 flex items-end justify-between gap-4 border-b border-white/[0.07] pb-5">
                <div><p className="font-display text-xl font-semibold tracking-tight text-stone-100">Technical skills</p><p className="mt-1.5 text-[11px] text-stone-400">Tools and technologies in my stack</p></div>
                <span className="font-mono text-[10px] text-stone-400">06 / 06</span>
              </div>
              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {skills.map((skill) => <SkillRow key={skill.name} {...skill} />)}
              </div>
              <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.07] pt-5">
                {['Web', 'Mobile', 'Desktop', 'Backend', 'APIs', 'AI-powered tools'].map((capability) => <span key={capability} className="rounded-full border border-white/[0.09] px-3 py-1.5 text-[10px] text-stone-400">{capability}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 border-b border-white/[0.06] py-24 sm:py-28 lg:py-36 bg-[#0c0e0b]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <SectionEyebrow number="02">Selected work</SectionEyebrow>
              <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#f2eee6] sm:text-5xl lg:text-[3.6rem]">Projects with <span className="font-medium italic text-amber-200">purpose.</span></h2>
              <p className="mt-4 max-w-xl text-[13px] leading-6 text-stone-400 sm:text-sm">Explore my projects and see the work I’ve created using modern web technologies.</p>
            </div>
            <a href="#contact" className="inline-flex w-fit items-center gap-2 pb-1 text-[12px] font-medium text-stone-300 transition motion-reduce:transition-none hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200">Have a project in mind? <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>

          {/* <div className="mt-10 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by category">
            {filters.map((filter) => {
              const selected = activeFilter === filter.value;
              return <button key={filter.value} type="button" aria-pressed={selected} onClick={() => setActiveFilter(filter.value)} className={`rounded-full border px-4 py-2 text-[11px] font-medium transition motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 motion-reduce:transition-none ${selected ? 'border-amber-200/55 bg-amber-200/[0.12] text-amber-100' : 'border-white/10 text-stone-400 hover:border-white/25 hover:text-stone-200'}`}>{filter.label}</button>;
            })}
            <span className="ml-auto font-mono text-[10px] text-stone-400">{String(visibleProjects.length).padStart(2, '0')} projects</span>
          </div> */}

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <article key={`${project.title}-${project.category}`} className="group overflow-hidden rounded-2xl border border-white/[0.09] bg-[#10130f] transition motion-reduce:transition-none duration-300 hover:-translate-y-1 hover:border-amber-100/25 hover:shadow-[0_24px_60px_rgba(0,0,0,0.32)] motion-reduce:transform-none motion-reduce:transition-none">
                <div className="relative aspect-[1.58] overflow-hidden border-b border-white/[0.07]">
                  <ImageFrame src={project.image} alt={project.alt} className="h-full" />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-stone-100 backdrop-blur-md"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Live</div>
                  {/* <span className="absolute bottom-4 right-4 font-mono text-[9px] text-white/45">0{index + 1} / 0{projects.length}</span> */}
                </div>
                <div className="flex min-h-[218px] flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div><p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-amber-200/70">{project.label}</p><h3 className="font-display text-lg font-semibold tracking-tight text-stone-100">{project.title}</h3></div>
                   {/* <a href='ExternalLink'><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-stone-400 transition motion-reduce:transition-none group-hover:border-amber-200/35 group-hover:text-amber-100" aria-hidden="true"><ArrowUpRight size={15} /></span></a> */}
                  </div>
                  <p className="mt-3 flex-1 text-[12px] leading-6 text-stone-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-4">
                    <div className="flex flex-wrap gap-1.5">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[9px] text-stone-400">{tag}</span>)}</div>
                    <a href={project.href} target="_blank" rel="noopener noreferrer" onClick={(event) => { if (project.href === '#') event.preventDefault(); }} aria-label={`Visit ${project.title}; destination not supplied`} title="The original portfolio did not include a destination URL" className="inline-flex shrink-0 items-center gap-1.5 text-[10px] font-medium text-amber-100/75 transition motion-reduce:transition-none hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200">Visit site <ExternalLink size={12} aria-hidden="true" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-[9px] uppercase tracking-[0.18em] text-stone-400 sm:px-8 lg:px-12 bg-[#0c0e0b]">
        <span>Paterson Okele</span><a href="#home" className="inline-flex items-center gap-1.5 transition motion-reduce:transition-none hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber-200">Back to top <ArrowDown size={12} className="rotate-180" aria-hidden="true" /></a>
      </div>
    </main>
  );
}
