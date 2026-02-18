import Link from "next/link";

export function IntroSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 overflow-hidden">
      {/* Animated Background Mesh */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(at 40% 20%, rgba(157, 78, 221, 0.15) 0px, transparent 50%),
                       radial-gradient(at 80% 0%, rgba(76, 201, 240, 0.15) 0px, transparent 50%),
                       radial-gradient(at 0% 50%, rgba(233, 69, 96, 0.15) 0px, transparent 50%)`,
          animation: 'mesh-rotate 20s ease-in-out infinite'
        }}
      />

      {/* Floating Geometric Shapes */}
      <div
        className="absolute top-20 right-10 w-32 h-32 rounded-3xl rotate-12 blur-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.2), rgba(76, 201, 240, 0.2))',
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      <div
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full blur-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.2), rgba(247, 127, 0, 0.2))',
          animation: 'float 6s ease-in-out infinite',
          animationDelay: '2s'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <p
          className="text-highlight font-medium mb-4"
          style={{ animation: 'fade-in-up 0.6s ease-out forwards' }}
        >
          Hello, I&apos;m
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          style={{
            fontFamily: 'var(--font-display)',
            animation: 'fade-in-up 0.6s ease-out forwards',
            animationDelay: '0.1s',
            opacity: 0
          }}
        >
          <span className="bg-gradient-to-r from-highlight via-accent-purple to-accent-blue bg-clip-text text-transparent">
            Ankit Shukla
          </span>
        </h1>
        <div
          className="max-w-2xl mb-8 space-y-3"
          style={{
            animation: 'fade-in-up 0.6s ease-out forwards',
            animationDelay: '0.2s',
            opacity: 0
          }}
        >
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            Engineer turned product thinker. I spent 7 years at Samsung R&amp;D
            growing from Software Engineer to Chief Engineer, building products
            used by millions. Now pursuing my MS in Product Management at
            Carnegie Mellon University — blending deep technical roots with a
            product-first mindset.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4"
          style={{
            animation: 'fade-in-up 0.6s ease-out forwards',
            animationDelay: '0.3s',
            opacity: 0
          }}
        >
          <Link
            href="/portfolio"
            className="group relative overflow-hidden text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #e94560 0%, #f77f00 100%)' }}
          >
            <span className="relative z-10">View My Work</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #f77f00 0%, #e94560 100%)' }}
            />
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg font-medium text-text transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.18)'
            }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
