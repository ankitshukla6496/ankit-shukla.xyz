'use client';
import Image from 'next/image';
import { useState } from 'react';

export function BentoHero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="flex flex-col items-center text-center gap-4 pt-4 pb-6 px-4">

      {/* ── Illustration ── */}
      <div className="w-full max-w-lg mx-auto">
        {!imgError ? (
          <Image
            src="/images/illustration-hero.png"
            alt="Ankit Shukla at his desk"
            width={700}
            height={500}
            className="w-full h-auto max-h-72 object-contain"
            priority
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-56 rounded-2xl bg-amber-50 border-2 border-dashed border-amber-200 flex flex-col items-center justify-center gap-2 text-amber-400">
            <span className="text-4xl">🎨</span>
            <span className="text-sm font-mono text-amber-500">Save illustration to</span>
            <span className="text-xs font-mono text-amber-400 bg-amber-100 px-2 py-0.5 rounded">
              /public/images/illustration-hero.png
            </span>
          </div>
        )}
      </div>

      {/* ── Name ── */}
      <h1
        className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
        style={{ fontFamily: 'var(--font-display)', color: '#1a1a2e' }}
      >
        Ankit Shukla
      </h1>

      {/* ── Bio ── */}
      <p
        className="text-sm md:text-base max-w-md leading-relaxed"
        style={{ color: '#6b7280' }}
      >
        Engineer turned product thinker. 7 years at Samsung, now MS Product Management at Carnegie Mellon.
      </p>

      {/* ── Signature ── */}
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

      {/* ── Status badge ── */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 border border-green-200 text-green-700 text-xs font-mono">
        <span
          className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"
          style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
        />
        MS Product Management @ CMU — Class of 2026
      </div>

    </section>
  );
}
