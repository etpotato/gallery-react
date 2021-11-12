import { useEffect } from 'react';
import APP from '../config';

const getCallback = (cb) => {
  return (evt) => {
    if (evt.matches) cb();
  };
};

export default function useMatchMedia (mobileCb, tabletCb, desktopCb) {
  useEffect(() => {
    const mediaQueries = {
      mobile: {
        query: window.matchMedia(`(max-width: ${APP.BREAKPOINTS.tablet}px)`),
        callback: getCallback(mobileCb),
        init: mobileCb,
      },
      tablet: {
        query: window.matchMedia(`(min-width: ${APP.BREAKPOINTS.tablet}px) and (max-width: ${APP.BREAKPOINTS.desktop}px)`),
        callback: getCallback(tabletCb),
        init: tabletCb,
      },
      desktop: {
        query: window.matchMedia(`(min-width: ${APP.BREAKPOINTS.desktop}px)`),
        callback: getCallback(desktopCb),
        init: desktopCb,
      },
    };

    for (const item in mediaQueries) {
      mediaQueries[item].query.matches && mediaQueries[item].init();
      mediaQueries[item].query.addEventListener('change', mediaQueries[item].callback);
    }

    return () => {
      for (const item in mediaQueries) {
        mediaQueries[item].query.removeEventListener('change', mediaQueries[item].callback);
      }
    }
  }, [mobileCb, tabletCb, desktopCb]);
};
