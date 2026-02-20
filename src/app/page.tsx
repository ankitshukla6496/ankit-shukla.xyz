import { BentoHero } from "@/components/bento-hero";
import { BentoTimeline } from "@/components/bento-timeline";
import { BentoProjects } from "@/components/bento-projects";
import { BentoAchievements } from "@/components/bento-achievements";
import { BentoSkills } from "@/components/bento-skills";
import { BentoTravel } from "@/components/bento-travel";
import { InstagramCard, LinkedInCard, GitHubCard } from "@/components/bento-social";

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
            <span className="absolute top-4 right-6 text-[10px] font-mono tracking-widest" style={{ color: '#7a6040', opacity: 0.55 }}>2014 – Present</span>

            {/* Header strip */}
            <div className="flex items-center justify-between px-8 pt-7 pb-3">
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
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ color: '#7a6040', background: 'rgba(120,96,64,0.08)', border: '1px solid rgba(120,96,64,0.18)' }}>🎓 Education</span>
                <span className="text-xs font-mono" style={{ color: '#7a6040' }}>+</span>
                <span className="text-xs font-mono tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ color: '#7a6040', background: 'rgba(120,96,64,0.08)', border: '1px solid rgba(120,96,64,0.18)' }}>💼 Work Experience</span>
              </div>
            </div>
            {/* Thin accent line */}
            <div className="mx-8 mb-5 h-px" style={{ background: 'linear-gradient(to right, #7a604055, transparent)' }} />
            {/* Timeline image */}
            <div className="px-6 pb-7">
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

        {/* ── Row 1: Projects | Timeline | Achievements ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
          <div id="projects" className="md:col-span-5">
            <BentoProjects />
          </div>
          <div className="md:col-span-4">
            <BentoTimeline />
          </div>
          <div id="achievements" className="md:col-span-3">
            <BentoAchievements />
          </div>
        </div>

        {/* ── Row 2: Skills | Travel | Instagram | LinkedIn | GitHub ── */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 pb-16">
          <div id="skills" className="col-span-2 md:col-span-4">
            <BentoSkills />
          </div>
          <div id="travel" className="col-span-2 md:col-span-4">
            <BentoTravel />
          </div>
          <div className="col-span-1 md:col-span-2">
            <InstagramCard />
          </div>
          <div id="linkedin" className="col-span-1 md:col-span-2">
            <LinkedInCard />
          </div>
        </div>

      </div>
    </main>
  );
}
