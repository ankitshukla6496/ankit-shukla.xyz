'use client';
import Image from 'next/image';
import { useState } from 'react';
import { pulseInstagramCard } from '@/lib/pulse-instagram';

function useHighlight() {
  const highlight = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.classList.add('bento-highlight');
  };
  const unhighlight = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('bento-highlight');
  };
  return { highlight, unhighlight };
}

export function BentoHero() {
  const [imgError, setImgError] = useState(false);
  const { highlight, unhighlight } = useHighlight();

  return (
    <section
      className="flex flex-col items-center justify-center text-center gap-3 px-4"
      style={{ minHeight: 'calc(100vh - 64px)' }}
    >

      {/* Illustration with always-visible sketch annotations */}
      {!imgError ? (
        /*
          Outer SVG canvas: 1100 × 640
          Image sits at x=175, y=0 (750×558)
          Annotations live in the margins outside the image
        */
        <svg
          viewBox="0 0 1100 640"
          className="w-full max-w-3xl mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', overflow: 'visible' }}
        >
          <defs>
            <marker id="ah-red" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
              <path d="M0,1 L0,6 L6,3.5 z" fill="#c0392b" />
            </marker>
            <marker id="ah-navy" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
              <path d="M0,1 L0,6 L6,3.5 z" fill="#1e3a5f" />
            </marker>
            <marker id="ah-blue" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
              <path d="M0,1 L0,6 L6,3.5 z" fill="#0077b5" />
            </marker>
            <marker id="ah-dark" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
              <path d="M0,1 L0,6 L6,3.5 z" fill="#1a1a2e" />
            </marker>
            <marker id="ah-instagram" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
              <path d="M0,1 L0,6 L6,3.5 z" fill="#e1306c" />
            </marker>

            <clipPath id="img-round">
              <rect x="175" y="59" width="750" height="500" rx="18" />
            </clipPath>
          </defs>

          <image href="/images/illustration-hero.png"
            x="175" y="30" width="750" height="558"
            clipPath="url(#img-round)"
            preserveAspectRatio="xMidYMid meet" />
          {/* Black border: same coords as clipPath rect, stroke centered on edge */}
          <rect x="175" y="59" width="750" height="500" rx="18"
            fill="none" stroke="#1a1a2e" strokeWidth="3" />

          {/* ══ LEFT ANNOTATIONS ══ */}

          {/* Projects → cork board top-left of image */}
          <a href="#projects" style={{ cursor: 'pointer' }}
            onMouseEnter={() => highlight('projects')}
            onMouseLeave={() => unhighlight('projects')}>
            <g className="sketch-annotation">
              <g className="annotation-label">
                <text x="78" y="64" textAnchor="end" fontFamily="var(--font-dancing), cursive"
                  fontSize="30" fill="#c0392b">My Projects</text>
              </g>
              <path d="M 88,54 C 135,40 160,48 280,115"
                stroke="#c0392b" strokeWidth="1.8" fill="none"
                markerEnd="url(#ah-red)" strokeLinecap="round" />
            </g>
          </a>

          {/* Journey → laptop center */}
          <a href="#journey" style={{ cursor: 'pointer' }}
            onMouseEnter={() => highlight('journey')}
            onMouseLeave={() => unhighlight('journey')}>
            <g className="sketch-annotation">
              <g className="annotation-label">
                <text x="72" y="304" textAnchor="end" fontFamily="var(--font-dancing), cursive"
                  fontSize="30" fill="#1e3a5f">My Journey</text>
              </g>
              <path d="M 82,294 C 145,284 250,290 400,300"
                stroke="#1e3a5f" strokeWidth="1.8" fill="none"
                markerEnd="url(#ah-navy)" strokeLinecap="round" />
            </g>
          </a>

          {/* Skills → books/headphones bottom-left */}
          <a href="#skills" style={{ cursor: 'pointer' }}
            onMouseEnter={() => highlight('skills')}
            onMouseLeave={() => unhighlight('skills')}>
            <g className="sketch-annotation">
              <g className="annotation-label">
                <text x="52" y="437" textAnchor="end" fontFamily="var(--font-dancing), cursive"
                  fontSize="30" fill="#1a1a2e">My Skills</text>
              </g>
              <path d="M 62,427 C 100,420 180,410 260,400"
                stroke="#1a1a2e" strokeWidth="1.8" fill="none"
                markerEnd="url(#ah-dark)" strokeLinecap="round" />
            </g>
          </a>

          {/* ══ RIGHT ANNOTATIONS ══ */}

          {/* Achievements → trophy shelf top-right */}
          <a href="#achievements" style={{ cursor: 'pointer' }}
            onMouseEnter={() => highlight('achievements')}
            onMouseLeave={() => unhighlight('achievements')}>
            <g className="sketch-annotation">
              <g className="annotation-label">
                <text x="1015" y="64" fontFamily="var(--font-dancing), cursive"
                  fontSize="30" fill="#c0392b">My Achievements</text>
              </g>
              <path d="M 1008,54 C 970,80 900,130 750,170"
                stroke="#c0392b" strokeWidth="1.8" fill="none"
                markerEnd="url(#ah-red)" strokeLinecap="round" />
            </g>
          </a>

          {/* LinkedIn → blue water bottle (right side of desk) */}
          <a href="#socials" style={{ cursor: 'pointer' }}
            onMouseEnter={() => highlight('linkedin')}
            onMouseLeave={() => unhighlight('linkedin')}>
            <g className="sketch-annotation">
              <g className="annotation-label">
                <text x="1015" y="359" fontFamily="var(--font-dancing), cursive"
                  fontSize="30" fill="#0077b5">My LinkedIn</text>
              </g>
              <path d="M 1008,349 C 970,352 900,362 800,370"
                stroke="#0077b5" strokeWidth="1.8" fill="none"
                markerEnd="url(#ah-blue)" strokeLinecap="round" />
            </g>
          </a>

          {/* Instagram → DSLR camera (far right on desk) */}
          <a href="#socials" style={{ cursor: 'pointer' }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('socials')?.scrollIntoView({ behavior: 'smooth' });
              setTimeout(pulseInstagramCard, 400);
            }}>
            <g className="sketch-annotation">
              <g className="annotation-label">
                <text x="1015" y="419" fontFamily="var(--font-dancing), cursive"
                  fontSize="30" fill="#e1306c">My Instagram</text>
              </g>
              <path d="M 1008,409 C 980,408 920,405 850,400"
                stroke="#e1306c" strokeWidth="1.8" fill="none"
                markerEnd="url(#ah-instagram)" strokeLinecap="round" />
            </g>
          </a>

          {/* GitHub → GitHub cat mug (center-right on desk) */}
          <a href="#socials" style={{ cursor: 'pointer' }}>
            <g className="sketch-annotation">
              <g className="annotation-label">
                <text x="1015" y="474" fontFamily="var(--font-dancing), cursive"
                  fontSize="30" fill="#1a1a2e">My GitHub</text>
              </g>
              <path d="M 1008,464 C 970,455 880,438 735,420"
                stroke="#1a1a2e" strokeWidth="1.8" fill="none"
                markerEnd="url(#ah-dark)" strokeLinecap="round" />
            </g>
          </a>

          {/* Favourite Hobby → map on desk (right-center desk) */}
          <a href="#hobby" style={{ cursor: 'pointer' }}
            onMouseEnter={() => highlight('travel')}
            onMouseLeave={() => unhighlight('travel')}>
            <g className="sketch-annotation">
              <g className="annotation-label">
                <text x="1015" y="534" fontFamily="var(--font-dancing), cursive"
                  fontSize="30" fill="#1e3a5f">My Favourite Hobby</text>
              </g>
              <path d="M 1008,524 C 970,510 900,490 800,470"
                stroke="#1e3a5f" strokeWidth="1.8" fill="none"
                markerEnd="url(#ah-navy)" strokeLinecap="round" />
            </g>
          </a>

        </svg>
      ) : (
        <div className="w-full max-w-xl mx-auto aspect-[4/3] rounded-2xl bg-amber-50 border-2 border-dashed border-amber-200 flex flex-col items-center justify-center gap-2 text-amber-400">
          <span className="text-4xl">🎨</span>
          <span className="text-sm font-mono text-amber-500">Save illustration to</span>
          <span className="text-xs font-mono text-amber-400 bg-amber-100 px-2 py-0.5 rounded">
            /public/images/illustration-hero.png
          </span>
        </div>
      )}

      {/* Bio */}
      <p className="text-sm md:text-base leading-relaxed w-full max-w-4xl" style={{ color: '#6b7280' }}>
        Engineer turned product manager. Curiosity is my superpower :).<br />
        6+ years of experience in Product Management and Software Engineering. I bring business acumen of a Product Manager and problem-solving skills of an Engineer.<br />
        I am a Customer Advocate and Innovator who believes in the power of a Growth Mindset.
      </p>

      {/* Signature */}
      <div
        className="select-none"
        style={{
          fontFamily: 'var(--font-dancing)',
          color: '#1a1a2e',
          fontSize: 'clamp(3.5rem, 8vw, 6rem)',
          lineHeight: 1.1,
          letterSpacing: '0.02em',
          fontWeight: 400,
        }}
      >
        Ankit Shukla
      </div>

    </section>
  );
}
