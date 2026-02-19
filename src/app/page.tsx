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
      <div className="max-w-6xl mx-auto px-4 py-8 md:px-8 md:py-12">

        {/* ── Row 1: Hero (large) + Timeline ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
          {/* Hero card — 8 of 12 cols */}
          <div className="md:col-span-8">
            <BentoHero />
          </div>

          {/* Timeline card — 4 of 12 cols */}
          <div className="md:col-span-4">
            <BentoTimeline />
          </div>
        </div>

        {/* ── Row 2: Projects + Achievements + Skills ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
          {/* Projects — 5 of 12 */}
          <div className="md:col-span-5">
            <BentoProjects />
          </div>

          {/* Achievements — 3 of 12 */}
          <div className="md:col-span-3">
            <BentoAchievements />
          </div>

          {/* Skills — 4 of 12 */}
          <div className="md:col-span-4">
            <BentoSkills />
          </div>
        </div>

        {/* ── Row 3: Travel + Instagram + LinkedIn + GitHub ── */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4">
          {/* Travel — 4 of 12 (spans 2 cols on mobile) */}
          <div className="col-span-2 md:col-span-4">
            <BentoTravel />
          </div>

          {/* Instagram — 2 of 12 on desktop, 1 of 2 on mobile */}
          <div className="col-span-1 md:col-span-2">
            <InstagramCard />
          </div>

          {/* LinkedIn — 3 of 12 */}
          <div className="col-span-1 md:col-span-3">
            <LinkedInCard />
          </div>

          {/* GitHub — 3 of 12 */}
          <div className="col-span-2 md:col-span-3">
            <GitHubCard />
          </div>
        </div>

      </div>
    </main>
  );
}
