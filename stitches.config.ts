import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      blue100: '#EAF3FE',
      blue300: '#A1C8FE',
      blue500: '#6F95CF',
      blue700: '#323565',
      gray100: '#b6c0cc',
      gray900: '#030326',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
});