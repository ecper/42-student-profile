"use client";

import React from "react";

import { BaseThemeContext, BaseThemeContextType } from "./base-theme-context";

type Props = {
  children: React.ReactNode;
};

export default function BaseThemeProvider({ children }: Props) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const changeMode = React.useCallback((value: "light" | "dark") => {
    setMode(value);
  }, []);
  const memoizedValue = React.useMemo<BaseThemeContextType>(
    () => ({
      mode,
      changeMode,
    }),
    []
  );

  return <BaseThemeContext.Provider value={memoizedValue}>{children}</BaseThemeContext.Provider>;
}
