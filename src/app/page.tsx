import { IntroSection } from "@/components/intro-section";
import { SnapshotTimeline } from "@/components/snapshot-timeline";
import { Achievements } from "@/components/achievements";
import { FeaturedProjects } from "@/components/featured-projects";
import { LatestPosts } from "@/components/latest-posts";

export default function HomePage() {
  return (
    <>
      <IntroSection />
      <SnapshotTimeline />
      <Achievements />
      <FeaturedProjects />
      <LatestPosts />
    </>
  );
}
