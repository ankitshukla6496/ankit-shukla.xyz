'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useFadeIn } from '@/hooks/use-fade-in';

interface Achievement {
  title: string;
  description: string;
  year: string;
  image: string;           // path inside public/images/achievements/
  gradient: string;        // fallback gradient
}

const achievements: Achievement[] = [
  {
    title: 'ProdHacks Winner',
    description: 'Won $750 at CMU BTG ProdHacks as team "Game Changers"',
    year: '2025',
    image: '/images/achievements/prodhacks.jpg',
    gradient: 'from-highlight to-accent-orange',
  },
  {
    title: '7 Years at Samsung',
    description: 'Grew from Software Engineer to Chief Engineer at Samsung R&D',
    year: '2018–25',
    image: '/images/achievements/samsung.jpg',
    gradient: 'from-[#1428a0] to-accent-blue',
  },
  {
    title: 'CMU Admit',
    description: 'Accepted into Carnegie Mellon University for MS in Product Management',
    year: '2025',
    image: '/images/achievements/cmu.jpg',
    gradient: 'from-[#c41230] to-accent-purple',
  },
  {
    title: 'BITS Pilani Graduate',
    description: 'BE (Honors) in Electronics & Communication from BITS Pilani',
    year: '2018',
    image: '/images/achievements/bits.jpg',
    gradient: 'from-blue-800 to-accent-purple',
  },
];

function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-white border border-border/50 hover:border-highlight/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image Area */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {!imgError ? (
          <Image
            src={achievement.image}
            alt={achievement.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          /* Gradient fallback when image not found */
          <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} flex items-center justify-center`}>
            <span className="text-white/80 text-5xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              {achievement.title.charAt(0)}
            </span>
          </div>
        )}

        {/* Gradient overlay at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Year badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-text text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {achievement.year}
        </div>
      </div>

      {/* Text Content */}
      <div className="p-4">
        <h3 className="font-bold text-primary text-base mb-1 group-hover:text-highlight transition-colors">
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
    <section ref={elementRef as React.RefObject<HTMLElement>} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold text-primary"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Highlights
          </h2>
          <div className="h-1 flex-1 max-w-32 bg-gradient-to-r from-accent-orange via-highlight to-accent-purple rounded-full" />
        </div>

        {/* Cards Grid */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
