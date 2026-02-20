import { BentoHero } from "@/components/bento-hero";
import { BentoTimeline } from "@/components/bento-timeline";
import { BentoProjects } from "@/components/bento-projects";
import { BentoSkills } from "@/components/bento-skills";
import { BentoTravel } from "@/components/bento-travel";

export default function HomePage() {
  return (
    <main className="light-theme min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-8">

        {/* ── Full-width hero: illustration + name + bio + signature ── */}
        <BentoHero />

        {/* ── My Journey full-width section ── */}
        <section id="journey" className="mb-4">
          <div className="bento-card overflow-hidden relative" style={{
            background: 'linear-gradient(135deg, #fdf8f0 0%, #f8f0e3 60%, #f2e8d5 100%)',
            boxShadow: '0 20px 60px rgba(180,150,100,0.10), 0 8px 24px rgba(180,150,100,0.07), inset 0 1px 0 rgba(255,255,255,0.7)',
            transform: 'perspective(1000px) rotateX(1deg)',
            border: '1.5px solid rgba(0,0,0,0.18)',
          }}>
            {/* 2014–Present top-right corner */}
            <span className="absolute top-4 right-4 md:right-6 text-[10px] font-mono tracking-widest" style={{ color: '#7a6040', opacity: 0.55 }}>2014 – Present</span>

            {/* Header strip */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-8 pt-7 pb-3 gap-2">
              <h2 style={{
                fontFamily: 'var(--font-dancing)',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: '#5c4020',
                fontWeight: 400,
                lineHeight: 1,
                textShadow: '0 1px 2px rgba(92,64,32,0.12)',
              }}>
                My Journey
              </h2>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ color: '#7a6040', background: 'rgba(120,96,64,0.08)', border: '1px solid rgba(120,96,64,0.18)' }}>🎓 Education</span>
                <span className="text-xs font-mono" style={{ color: '#7a6040' }}>+</span>
                <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ color: '#7a6040', background: 'rgba(120,96,64,0.08)', border: '1px solid rgba(120,96,64,0.18)' }}>💼 Work Experience</span>
              </div>
            </div>
            {/* Thin accent line */}
            <div className="mx-4 md:mx-8 mb-5 h-px" style={{ background: 'linear-gradient(to right, #7a604055, transparent)' }} />
            {/* Timeline image */}
            <div className="px-3 md:px-6 pb-7">
              <img
                src="/images/myjourney-timeline.png"
                alt="My Journey Timeline"
                className="w-full h-auto object-contain rounded-xl"
                style={{
                  boxShadow: '0 8px 32px rgba(10,60,40,0.12), 0 2px 8px rgba(10,60,40,0.08)',
                  transform: 'perspective(800px) rotateX(-1deg)',
                }}
              />
            </div>
          </div>
        </section>

        {/* ── Achievements full-width section ── */}
        <section id="achievements" className="mb-4">
          <div className="bento-card overflow-hidden relative" style={{
            background: 'linear-gradient(135deg, #fdf8f0 0%, #f8f0e3 60%, #f2e8d5 100%)',
            boxShadow: '0 20px 60px rgba(180,150,100,0.10), 0 8px 24px rgba(180,150,100,0.07), inset 0 1px 0 rgba(255,255,255,0.7)',
            border: '1.5px solid rgba(0,0,0,0.18)',
          }}>
            {/* Header strip */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-8 pt-7 pb-3 gap-2">
              <h2 style={{
                fontFamily: 'var(--font-dancing)',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: '#5c4020',
                fontWeight: 400,
                lineHeight: 1,
                textShadow: '0 1px 2px rgba(92,64,32,0.12)',
              }}>
                Achievements
              </h2>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ color: '#7a6040', background: 'rgba(120,96,64,0.08)', border: '1px solid rgba(120,96,64,0.18)' }}>🏆 Highlights</span>
              </div>
            </div>
            {/* Thin accent line */}
            <div className="mx-4 md:mx-8 mb-5 h-px" style={{ background: 'linear-gradient(to right, #7a604055, transparent)' }} />
            {/* Achievement cards — full width */}
            <div className="px-4 md:px-8 pb-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: '🏆', title: 'ProdHacks Winner', subtitle: 'Hackathon · CMU · 2025', bg: 'linear-gradient(135deg, #fffbeb, #fff7ed)', border: 'rgba(217,119,6,0.25)' },
                  { icon: '🔬', title: '3 U.S. Patents', subtitle: 'Imaging & Camera Tech', bg: 'linear-gradient(135deg, #f5f3ff, #ede9fe)', border: 'rgba(124,58,237,0.22)' },
                  { icon: '📈', title: '3 Promotions', subtitle: '2 Early · 5 Yrs · Samsung', bg: 'linear-gradient(135deg, #eff6ff, #eef2ff)', border: 'rgba(37,99,235,0.22)' },
                  { icon: '🥇', title: 'Best Patent of Year', subtitle: 'Samsung Annual Awards', bg: 'linear-gradient(135deg, #fffbeb, #fef9c3)', border: 'rgba(202,138,4,0.28)' },
                  { icon: '🌟', title: 'Samsung Citizen Award', subtitle: 'Technology Excellence · 2020', bg: 'linear-gradient(135deg, #fdf4ff, #fae8ff)', border: 'rgba(168,85,247,0.22)' },
                  { icon: '🎥', title: 'Best Demo Award', subtitle: 'Illuminare · TechGlanz · 2019', bg: 'linear-gradient(135deg, #fff1f2, #fdf2f8)', border: 'rgba(225,29,72,0.22)' },
                  { icon: '🌟', title: 'Samsung Citizen Award', subtitle: 'Technology Excellence · 2019', bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', border: 'rgba(22,163,74,0.22)' },
                ].map((a, i) => (
                  <div key={i} className="rounded-xl p-3 flex flex-col gap-1.5" style={{
                    background: a.bg,
                    border: `1px solid ${a.border}`,
                    boxShadow: '0 2px 8px rgba(92,64,32,0.06)',
                  }}>
                    <span className="text-2xl">{a.icon}</span>
                    <span className="font-semibold text-xs leading-tight" style={{ color: '#3a2a10' }}>{a.title}</span>
                    <span className="text-[10px] font-mono" style={{ color: '#7a6040' }}>{a.subtitle}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Photo gallery — fixed height, natural width, no crop, scrollable on mobile */}
            <div className="px-4 md:px-8 pb-7 flex flex-row gap-3 items-end overflow-x-auto">
              {[
                { src: '/images/achievements/awards3.jpeg', alt: 'ProdHacks Winner — CMU 2025' },
                { src: '/images/achievements/awards2.jpeg', alt: 'Samsung Annual Award' },
                { src: '/images/achievements/awards4.jpeg', alt: 'Samsung Citizen Award' },
                { src: '/images/achievements/awards5.jpeg', alt: 'Samsung Excellence Award' },
                { src: '/images/achievements/awards6.jpeg', alt: 'Samsung Citizen Award — Technology Excellence' },
                { src: '/images/achievements/awards1.png',  alt: 'Award Certificates' },
              ].map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="rounded-lg flex-shrink-0 w-auto"
                  style={{ height: '140px', boxShadow: '0 4px 16px rgba(92,64,32,0.12)' }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Socials full-width section ── */}
        <section id="socials" className="mb-4">
          <div className="bento-card overflow-hidden relative" style={{
            background: 'linear-gradient(135deg, #fdf8f0 0%, #f8f0e3 60%, #f2e8d5 100%)',
            boxShadow: '0 20px 60px rgba(180,150,100,0.10), 0 8px 24px rgba(180,150,100,0.07), inset 0 1px 0 rgba(255,255,255,0.7)',
            border: '1.5px solid rgba(0,0,0,0.18)',
          }}>
            {/* Header */}
            <div className="px-4 md:px-8 pt-7 pb-3">
              <h2 style={{
                fontFamily: 'var(--font-dancing)',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: '#5c4020',
                fontWeight: 400,
                lineHeight: 1,
                textShadow: '0 1px 2px rgba(92,64,32,0.12)',
              }}>My Socials</h2>
            </div>
            {/* Accent line */}
            <div className="mx-4 md:mx-8 mb-6 h-px" style={{ background: 'linear-gradient(to right, #7a604055, transparent)' }} />
            {/* Social cards */}
            <div className="px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/shukla-ankit/" target="_blank" rel="noopener noreferrer"
                className="linkedin-card flex items-center gap-4 rounded-xl p-4 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" style={{ background: '#0077b5' }}>
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm" style={{ color: '#1e3a5f' }}>LinkedIn</div>
                  <div className="text-xs font-mono truncate" style={{ color: '#3b6ea5' }}>in/shukla-ankit</div>
                </div>
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform text-lg">→</span>
              </a>
              {/* GitHub */}
              <a href="https://github.com/ankitshukla6496" target="_blank" rel="noopener noreferrer"
                className="github-card flex items-center gap-4 rounded-xl p-4 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-900 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-gray-800">GitHub</div>
                  <div className="text-xs font-mono truncate text-gray-500">ankitshukla6496</div>
                </div>
                <span className="text-gray-400 group-hover:translate-x-1 transition-transform text-lg">→</span>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/ankit.shukla.ig" target="_blank" rel="noopener noreferrer"
                className="instagram-card flex items-center gap-4 rounded-xl p-4 group"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm" style={{ color: '#9d174d' }}>Instagram</div>
                  <div className="text-xs font-mono truncate" style={{ color: '#be185d' }}>@ankit.shukla.ig</div>
                </div>
                <span className="text-pink-400 group-hover:translate-x-1 transition-transform text-lg">→</span>
              </a>
            </div>
            {/* Tagline + email */}
            <div className="px-4 md:px-8 pt-5 pb-7">
              <p className="text-base leading-relaxed" style={{ color: '#5c4020' }}>
                I enjoy talking about anything and everything shaping our world.
                Always curious, Always learning.<br />
                Reach me at:{' '}
                <a href="mailto:ankit.shukla.cmu@gmail.com"
                  className="font-medium underline underline-offset-2 hover:opacity-70 transition-opacity"
                  style={{ color: '#5c4020' }}>
                  ankit.shukla.cmu@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ── My Favourite Hobby full-width section ── */}
        <section id="hobby" className="mb-4">
          <div className="bento-card overflow-hidden relative" style={{
            background: 'linear-gradient(135deg, #fdf8f0 0%, #f8f0e3 60%, #f2e8d5 100%)',
            boxShadow: '0 20px 60px rgba(180,150,100,0.10), 0 8px 24px rgba(180,150,100,0.07), inset 0 1px 0 rgba(255,255,255,0.7)',
            border: '1.5px solid rgba(0,0,0,0.18)',
          }}>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-8 pt-7 pb-3 gap-2">
              <h2 style={{
                fontFamily: 'var(--font-dancing)',
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                color: '#5c4020',
                fontWeight: 400,
                lineHeight: 1,
                textShadow: '0 1px 2px rgba(92,64,32,0.12)',
              }}>My Favourite Hobby</h2>
              <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ color: '#7a6040', background: 'rgba(120,96,64,0.08)', border: '1px solid rgba(120,96,64,0.18)' }}>✈️ Travel</span>
            </div>
            {/* Accent line */}
            <div className="mx-4 md:mx-8 mb-5 h-px" style={{ background: 'linear-gradient(to right, #7a604055, transparent)' }} />
            {/* Tagline */}
            <div className="px-4 md:px-8 pb-5">
              <p className="text-base leading-relaxed" style={{ color: '#5c4020' }}>
                I enjoy meeting new people and exploring different cultures. I've traveled to nine countries so far, gaining diverse perspectives along the way. Follow my journey on{' '}
                <a href="#socials" className="font-medium underline underline-offset-2 hover:opacity-70 transition-opacity" style={{ color: '#5c4020' }}>Instagram</a> for more.
              </p>
            </div>
            {/* Image */}
            <div className="px-3 md:px-6 pb-7">
              <img
                src="/images/travel-hobby.png"
                alt="My Favourite Hobby — Travel"
                className="w-full h-auto object-contain rounded-xl"
                style={{ boxShadow: '0 8px 32px rgba(92,64,32,0.10), 0 2px 8px rgba(92,64,32,0.07)' }}
              />
            </div>
          </div>
        </section>

        {/* ── Row 1: Projects | Timeline ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
          <div id="projects" className="md:col-span-5">
            <BentoProjects />
          </div>
          <div className="md:col-span-4">
            <BentoTimeline />
          </div>
        </div>

        {/* ── Row 2: Skills | Travel ── */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 pb-16">
          <div id="skills" className="col-span-2 md:col-span-6">
            <BentoSkills />
          </div>
          <div id="travel" className="col-span-2 md:col-span-6">
            <BentoTravel />
          </div>
        </div>

      </div>
    </main>
  );
}
