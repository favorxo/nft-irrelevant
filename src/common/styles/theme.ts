import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    border: 'rgba(69, 69, 69, 0.8)',
  },
  paddingHorizontal: '16rem',
};

export const mixins = {
  desk: '@media screen and (min-width: 1400px)',
  tab: '@media screen and (max-width: 1024px)',
};
