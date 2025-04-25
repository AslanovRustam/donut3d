export const isMobileDevice = () => {
  if (typeof window === "undefined") return false; // SSR fallback

  const width = window.innerWidth;

  if (width < 768) return true;

  return false;
};
