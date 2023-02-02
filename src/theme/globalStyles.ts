import { createGlobalStyle } from "styled-components";

export const ResetCss = createGlobalStyle`
  html,
  body {
    animation: fadeIn 0.7s both;
    color: ${({ theme }) => theme.font.colors.pure};
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0;
    margin-bottom: ${(props) => props.theme.spacing.sm};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  `;