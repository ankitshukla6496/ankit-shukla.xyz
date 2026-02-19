'use client';
import Image from 'next/image';
import { useState } from 'react';

export function BentoHero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="flex flex-col items-center text-center gap-6 pt-8 pb-12 px-4">

      {/* ── Illustration ── */}
      <div className="w-full max-w-2xl mx-auto">
        {!imgError ? (
          <Image
            src="/images/illustration-hero.png"
            alt="Ankit Shukla at his desk"
            width={800}
            height={600}
            className="w-full h-auto"
            priority
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full aspect-[4/3] rounded-3xl bg-amber-50 border-2 border-dashed border-amber-200 flex flex-col items-center justify-center gap-3 text-amber-400">
            <span className="text-5xl">🎨</span>
            <span className="text-sm font-mono text-amber-500">
              Save your illustration to
            </span>
            <span className="text-xs font-mono text-amber-400 bg-amber-100 px-3 py-1 rounded-lg">
              /public/images/illustration-hero.png
            </span>
          </div>
        )}
      </div>

      {/* ── Name ── */}
      <h1
        className="text-5xl md:text-6xl font-bold tracking-tight"
        style={{ fontFamily: 'var(--font-display)', color: '#1a1a2e' }}
      >
        Ankit Shukla
      </h1>

      {/* ── Bio ── */}
      <p
        className="text-base md:text-lg max-w-lg leading-relaxed"
        style={{ color: '#6b7280' }}
      >
        Engineer turned product thinker. 7 years at Samsung building products at scale.
        Now pursuing a Master&apos;s in Product Management at Carnegie Mellon —
        learning to build even better ones.
      </p>

      {/* ── Signature ── */}
      <div
        className="text-4xl md:text-5xl select-none"
        style={{
          fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
          color: '#6b7280',
          lineHeight: 1.2,
        }}
      >
        Ankit Shukla
      </div>

      {/* ── Status badge ── */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-mono">
        <span
          className="w-1.5 h-1.5 rounded-full bg-green-500"
          style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
        />
        MS Product Management @ CMU — Class of 2026
      </div>

    </section>
  );
}
