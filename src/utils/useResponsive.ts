import { useEffect, useState } from 'react';

const BP = {
  desktopMin: 1048,
  mobileMax: 539,
  tabletMin: 768,
  wideScreenMin: 1336
};

const bp = {
  desktop: `(min-width: ${BP.desktopMin}px) and (max-width: ${BP.wideScreenMin - 1}px)`,
  mobile: `(max-width: ${BP.mobileMax}px)`,
  tablet: `(min-width: ${BP.tabletMin}px) and (max-width: ${BP.desktopMin - 1}px)`,
  tabletPortrait: `(min-width: ${BP.mobileMax + 1}px) and (max-width: ${BP.tabletMin - 1}px)`,
  touch: `(max-width: ${BP.desktopMin - 1}px)`,
  wideScreen: `(min-width: ${BP.wideScreenMin}px)`
};

export const useMatchMedia = (mediaQuery: string) => {
  const [matches, setMatches] = useState(window.matchMedia(mediaQuery).matches);

  useEffect(() => {
    const updateMatches = (event: MediaQueryListEvent) => setMatches(event.matches);
    const mediaQueryList = window.matchMedia(mediaQuery);

    setMatches(mediaQueryList.matches);

    mediaQueryList.addListener(updateMatches);

    return () => mediaQueryList.removeListener(updateMatches);
  }, [mediaQuery]);

  return matches;
};

const mapResponsive = (isMobile: boolean, isTablet: boolean, isTabletPortrait: boolean) => <T extends {}>(desktop: T, tablet: T, mobile: T, tabletPortrait: T) => isMobile ? mobile : isTabletPortrait ? tabletPortrait : isTablet ? tablet : desktop;

export const useResponsive = () => {
  const isMobile = useMatchMedia(bp.mobile);
  const isTablet = useMatchMedia(bp.tablet);
  const isTabletPortrait = useMatchMedia(bp.tabletPortrait);
  const isTouch = useMatchMedia(bp.touch);
  
  return {
    resp: mapResponsive(isMobile, isTablet, isTabletPortrait),
    isMobile,
    isTablet,
    isTabletPortrait,
    isTouch
  };
};