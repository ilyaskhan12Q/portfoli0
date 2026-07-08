import { DefaultLoadingManager } from 'three'

const base = import.meta.env.BASE_URL || '/';
DefaultLoadingManager.setURLModifier((url) => {
  console.log('[URLModifier] Input:', url);
  if (url.startsWith('/') && !url.startsWith(base)) {
    const res = `${base}${url.slice(1)}`;
    console.log('[URLModifier] Output:', res);
    return res;
  }
  return url;
});
