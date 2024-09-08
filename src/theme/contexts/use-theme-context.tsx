import React from "react";

import { BaseThemeContext } from "./base-theme-context";

export default function useBaseThemeContext() {
  const context = React.useContext(BaseThemeContext);

  if (!context) {
    throw new Error("fatal error");
  }

  return context;
}
