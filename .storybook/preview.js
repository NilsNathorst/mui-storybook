import React from "react";
import { theme } from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import { ThemeProvider } from "@mui/material/styles";

export const decorators = [
  (Story) => {
    console.log({ theme });
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    );
  },
];
