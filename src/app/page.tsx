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

        {/* ── Row 1: Projects | Timeline | Achievements ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
          <div id="projects" className="md:col-span-5">
            <BentoProjects />
          </div>
          <div id="journey" className="md:col-span-4">
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
