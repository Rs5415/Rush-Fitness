import React from 'react';

interface RushLogoProps {
  variant?: 'full' | 'icon';
  className?: string;
  height?: number | string;
}

export const RushLogo: React.FC<RushLogoProps> = ({
  variant = 'full',
  className = '',
  height,
}) => {
  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 270 230"
        className={className}
        style={{ height: height || '100%', width: 'auto' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="RUSH Fitness Monogram Emblem"
      >
        <defs>
          <linearGradient id="iconPurple" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#df48f5" />
            <stop offset="30%" stopColor="#be3ef3" />
            <stop offset="70%" stopColor="#8b2cf5" />
            <stop offset="100%" stopColor="#4e2ef3" />
          </linearGradient>

          <linearGradient id="iconPillar" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#e9ecff" />
            <stop offset="100%" stopColor="#9ea7ff" />
          </linearGradient>

          <linearGradient id="iconOrange" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fdbb2d" />
            <stop offset="35%" stopColor="#f9821a" />
            <stop offset="70%" stopColor="#ee3824" />
            <stop offset="100%" stopColor="#d6142c" />
          </linearGradient>

          <filter id="iconNeon" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g transform="translate(10, 8)" filter="url(#iconNeon)">
          {/* Left Mirrored R */}
          <rect x="98" y="38" width="16" height="154" rx="8" fill="url(#iconPurple)" />
          <path
            d="M 106 40 C 60 40, 32 60, 32 94 C 32 126, 60 142, 106 142 L 106 124 C 72 124, 50 114, 50 94 C 50 72, 70 58, 106 58 Z"
            fill="url(#iconPurple)"
          />
          <path
            d="M 98 132 C 74 136, 44 154, 24 192 L 42 192 C 58 162, 80 148, 106 146 L 106 132 Z"
            fill="url(#iconPurple)"
          />

          {/* Center Pillar */}
          <rect x="124" y="20" width="16" height="186" rx="8" fill="url(#iconPillar)" />

          {/* Right Forward R */}
          <rect x="150" y="38" width="16" height="154" rx="8" fill="url(#iconOrange)" />
          <path
            d="M 158 40 C 204 40, 232 60, 232 94 C 232 126, 204 142, 158 142 L 158 124 C 192 124, 214 114, 214 94 C 214 72, 194 58, 158 58 Z"
            fill="url(#iconOrange)"
          />
          <path
            d="M 166 132 C 190 136, 220 154, 240 192 L 222 192 C 206 162, 184 148, 158 146 L 158 132 Z"
            fill="url(#iconOrange)"
          />
        </g>
      </svg>
    );
  }

  // Full Logo matching user's exact uploaded image
  return (
    <svg
      viewBox="0 0 980 230"
      className={className}
      style={{ height: height || '100%', width: 'auto' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="RUSH FITNESS GYM Official Logo"
    >
      <defs>
        <linearGradient id="rushPurple" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#df48f5" />
          <stop offset="30%" stopColor="#be3ef3" />
          <stop offset="70%" stopColor="#8b2cf5" />
          <stop offset="100%" stopColor="#4e2ef3" />
        </linearGradient>

        <linearGradient id="rushPillar" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#e9ecff" />
          <stop offset="70%" stopColor="#cbd2ff" />
          <stop offset="100%" stopColor="#9ea7ff" />
        </linearGradient>

        <linearGradient id="rushOrange" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fdbb2d" />
          <stop offset="30%" stopColor="#f9821a" />
          <stop offset="65%" stopColor="#ee3824" />
          <stop offset="100%" stopColor="#d6142c" />
        </linearGradient>

        <filter id="rushRedGlow" x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="4" result="blur1" />
          <feGaussianBlur stdDeviation="10" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="emblemGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ==================== EMBLEM: MIRRORED R + PILLAR + R ==================== */}
      <g transform="translate(15, 8)">
        {/* Left Mirrored R (Purple to Violet) */}
        <g filter="url(#emblemGlow)">
          <rect x="98" y="38" width="16" height="154" rx="8" fill="url(#rushPurple)" />
          <path
            d="M 106 40 C 60 40, 32 60, 32 94 C 32 126, 60 142, 106 142 L 106 124 C 72 124, 50 114, 50 94 C 50 72, 70 58, 106 58 Z"
            fill="url(#rushPurple)"
          />
          <path
            d="M 98 132 C 74 136, 44 154, 24 192 L 42 192 C 58 162, 80 148, 106 146 L 106 132 Z"
            fill="url(#rushPurple)"
          />
        </g>

        {/* Center Pillar */}
        <rect
          x="124"
          y="20"
          width="16"
          height="186"
          rx="8"
          fill="url(#rushPillar)"
          filter="url(#emblemGlow)"
        />

        {/* Right Forward R */}
        <g filter="url(#emblemGlow)">
          <rect x="150" y="38" width="16" height="154" rx="8" fill="url(#rushOrange)" />
          <path
            d="M 158 40 C 204 40, 232 60, 232 94 C 232 126, 204 142, 158 142 L 158 124 C 192 124, 214 114, 214 94 C 214 72, 194 58, 158 58 Z"
            fill="url(#rushOrange)"
          />
          <path
            d="M 166 132 C 190 136, 220 154, 240 192 L 222 192 C 206 162, 184 148, 158 146 L 158 132 Z"
            fill="url(#rushOrange)"
          />
        </g>
      </g>

      {/* ==================== RUSH (Racing Red Tech Letters) ==================== */}
      <g transform="translate(295, 42)" filter="url(#rushRedGlow)">
        {/* R */}
        <path
          d="M 0 0 L 88 0 C 114 0, 130 14, 130 38 C 130 56, 118 68, 98 74 L 132 118 L 98 118 L 70 78 L 28 78 L 28 118 L 0 118 Z M 28 24 L 28 54 L 84 54 C 98 54, 102 48, 102 39 C 102 30, 98 24, 84 24 Z"
          fill="#ff0f30"
        />
        {/* U */}
        <path
          d="M 150 0 L 178 0 L 178 78 C 178 92, 188 98, 202 98 L 238 98 C 252 98, 262 92, 262 78 L 262 0 L 290 0 L 290 80 C 290 106, 268 120, 240 120 L 200 120 C 172 120, 150 106, 150 80 Z"
          fill="#ff0f30"
        />
        {/* S */}
        <path
          d="M 312 88 L 338 84 C 340 94, 348 100, 362 100 L 404 100 C 416 100, 422 94, 422 86 C 422 78, 412 74, 396 70 L 350 60 C 324 54, 312 42, 312 24 C 312 8, 330 0, 358 0 L 404 0 C 432 0, 448 12, 450 32 L 424 35 C 422 24, 414 18, 400 18 L 360 18 C 346 18, 340 24, 340 30 C 340 37, 348 42, 364 45 L 412 55 C 438 61, 450 73, 450 94 C 450 114, 432 122, 404 122 L 356 122 C 324 122, 312 110, 312 88 Z"
          fill="#ff0f30"
        />
        {/* H */}
        <path
          d="M 472 0 L 500 0 L 500 46 L 564 46 L 564 0 L 592 0 L 592 118 L 564 118 L 564 70 L 500 70 L 500 118 L 472 118 Z"
          fill="#ff0f30"
        />
      </g>

      {/* ==================== FITNESS GYM (Pure Crisp White) ==================== */}
      <g transform="translate(295, 178)" fill="#ffffff">
        {/* F */}
        <path d="M 0 0 L 28 0 L 28 6 L 7 6 L 7 15 L 24 15 L 24 21 L 7 21 L 7 36 L 0 36 Z" />
        {/* I */}
        <path d="M 38 0 L 45 0 L 45 36 L 38 36 Z" />
        {/* T */}
        <path d="M 55 0 L 86 0 L 86 6 L 74 6 L 74 36 L 67 36 L 67 6 L 55 6 Z" />
        {/* N */}
        <path d="M 96 0 L 103 0 L 123 26 L 123 0 L 130 0 L 130 36 L 123 36 L 103 10 L 103 36 L 96 36 Z" />
        {/* E */}
        <path d="M 142 0 L 170 0 L 170 6 L 149 6 L 149 15 L 166 15 L 166 21 L 149 21 L 149 30 L 170 30 L 170 36 L 142 36 Z" />
        {/* S */}
        <path d="M 180 26 L 187 25 C 188 30, 192 32, 198 32 L 208 32 C 213 32, 217 30, 217 26 C 217 22, 213 20, 206 18 L 196 16 C 186 13, 182 9, 182 4 C 182 1, 187 -1, 198 -1 L 206 -1 C 216 -1, 221 3, 222 9 L 215 10 C 214 6, 211 4, 206 4 L 198 4 C 193 4, 190 6, 190 8 C 190 11, 193 13, 200 15 L 210 17 C 220 20, 224 24, 224 28 C 224 34, 218 37, 208 37 L 198 37 C 186 37, 181 32, 180 26 Z" />
        {/* S */}
        <path d="M 234 26 L 241 25 C 242 30, 246 32, 252 32 L 262 32 C 267 32, 271 30, 271 26 C 271 22, 267 20, 260 18 L 250 16 C 240 13, 236 9, 236 4 C 236 1, 241 -1, 252 -1 L 260 -1 C 270 -1, 275 3, 276 9 L 269 10 C 268 6, 265 4, 260 4 L 252 4 C 247 4, 244 6, 244 8 C 244 11, 247 13, 254 15 L 264 17 C 274 20, 278 24, 278 28 C 278 34, 272 37, 262 37 L 252 37 C 240 37, 235 32, 234 26 Z" />

        {/* G */}
        <path d="M 335 18 C 335 6, 344 -1, 360 -1 L 372 -1 C 383 -1, 390 5, 391 13 L 384 14 C 382 8, 378 5, 371 5 L 360 5 C 350 5, 343 10, 343 18 C 343 26, 350 31, 360 31 L 371 31 C 378 31, 382 28, 383 22 L 368 22 L 368 17 L 390 17 L 390 23 C 389 31, 381 37, 371 37 L 360 37 C 344 37, 335 30, 335 18 Z" />
        {/* Y */}
        <path d="M 400 0 L 409 0 L 422 20 L 435 0 L 444 0 L 426 25 L 426 36 L 418 36 L 418 25 Z" />
        {/* M */}
        <path d="M 454 0 L 463 0 L 476 24 L 489 0 L 498 0 L 498 36 L 491 36 L 491 11 L 479 32 L 473 32 L 461 11 L 461 36 L 454 36 Z" />
      </g>
    </svg>
  );
};
