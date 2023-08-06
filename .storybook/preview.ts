import type { Preview } from "@storybook/react";

require("@babel/register")({
  presets: ["@babel/preset-env"],
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
