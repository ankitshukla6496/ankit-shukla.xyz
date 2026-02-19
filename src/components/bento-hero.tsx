'use client';
import Image from 'next/image';
import { useState } from 'react';

export function BentoHero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      className="flex flex-col items-center justify-center text-center gap-3 px-4"
      style={{ minHeight: 'calc(100vh - 64px)' }}
    >

      {/* Illustration */}
      <div className="w-full max-w-md mx-auto">
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

      {/* Name */}
      <h1
        className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
        style={{ fontFamily: 'var(--font-display)', color: '#1a1a2e' }}
      >
        Ankit Shukla
      </h1>

      {/* Bio */}
      <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: '#6b7280' }}>
        Engineer turned product thinker. 7 years at Samsung, now MS Product Management at Carnegie Mellon.
      </p>

      {/* Signature */}
      <div
        className="text-4xl md:text-5xl select-none"
        style={{ fontFamily: 'var(--font-signature), cursive', color: '#1a1a2e', lineHeight: 1.3 }}
      >
        Ankit Shukla
      </div>

    </section>
  );
}
