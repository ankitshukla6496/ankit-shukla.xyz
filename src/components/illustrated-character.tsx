export function IllustratedCharacter({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Illustrated portrait of Ankit Shukla"
      role="img"
    >
      {/* ── Shadow under chair ── */}
      <ellipse cx="160" cy="365" rx="90" ry="12" fill="rgba(0,0,0,0.08)" />

      {/* ── Chair legs ── */}
      <rect x="100" y="295" width="10" height="60" rx="5" fill="#c8b8a0" />
      <rect x="210" y="295" width="10" height="60" rx="5" fill="#c8b8a0" />
      <rect x="95" y="340" width="130" height="10" rx="5" fill="#c8b8a0" />

      {/* ── Chair seat ── */}
      <rect x="88" y="255" width="145" height="50" rx="12" fill="#d4c4aa" />
      {/* Chair back */}
      <rect x="90" y="190" width="12" height="80" rx="6" fill="#c8b8a0" />
      <rect x="220" y="190" width="12" height="80" rx="6" fill="#c8b8a0" />
      <rect x="88" y="186" width="145" height="28" rx="10" fill="#d4c4aa" />

      {/* ── Laptop base ── */}
      <rect x="96" y="258" width="130" height="8" rx="3" fill="#374151" />
      {/* Laptop keyboard area */}
      <rect x="100" y="232" width="122" height="30" rx="4" fill="#1f2937" />
      {/* Keyboard details */}
      <rect x="108" y="238" width="8" height="5" rx="1" fill="#374151" />
      <rect x="120" y="238" width="8" height="5" rx="1" fill="#374151" />
      <rect x="132" y="238" width="8" height="5" rx="1" fill="#374151" />
      <rect x="144" y="238" width="8" height="5" rx="1" fill="#374151" />
      <rect x="156" y="238" width="8" height="5" rx="1" fill="#374151" />
      <rect x="168" y="238" width="8" height="5" rx="1" fill="#374151" />
      <rect x="180" y="238" width="8" height="5" rx="1" fill="#374151" />
      <rect x="108" y="248" width="25" height="5" rx="1" fill="#374151" />
      <rect x="138" y="248" width="40" height="5" rx="1" fill="#374151" />
      <rect x="183" y="248" width="15" height="5" rx="1" fill="#374151" />
      {/* Trackpad */}
      <rect x="146" y="255" width="30" height="10" rx="2" fill="#374151" />

      {/* ── Laptop screen ── */}
      <rect x="96" y="148" width="130" height="88" rx="8" fill="#1f2937" />
      <rect x="99" y="151" width="124" height="82" rx="6" fill="#0f172a" />
      {/* Screen glow/content */}
      <rect x="104" y="156" width="114" height="72" rx="4" fill="#1e293b" />
      {/* Code lines on screen */}
      <rect x="110" y="163" width="45" height="4" rx="2" fill="#3b82f6" opacity="0.8" />
      <rect x="110" y="172" width="70" height="4" rx="2" fill="#60a5fa" opacity="0.6" />
      <rect x="116" y="181" width="55" height="4" rx="2" fill="#34d399" opacity="0.7" />
      <rect x="116" y="190" width="40" height="4" rx="2" fill="#f59e0b" opacity="0.6" />
      <rect x="110" y="199" width="65" height="4" rx="2" fill="#60a5fa" opacity="0.5" />
      <rect x="110" y="208" width="30" height="4" rx="2" fill="#3b82f6" opacity="0.8" />
      {/* Cursor blink */}
      <rect x="142" y="208" width="2" height="8" rx="1" fill="white" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0;0.9" dur="1.2s" repeatCount="indefinite" />
      </rect>
      {/* Screen hinge */}
      <rect x="96" y="232" width="130" height="4" rx="2" fill="#111827" />

      {/* ── Left arm/hand on laptop ── */}
      {/* Upper arm */}
      <path d="M108 240 Q88 248 82 262" stroke="#c68642" strokeWidth="14" strokeLinecap="round" fill="none" />
      {/* Forearm */}
      <path d="M82 262 Q80 270 92 270" stroke="#c68642" strokeWidth="12" strokeLinecap="round" fill="none" />
      {/* Hand */}
      <ellipse cx="97" cy="268" rx="12" ry="8" fill="#c68642" />
      {/* Sleeve cuff */}
      <path d="M82 256 Q78 265 88 268" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M82 256 Q78 265 88 268" stroke="#1f2937" strokeWidth="5" strokeLinecap="round" fill="none" />

      {/* ── Right arm/hand on laptop ── */}
      <path d="M214 240 Q234 248 240 262" stroke="#c68642" strokeWidth="14" strokeLinecap="round" fill="none" />
      <path d="M240 262 Q242 270 230 270" stroke="#c68642" strokeWidth="12" strokeLinecap="round" fill="none" />
      <ellipse cx="225" cy="268" rx="12" ry="8" fill="#c68642" />
      <path d="M240 256 Q244 265 234 268" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M240 256 Q244 265 234 268" stroke="#1f2937" strokeWidth="5" strokeLinecap="round" fill="none" />

      {/* ── Body / Torso ── */}
      {/* Suit jacket - main body */}
      <path d="M100 270 Q90 220 105 190 Q130 178 160 176 Q190 178 215 190 Q230 220 220 270 Z" fill="#1f2937" />
      {/* White shirt visible in center */}
      <path d="M145 195 Q160 192 175 195 L178 255 Q160 258 142 255 Z" fill="white" />
      {/* Suit jacket lapels */}
      <path d="M145 195 Q130 200 120 220 L135 235 Q142 210 145 195" fill="#374151" />
      <path d="M175 195 Q190 200 200 220 L185 235 Q178 210 175 195" fill="#374151" />
      {/* Jacket button */}
      <circle cx="160" cy="230" r="3" fill="#374151" />
      <circle cx="160" cy="245" r="3" fill="#374151" />

      {/* ── Blue tie ── */}
      <path d="M155 198 L165 198 L170 240 L160 248 L150 240 Z" fill="#3b82f6" />
      {/* Tie knot */}
      <ellipse cx="160" cy="200" rx="8" ry="6" fill="#2563eb" />
      {/* Tie pattern dots */}
      <circle cx="160" cy="212" r="1.5" fill="#93c5fd" opacity="0.7" />
      <circle cx="157" cy="220" r="1.5" fill="#93c5fd" opacity="0.7" />
      <circle cx="163" cy="228" r="1.5" fill="#93c5fd" opacity="0.7" />
      <circle cx="159" cy="236" r="1.5" fill="#93c5fd" opacity="0.7" />

      {/* ── Neck ── */}
      <rect x="151" y="166" width="18" height="22" rx="6" fill="#c68642" />

      {/* ── Head ── */}
      <ellipse cx="160" cy="140" rx="48" ry="52" fill="#c68642" />

      {/* ── Hair ── */}
      {/* Main hair mass */}
      <path d="M113 128 Q112 88 138 78 Q160 72 182 78 Q208 88 207 128 Q202 108 190 100 Q172 88 160 88 Q148 88 130 100 Q118 108 113 128 Z" fill="#1a0a00" />
      {/* Hair texture waves */}
      <path d="M120 110 Q130 102 145 106 Q158 108 160 100" stroke="#2d1200" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M168 98 Q178 96 190 104 Q198 110 200 118" stroke="#2d1200" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Side hair */}
      <path d="M113 128 Q110 145 116 158" stroke="#1a0a00" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M207 128 Q210 145 204 158" stroke="#1a0a00" strokeWidth="10" strokeLinecap="round" fill="none" />

      {/* ── Ears ── */}
      <ellipse cx="113" cy="145" rx="8" ry="10" fill="#b87333" />
      <ellipse cx="207" cy="145" rx="8" ry="10" fill="#b87333" />
      <path d="M115 139 Q117 145 115 151" stroke="#a0622a" strokeWidth="2" fill="none" />

      {/* ── Face features ── */}
      {/* Eyebrows */}
      <path d="M136 122 Q144 118 152 122" stroke="#1a0a00" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M168 122 Q176 118 184 122" stroke="#1a0a00" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Eyes */}
      <ellipse cx="144" cy="132" rx="9" ry="8" fill="white" />
      <ellipse cx="176" cy="132" rx="9" ry="8" fill="white" />
      <circle cx="146" cy="133" r="5" fill="#2d1a0a" />
      <circle cx="178" cy="133" r="5" fill="#2d1a0a" />
      <circle cx="147" cy="133" r="2.5" fill="#0a0500" />
      <circle cx="179" cy="133" r="2.5" fill="#0a0500" />
      {/* Eye shine */}
      <circle cx="149" cy="131" r="1.5" fill="white" />
      <circle cx="181" cy="131" r="1.5" fill="white" />

      {/* Nose */}
      <path d="M158 138 Q155 148 152 152 Q158 155 168 152 Q165 148 162 138" fill="#b87333" opacity="0.5" />
      <ellipse cx="154" cy="152" rx="4" ry="3" fill="#a0622a" opacity="0.5" />
      <ellipse cx="166" cy="152" rx="4" ry="3" fill="#a0622a" opacity="0.5" />

      {/* Smile */}
      <path d="M146 163 Q160 174 174 163" stroke="#7a3a1a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Teeth */}
      <path d="M150 165 Q160 172 170 165 Q160 170 150 165" fill="white" />

      {/* Beard / stubble */}
      <path d="M135 158 Q140 172 160 176 Q180 172 185 158 Q178 168 160 172 Q142 168 135 158" fill="#3d1a00" opacity="0.55" />
      <path d="M136 155 Q133 163 137 170" stroke="#3d1a00" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M184 155 Q187 163 183 170" stroke="#3d1a00" strokeWidth="1.5" fill="none" opacity="0.4" />
      {/* Mustache area */}
      <path d="M148 158 Q160 162 172 158" stroke="#3d1a00" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* ── Shirt collar ── */}
      <path d="M148 188 Q140 182 138 175 L155 178 Z" fill="white" />
      <path d="M172 188 Q180 182 182 175 L165 178 Z" fill="white" />
    </svg>
  );
}
