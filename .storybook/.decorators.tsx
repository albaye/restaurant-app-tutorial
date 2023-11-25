import React, { useEffect, useState } from "react";
import { Decorator } from "@storybook/react";
import { lightTheme, darkTheme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/GlobalStyle';

import styled, { ThemeProvider, css } from 'styled-components'
import { breakpoints } from "../src/styles/breakpoints";
const ThemeBlock = styled.div<{ left?: boolean; fill?: boolean }>(
  ({ left, fill, theme }) =>
    css`
      position: absolute;
      top: 0;
      left: ${left || fill ? 0 : '50vw'};
      border-right: ${left ? '1px solid #202020' : 'none'};
      right: ${left ? '50vw' : 0};
      width: ${fill ? '100vw' : '50vw'};
      height: 100vh;
      bottom: 0;
      overflow: auto;
      padding: 1rem;
      background: ${theme.color.screenBackground};
      ${breakpoints.S} {
        left: ${left ? 0 : '50vw'};
        right: ${left ? '50vw' : 0};
        padding: 0 !important;
      }
    `
)
const withTheme: Decorator = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const [storyTheme, setStoryTheme] = useState(lightTheme);
  console.log(context.parameters.theme, context.globals.theme)
  useEffect(() => {
    setStoryTheme(theme === "dark" ? darkTheme : lightTheme)
  }, [theme])
  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyle />
      <ThemeBlock fill>
        <StoryFn />
      </ThemeBlock>
    </ThemeProvider>
  );
};

export const globalDecorators = [withTheme];
