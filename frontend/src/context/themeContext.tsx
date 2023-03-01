import { createContext, useState } from "react";

const themeToggleBtn = document.getElementById("theme-toggle")!;
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon")!;
const themeToggleLightIcon = document.getElementById(
  "theme-toggle-light-icon"
)!;

export type themeContextType = {
  isDark: boolean;
  switchTheme: () => void;
};
const ThemeContext = createContext<themeContextType | null>(null);

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [isDark, setIsDark] = useState(true);

  const switchTheme = () => {
    if (localStorage.getItem("color-theme")) {
      // If light, make dark and save in localstorage
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        localStorage.setItem("color-theme", "dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.setItem("color-theme", "light");
        setIsDark(false);
      }
    } else {
      // If not in localstorage
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.setItem("color-theme", "light");
        setIsDark(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        setIsDark(true);
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
