import React from "react";

export type BaseThemeContextType = {
  mode: "light" | "dark";
  changeMode: (mode: "light" | "dark") => void;
};

export const BaseThemeContext = React.createContext({} as BaseThemeContextType);
