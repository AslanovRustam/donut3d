import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window === "undefined") return false;
      return window.innerWidth < 768;
    };

    setIsMobile(checkMobile());
    setHydrated(true);
  }, []);

  return { isMobile, hydrated };
};
