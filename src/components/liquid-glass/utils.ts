const svgToDataUri = (svg: string): string => `data:image/svg+xml,${encodeURIComponent(svg.trim())}`

const createBaseSvg = (content: string): string => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">${content}</svg>`

const standardSvg = createBaseSvg(`
  <defs>
    <radialGradient id="std-soft" cx="50%" cy="50%" r="64%">
      <stop offset="0%" stop-color="#a5f3ff" />
      <stop offset="45%" stop-color="#6c7bff" />
      <stop offset="100%" stop-color="#04060f" />
    </radialGradient>
    <radialGradient id="std-hot" cx="44%" cy="38%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
      <stop offset="60%" stop-color="#ffffff" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="std-stretch" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#02f5ff" stop-opacity="0.85" />
      <stop offset="50%" stop-color="#6c00ff" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#120028" stop-opacity="0.7" />
    </linearGradient>
  </defs>
  <rect width="256" height="256" fill="url(#std-soft)" />
  <rect width="256" height="256" fill="url(#std-stretch)" opacity="0.42" />
  <circle cx="128" cy="128" r="112" fill="url(#std-hot)" />
`)

const polarSvg = createBaseSvg(`
  <defs>
    <radialGradient id="polar-core" cx="50%" cy="50%" r="75%">
      <stop offset="5%" stop-color="#ffffff" />
      <stop offset="45%" stop-color="#b4f7ff" />
      <stop offset="80%" stop-color="#223eff" />
      <stop offset="100%" stop-color="#02050f" />
    </radialGradient>
    <linearGradient id="polar-rim" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#00d8ff" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#ff00e1" stop-opacity="0.6" />
    </linearGradient>
    <pattern id="polar-rays" patternUnits="userSpaceOnUse" width="32" height="32">
      <rect width="32" height="32" fill="#000000" />
      <path d="M0 0 L32 32" stroke="#ffffff" stroke-opacity="0.4" stroke-width="6" />
      <path d="M32 0 L0 32" stroke="#ffffff" stroke-opacity="0.4" stroke-width="6" />
    </pattern>
  </defs>
  <rect width="256" height="256" fill="url(#polar-rays)" opacity="0.25" />
  <circle cx="128" cy="128" r="126" fill="url(#polar-core)" />
  <circle cx="128" cy="128" r="110" fill="none" stroke="url(#polar-rim)" stroke-width="24" opacity="0.55" />
`)

const prominentSvg = createBaseSvg(`
  <defs>
    <linearGradient id="prominent-base" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#050816" />
      <stop offset="35%" stop-color="#4a3dff" />
      <stop offset="70%" stop-color="#ff4fd8" />
      <stop offset="100%" stop-color="#0f031f" />
    </linearGradient>
    <linearGradient id="prominent-stripes" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#77d3ff" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </linearGradient>
    <pattern id="prominent-grid" patternUnits="userSpaceOnUse" width="24" height="24">
      <rect width="24" height="24" fill="none" />
      <rect x="0" y="0" width="24" height="12" fill="#ffffff" opacity="0.08" />
      <rect x="0" y="12" width="24" height="12" fill="#ffffff" opacity="0.02" />
    </pattern>
  </defs>
  <rect width="256" height="256" fill="url(#prominent-base)" />
  <rect width="256" height="256" fill="url(#prominent-grid)" opacity="0.45" />
  <rect width="256" height="256" fill="url(#prominent-stripes)" opacity="0.35" />
  <circle cx="170" cy="96" r="80" fill="#ffffff" opacity="0.12" />
`)

export const displacementMap = svgToDataUri(standardSvg)
export const polarDisplacementMap = svgToDataUri(polarSvg)
export const prominentDisplacementMap = svgToDataUri(prominentSvg)
