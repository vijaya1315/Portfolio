export default function Referance() {
  return (
    // 1. OUTER WRAPPER: Learn flex centering & dark mode
    <section className="min-h-screen flex items-center justify-center bg-slate-950 p-6 font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* 2. BENTO GRID: Master CSS Grid in Tailwind */}
      <div className="grid max-w-6xl w-full grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* LARGE CARD: Master Typography & Gradients */}
        <div className="md:col-span-3 bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col justify-end min-h-[400px] group transition-all hover:border-cyan-500/50">
          <span className="text-cyan-400 font-mono text-sm mb-4 tracking-widest uppercase">Available for work</span>
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Unique</span> Digital <br /> Experiences.
          </h1>
          <p className="mt-6 text-slate-400 max-w-md text-lg leading-relaxed">
            Full-stack engineer specializing in GSAP animations and React Router 7 architectures.
          </p>
        </div>

        {/* SMALL STAT CARD: Master Flexbox & Hover Effects */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.02]">
          <div className="text-5xl font-bold text-white mb-2">5+</div>
          <p className="text-slate-400 text-sm uppercase tracking-tighter">Years Exp.</p>
        </div>

        {/* FEATURE CARD: Master Interaction (Buttons) */}
        <div className="bg-cyan-500 rounded-3xl p-8 flex flex-col justify-between items-start transition-all hover:bg-cyan-400 cursor-pointer">
          <div className="bg-white/20 p-3 rounded-full">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-950">Let's build something unique.</h3>
        </div>

        {/* IMAGE/LOGO CARD: Master Aspect Ratio & Object Fit */}
        <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden group">
          <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-10">
            {/* Animate this with GSAP later! */}
            <div className="w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <p className="absolute font-mono text-slate-500">Visual Portfolio Project 2026</p>
          </div>
        </div>

        {/* TECH STACK CARD: Master Lists & Labels */}
        <div className="md:col-span-1 bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <h4 className="text-white font-semibold mb-4">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {['React', 'GSAP', 'TS', 'Tailwind'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}