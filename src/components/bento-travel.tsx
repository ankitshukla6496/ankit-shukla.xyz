import { travelDestinations, countriesVisited } from '@/data/travel';

export function BentoTravel() {
  // Show up to 6 destinations in the grid
  const displayed = travelDestinations.slice(0, 6);

  return (
    <div className="bento-card p-6 flex flex-col gap-4 bg-gradient-to-br from-sky-50 to-blue-50 h-full">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-base" style={{ fontFamily: 'var(--font-display)', color: '#1a1a2e' }}>
          Travel
        </h2>
        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
          {countriesVisited} countries
        </span>
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-3 gap-2 flex-1">
        {displayed.map((dest, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden aspect-square group"
            style={{ background: 'linear-gradient(135deg, #bfdbfe, #ddd6fe)' }}
          >
            {/* Placeholder gradient background (replace with real photos) */}
            <div
              className="absolute inset-0"
              style={{
                background: [
                  'linear-gradient(135deg, #bfdbfe 0%, #93c5fd 100%)',
                  'linear-gradient(135deg, #bbf7d0 0%, #6ee7b7 100%)',
                  'linear-gradient(135deg, #fde68a 0%, #fca5a5 100%)',
                  'linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 100%)',
                  'linear-gradient(135deg, #fed7aa 0%, #fb923c 100%)',
                  'linear-gradient(135deg, #fce7f3 0%, #f9a8d4 100%)',
                ][i % 6],
              }}
            />

            {/* Flag + city overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 opacity-100 group-hover:opacity-0 transition-opacity duration-200">
              <span className="text-2xl">{dest.emoji}</span>
              <span className="text-[10px] font-semibold text-gray-700">{dest.city}</span>
            </div>

            {/* Hover: show full destination */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="text-lg">{dest.emoji}</span>
              <span className="text-[10px] font-semibold text-white text-center px-1">{dest.city}, {dest.country}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-blue-500/70 text-center font-mono">
        📍 {travelDestinations.length} destinations and counting
      </p>
    </div>
  );
}
