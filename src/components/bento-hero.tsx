'use client';
import Image from 'next/image';
import { useState } from 'react';

export function BentoHero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10 px-2"
      style={{ minHeight: 'calc(100vh - 64px)' }}
    >

      {/* ── LEFT: Illustration ── takes ~55% width ── */}
      <div className="w-full md:w-[55%] shrink-0">
        {!imgError ? (
          <Image
            src="/images/illustration-hero.png"
            alt="Ankit Shukla at his desk"
            width={700}
            height={520}
            className="w-full h-auto"
            priority
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full aspect-[4/3] rounded-2xl bg-amber-50 border-2 border-dashed border-amber-200 flex flex-col items-center justify-center gap-2 text-amber-400">
            <span className="text-4xl">🎨</span>
            <span className="text-sm font-mono text-amber-500">Save illustration to</span>
            <span className="text-xs font-mono text-amber-400 bg-amber-100 px-2 py-0.5 rounded">
              /public/images/illustration-hero.png
            </span>
          </div>
        )}
      </div>

      {/* ── RIGHT: Name + Bio + Signature + Badge ── */}
      <div className="flex flex-col gap-4 md:pb-6 text-center md:text-left">

        {/* Name */}
        <h1
          className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
          style={{ fontFamily: 'var(--font-display)', color: '#1a1a2e' }}
        >
          Ankit Shukla
        </h1>

        {/* Bio */}
        <p
          className="text-sm md:text-base leading-relaxed max-w-xs"
          style={{ color: '#6b7280' }}
        >
          Engineer turned product thinker. 7 years at Samsung building products at scale.
          Now pursuing a Master&apos;s in Product Management at Carnegie Mellon.
        </p>

        {/* Signature */}
        <div
          className="text-3xl md:text-4xl select-none"
          style={{
            fontFamily: 'var(--font-signature), cursive',
            color: '#9ca3af',
            lineHeight: 1.2,
          }}
        >
          Ankit Shukla
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 self-center md:self-start px-3 py-1.5 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-mono w-fit">
          <span
            className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"
            style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
          />
          MS PM @ CMU — Class of 2026
        </div>

      </div>
    </section>
  );
}
