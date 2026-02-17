import { Hero } from "@/components/hero";
import { FeaturedProjects } from "@/components/featured-projects";
import { LatestPosts } from "@/components/latest-posts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <LatestPosts />
    </>
  );
}
