import { createStitches, createTheme } from '@stitches/react';

const { styled } = createStitches({
  theme: {
    colors: {
      primary: '#00b39e',
      primary25: 'hsl(172.9608938547486, 100%, 25%)',
      primary40: 'hsl(172.9608938547486, 100%, 40%)',
      primary85: 'hsl(172.9608938547486, 100%, 85%)',
      primary95: 'hsl(172.9608938547486, 100%, 95%)',
      accent: '#213c45',
      accent30: 'hsl(195, 35.2941176471%, 30%)',
      accent40: 'hsl(195, 35.2941176471%, 40%)',
      accent95: 'hsl(195, 35.2941176471%, 95%)',
      accent98: 'hsl(195, 35.2941176471%, 98%)',
      neutral: '#ccc',
      neutral60: 'hsl(0, 0%, 60%)',
      neutral90: 'hsl(0, 0%, 90%)',
      neutral95: 'hsl(0, 0%, 95%)',
      info: '#078cdf',
      info85: 'hsl(203.05555555555554, 93.9130434783%, 85%)',
      info95: 'hsl(203.05555555555554, 93.9130434783%, 95%)',
      warning: '#f16d0e',
      warning25: 'hsl(25.110132158590307, 89.0196078431%, 25%)',
      error: '#e60050',
      error25: 'hsl(339.1304347826087, 100%, 25%)',
      solid: '#1a1a1a',
      surface: '#fff',
    },
    fonts: {
      sans: "'Open Sans', sans-serif",
    },
    fontSizes: {
      M: '1rem'
    },
    radii: {
      radius1: '1px',
      radius2: '2px',
      radius4: '4px',
      radius6: '6px',
      radius20: '20px',
    },
    shadows: {
      1: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
      2: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
      3: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
      4: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
      5: '0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)',
      6: '0 -1px 2px 0 rgba(0, 0, 0, 0.2)',
      7: '0 -1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24)',
      8: '0 1px 9.5px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.24)',
      9: 'inset 0 -1px 3px 0 rgba(0, 0, 0, 0.1), inset 0 1px 1.5px 0 rgba(0, 0, 0, 0.2), inset 0 1px 1.5px 0 rgba(0, 0, 0, 0.25)',
      10: '0 0 0 1px rgba(224, 230, 237, 0.5)',
      11: '0 1px 0.5px rgba(0, 0, 0, 0.24), 0 -1px 0.75px rgba(0, 0, 0, 0.12)',
      12: '0 0 1px rgba(0, 0, 0, 0.25)',
      13: '0 0 1px rgba(0, 0, 0, 0.25)',
      14: '0 0 0.5px rgba(0, 0, 0, 0.1)',
      15: '0 2px 2px rgba(0, 0, 0, 0.24), 0 1px 4.75px rgba(0, 0, 0, 0.12)',
      16: '0.5px 1.5px 4px 1px rgba(0, 0, 0, 0.25), -0.5px -0.5px 4px 1px rgba(0, 0, 0, 0.25)',
    },
    space: {
      XS: '4px',
      S: '8px',
      M: '16px',
      L: '24px',
      XL: '32px',
    },
    transitions: {
      linear80Ms: '80ms linear',
      easeinout150Ms: '150ms ease-in-out',
      standard: '200ms ease',
    }
  },
  media: {
    mobile: '768px',
    desktop: '1024px',
    biggerdesktop: '1280px',
    giantdesktop: '1680px',
    jumbodesktop: '1920px',
  }
});

export const xaTheme = createTheme('xaTheme', {
  colors: {
    primary: '#000000',
    primary25: 'hsl(199, 24%, 25%)',
    primary40: 'hsl(199, 24%, 40%)',
    primary85: 'hsl(199, 24%, 85%)',
    primary95: 'hsl(199, 24%, 95%)',
    warning: '#a7a161',
    warning25: 'hsl(55, 90%, 25%)',
    error: '#F15156',
    error25: 'hsl(358, 85%, 25%)',
    solid: '#000',
    surface: '#fff',
  },
});

export const xbTheme = createTheme('xbTheme', {
  fontSizes: {
    M: '1.5rem'
  },
});

const Box = styled('div');

export {
  styled,
  Box
};
