import type { Preview } from "@storybook/react";
import "../../../packages/ui/src/styles/shadcn-rose.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
