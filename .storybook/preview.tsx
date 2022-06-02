import { xaTheme, xbTheme } from '../src/components/stitches.config';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// https://storybook.js.org/docs/react/essentials/toolbars-and-globals
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'UI Theme',
    defaultValue: 'default',
    toolbar: {
      icon: 'circlehollow',
      items: ['default', 'x-A', 'x-B'],
      // showName: true,
      // dynamicTitle: true
    }
  }
};

const THEMES_MAP = {
  'default': '',
  'x-A': xaTheme,
  'x-B': xbTheme,
};

const withThemeWrapper = (Story, context) => {
  console.log(context);
  const themeName = THEMES_MAP[context.globals.theme] || THEMES_MAP.default;
  return (
    <div className={themeName}>
      <Story {...context} />
    </div>
  ); 
};

export const decorators = [withThemeWrapper];
