import { createContext } from "react";

export const themes = {
  dark: "",
  light: "light",
};

export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
