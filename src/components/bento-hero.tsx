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

      {/* Signature — SVG hand-drawn style matching gkoberger.com */}
      <svg
        viewBox="0 0 320 80"
        className="w-64 md:w-80 select-none"
        aria-label="Ankit Shukla signature"
        fill="none"
        stroke="#1a1a2e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* A */}
        <path d="M10 58 L22 18 L34 58" />
        <path d="M14 42 L30 42" />
        {/* n */}
        <path d="M38 58 L38 36 Q44 28 52 36 L52 58" />
        {/* k */}
        <path d="M57 22 L57 58" />
        <path d="M57 44 L67 32" />
        <path d="M57 44 L68 58" />
        {/* i */}
        <path d="M73 36 L73 58" />
        <circle cx="73" cy="29" r="1.5" fill="#1a1a2e" stroke="none" />
        {/* t */}
        <path d="M79 26 L79 58" />
        <path d="M74 36 L85 36" />

        {/* space */}

        {/* S */}
        <path d="M105 30 Q95 24 92 32 Q89 40 100 44 Q112 48 109 56 Q106 64 96 60" />
        {/* h */}
        <path d="M115 22 L115 58" />
        <path d="M115 44 Q121 34 130 38 L130 58" />
        {/* u */}
        <path d="M135 36 L135 52 Q135 60 144 58 L144 36" />
        {/* k */}
        <path d="M150 22 L150 58" />
        <path d="M150 44 L160 32" />
        <path d="M150 44 L161 58" />
        {/* l */}
        <path d="M165 22 L165 58" />
        {/* a */}
        <path d="M178 42 Q178 34 172 34 Q166 34 166 42 Q166 50 172 50 Q178 50 178 42 L178 50" />

        {/* decorative underline flourish */}
        <path d="M8 66 Q80 72 160 68 Q240 64 310 70" strokeWidth="1.5" opacity="0.4" />
      </svg>

    </section>
  );
}
