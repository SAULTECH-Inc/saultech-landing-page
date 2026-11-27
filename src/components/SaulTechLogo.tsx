import React from "react";

export type SaulTechLogoVariant =
  | "dark"         // Original dark-navy diamond (best on light backgrounds)
  | "light"        // White diamond with dark-navy text (high-contrast on dark backgrounds)
  | "midnight"     // Dark-navy diamond with crisp orange border (blends with dark UI while staying visible)
  | "transparent"  // No diamond background: orange emblem + white text + orange circuit (for dark UI)
  | "mark";        // 3-pillar emblem only (for favicons, small icons, watermarks)

interface SaulTechLogoProps {
  variant?: SaulTechLogoVariant;
  className?: string;
  size?: number;
}

export const SaulTechLogo: React.FC<SaulTechLogoProps> = ({
  variant = "midnight",
  className = "",
  size,
}) => {
  const uid = React.useId().replace(/:/g, "");
  const gradId = `st-grad-${uid}`;
  const gradCircuitId = `st-circuit-${uid}`;
  const shadowId = `st-shadow-${uid}`;

  const isLightDiamond = variant === "light";
  const isTransparent = variant === "transparent";
  const isMidnight = variant === "midnight";
  const isMark = variant === "mark";

  const diamondFill = isLightDiamond ? "#F8FAFC" : "#1B243D";
  const textFill = isLightDiamond ? "#1B243D" : "#FFFFFF";

  const sizeProps = size ? { width: size, height: size } : {};

  if (isMark) {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="SaulTech Mark"
        {...sizeProps}
      >
        <defs>
          <linearGradient id={gradId} x1="20" y1="15" x2="100" y2="105" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
        </defs>
        {/* Left curved pillar */}
        <path
          d="M44 26 C31 32 26 45 26 60 C26 75 31 88 44 94 L44 26 Z"
          fill={`url(#${gradId})`}
        />
        {/* Center tall pill */}
        <rect x="51" y="14" width="18" height="92" rx="9" fill={`url(#${gradId})`} />
        {/* Right curved pillar */}
        <path
          d="M76 26 C89 32 94 45 94 60 C94 75 89 88 76 94 L76 26 Z"
          fill={`url(#${gradId})`}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SaulTech Official Logo"
      {...sizeProps}
    >
      <defs>
        <linearGradient id={gradId} x1="145" y1="75" x2="255" y2="175" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="55%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
        <linearGradient id={gradCircuitId} x1="70" y1="225" x2="330" y2="335" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
        <filter id={shadowId} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity={isLightDiamond ? "0.12" : "0.4"} />
        </filter>
      </defs>

      {/* Diamond Background */}
      {!isTransparent && (
        <g transform="rotate(45 200 200)">
          <rect
            x="64"
            y="64"
            width="272"
            height="272"
            rx="22"
            fill={diamondFill}
            stroke={isMidnight ? "#EF5613" : isLightDiamond ? "#CBD5E1" : "none"}
            strokeWidth={isMidnight ? "5" : isLightDiamond ? "3" : "0"}
            strokeOpacity={isMidnight ? "0.85" : "1"}
          />
        </g>
      )}

      {/* 3-Pillar Emblem */}
      <g filter={`url(#${shadowId})`}>
        {/* Left curved pillar */}
        <path
          d="M184 91 C172 97 167 108 167 123 C167 138 172 149 184 155 L184 91 Z"
          fill={`url(#${gradId})`}
        />
        {/* Center tall pill */}
        <rect x="191" y="77" width="18" height="92" rx="9" fill={`url(#${gradId})`} />
        {/* Right curved pillar */}
        <path
          d="M216 91 C228 97 233 108 233 123 C233 138 228 149 216 155 L216 91 Z"
          fill={`url(#${gradId})`}
        />
      </g>

      {/* SAULTECH Wordmark */}
      <g filter={`url(#${shadowId})`}>
        <text
          x="200"
          y="214"
          textAnchor="middle"
          fontFamily="Poppins, Inter, system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="50"
          letterSpacing="3.5"
        >
          <tspan fill={textFill}>SAUL</tspan>
          <tspan fill={`url(#${gradId})`}>T</tspan>
          <tspan fill={textFill}>ECH</tspan>
        </text>
      </g>

      {/* Circuit Tree */}
      <g filter={`url(#${shadowId})`}>
        {/* Left branch */}
        <path
          d="M66 234 H128 L197 302"
          stroke={`url(#${gradCircuitId})`}
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right branch */}
        <path
          d="M334 234 H272 L203 302"
          stroke={`url(#${gradCircuitId})`}
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Center stem */}
        <line
          x1="200"
          y1="257"
          x2="200"
          y2="332"
          stroke={`url(#${gradCircuitId})`}
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        {/* Upper Y-fork */}
        <path
          d="M184 232 V243 L200 258 L216 243 V232"
          stroke={`url(#${gradCircuitId})`}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Small top fork nodes */}
        <circle cx="184" cy="230" r="4.5" fill="#F97316" />
        <circle cx="216" cy="230" r="4.5" fill="#F97316" />
        {/* Lower flanking nodes */}
        <circle cx="176" cy="303" r="7.5" fill="#F97316" />
        <circle cx="224" cy="303" r="7.5" fill="#F97316" />
        {/* Bottom terminal node */}
        <circle cx="200" cy="334" r="8.5" fill="#EA580C" />
      </g>
    </svg>
  );
};

export default SaulTechLogo;
