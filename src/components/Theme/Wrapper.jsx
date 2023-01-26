import { useState, useEffect } from "react";
import { ThemeContext, themes } from "./Theme";

export default function Wrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function toggleTheme(theme) {
    setTheme(theme);
  }
  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add("light");
        break;
      case themes.dark:
      default:
        document.body.classList.remove("light");
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
