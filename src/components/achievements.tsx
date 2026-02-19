'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useFadeIn } from '@/hooks/use-fade-in';

interface Achievement {
  title: string;
  description: string;
  year: string;
  image: string;
  span?: string; // grid area for bento layout
}

const achievements: Achievement[] = [
  {
    title: 'ProdHacks Winner',
    description: 'Won $750 at CMU BTG ProdHacks as team "Game Changers"',
    year: '2025',
    image: '/images/achievements/prodhacks.jpg',
    span: 'md:col-span-3 md:row-span-1',
  },
  {
    title: '7 Years at Samsung',
    description: 'Grew from Software Engineer to Chief Engineer at Samsung R&D',
    year: '2018\u201425',
    image: '/images/achievements/samsung.jpg',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    title: 'CMU Admit',
    description: 'Accepted into Carnegie Mellon University for MS in Product Management',
    year: '2025',
    image: '/images/achievements/cmu.jpg',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    title: 'BITS Pilani Graduate',
    description: 'BE (Honors) in Electronics & Communication from BITS Pilani',
    year: '2018',
    image: '/images/achievements/bits.jpg',
    span: 'md:col-span-3 md:row-span-1',
  },
];

function AchievementCard({ achievement, index, isVisible }: { achievement: Achievement; index: number; isVisible: boolean }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`group relative rounded-2xl border border-border bg-bg-muted overflow-hidden transition-all duration-500 hover:border-border-accent hover:-translate-y-1 ${
        achievement.span || ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image / Fallback */}
      <div className="relative aspect-[16/9] overflow-hidden">
        {!imgError ? (
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 bg-bg-hover flex items-center justify-center">
            <span
              className="text-6xl font-bold text-accent/20"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {achievement.title.charAt(0)}
            </span>
          </div>
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-muted/80 via-transparent to-transparent" />

        {/* Year badge */}
        <div className="absolute top-3 right-3 bg-bg-subtle/80 backdrop-blur-sm text-text-muted text-xs font-mono px-3 py-1 rounded-full border border-border">
          {achievement.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-text text-base mb-1 group-hover:text-accent-hover transition-colors duration-300">
          {achievement.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">
          {achievement.description}
        </p>
      </div>
    </div>
  );
}

export function Achievements() {
  const { elementRef, isVisible } = useFadeIn();

  return (
    <section ref={elementRef as React.RefObject<HTMLElement>} className="py-16 md:py-24 bg-bg-subtle">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-12">
          <h2
            className="text-2xl md:text-3xl font-bold text-text mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Highlights
          </h2>
          <div
            className="h-0.5 w-16 bg-accent rounded-full"
            style={{
              transformOrigin: 'left',
              animation: isVisible ? 'reveal-line 0.6s ease-out forwards' : 'none',
              transform: isVisible ? undefined : 'scaleX(0)',
            }}
          />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
