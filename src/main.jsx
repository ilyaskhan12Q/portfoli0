import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DefaultLoadingManager } from 'three'

// Intercept Three.js loading to prepending the base URL for GitHub Pages
const base = import.meta.env.BASE_URL || '/';
DefaultLoadingManager.setURLModifier((url) => {
  if (url.startsWith('/') && !url.startsWith(base)) {
    return `${base}${url.slice(1)}`;
  }
  return url;
});

import App from './App.jsx'

// --- Console Signature for Awwwards Judges ---
if (typeof window !== 'undefined') {
  console.log(
    '%c TOM KING %c PORTFOLIO %c',
    'background: #111; color: #fff; padding: 5px 10px; font-weight: bold; border-radius: 3px 0 0 3px;',
    'background: #f33; color: #fff; padding: 5px 10px; font-weight: bold; border-radius: 0 3px 3px 0;',
    'background: transparent'
  );
  console.log(
    '%cHi Jury! %cCheck out the code quality. Clean console = happy dev. 🚀',
    'font-weight: bold; color: #f33; font-size: 14px;',
    'color: #666; font-size: 14px;'
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
