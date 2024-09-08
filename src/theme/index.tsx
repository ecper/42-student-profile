"use client";

import React from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import useBaseThemeContext from "./contexts/use-base-theme-context";

type Props = {
  children: React.ReactNode;
};

// export const themeContext;

export default function ThemeProvider({ children }: Props) {
  const { mode } = useBaseThemeContext();

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#ff5252",
          },
        },
      }),
    [mode]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
