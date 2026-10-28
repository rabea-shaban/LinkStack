import type { SVGProps } from 'react';

// Mostaql (مستقل) Official Brand SVG
export const MostaqlIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 53 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-full w-full"
    {...props}
  >
    <rect width="53" height="53" rx="13" fill="#2CAAE2" />
    <path
      fill="#FFFFFF"
      d="M26.462,40.839 C18.566,40.839 12.145,34.417 12.145,26.521 C12.145,18.626 18.566,12.203 26.462,12.203 C34.358,12.203 40.781,18.627 40.781,26.521 C40.781,34.417 34.357,40.839 26.462,40.839 M26.462,19.611 C22.652,19.611 19.552,22.709 19.552,26.521 C19.552,30.333 22.652,33.431 26.462,33.431 C30.274,33.431 33.375,30.332 33.375,26.521 C33.375,22.71 30.273,19.611 26.462,19.611"
    />
  </svg>
);

// Khamsat (خمسات) Official Brand SVG
export const KhamsatIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 53 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-full w-full"
    {...props}
  >
    <rect width="53" height="53" rx="13" fill="#F3AD2D" />
    <path
      fill="#1A1E27"
      d="M23.213,28.105 C23.713,27.556 24.296,27.167 24.955,26.926 L24.955,22.221 C23.001,22.542 21.326,23.44 19.933,24.923 C18.156,26.816 17.265,29.09 17.265,31.749 L21.829,31.749 C21.83,30.334 22.291,29.12 23.213,28.105"
    />
    <polygon fill="#1A1E27" points="24.955 36.313 17.265 36.313 17.265 38.597 17.265 40.878 19.078 40.878 22.323 40.878 24.955 40.878" />
    <path
      fill="#1A1E27"
      d="M33.242,24.815 C31.419,23.065 29.222,22.155 26.651,22.084 C26.492,22.084 26.336,22.087 26.181,22.094 L26.181,26.666 C26.383,26.649 26.589,26.642 26.803,26.647 C28.09,26.691 29.189,27.18 30.101,28.116 C31.017,29.052 31.482,30.162 31.497,31.448 L31.497,31.47 L31.497,31.598 L31.473,31.726 C31.403,32.997 30.905,34.08 29.975,34.973 C29.044,35.866 27.938,36.312 26.652,36.312 L26.182,36.312 L26.182,40.877 L26.804,40.877 C29.303,40.834 31.45,39.923 33.242,38.145 C35.035,36.364 35.969,34.226 36.039,31.726 L36.039,31.706 L36.039,31.599 L36.039,31.471 L36.039,31.342 C35.998,28.741 35.063,26.566 33.242,24.815"
    />
    <path
      fill="#1A1E27"
      d="M24.955,13.597 L16.888,13.597 L16.888,27.803 C17.735,25.309 19.314,23.402 21.632,22.08 L21.632,18.34 L24.955,18.34 L24.955,13.597 Z"
    />
    <rect fill="#1A1E27" x="26.181" y="13.598" width="8.68" height="4.743" />
  </svg>
);

// Khamsa Programming Belady (خمسة برمجة بالبلدي) Vector Brandmark
export const KhamsaLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 53 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-full w-full"
    {...props}
  >
    <rect width="53" height="53" rx="14" fill="url(#khamsa-grad)" />
    <defs>
      <linearGradient id="khamsa-grad" x1="0" y1="0" x2="53" y2="53" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4F46E5" />
        <stop offset="0.5" stopColor="#7C3AED" />
        <stop offset="1" stopColor="#DB2777" />
      </linearGradient>
    </defs>
    <text
      x="26.5"
      y="34"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontSize="21"
      fontWeight="900"
      fill="#FFFFFF"
      textAnchor="middle"
      letterSpacing="-0.5"
    >
      ٥&lt;&gt;
    </text>
  </svg>
);
