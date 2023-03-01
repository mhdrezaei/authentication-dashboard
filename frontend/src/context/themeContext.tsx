import { createContext, useState } from "react";

export type themeContextType = {
  isDark: boolean;
  isRtl: boolean;
  switchTheme: () => void;
  switchDir: () => void;
};
const ThemeContext = createContext<themeContextType | null>(null);

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [isDark, setIsDark] = useState(true);
  const [isRtl, setIsRtl] = useState(false);

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

  const switchDir = () => {
    if (localStorage.getItem("lang-theme")) {
      // If en, make fa and save in localstorage
      if (localStorage.getItem("lang-theme") === "en") {
        document.documentElement.removeAttribute("dir");
        document.documentElement.setAttribute("dir", "rtl");
        localStorage.setItem("lang-theme", "fa");
        setIsRtl(true);
      } else {
        document.documentElement.removeAttribute("dir");
        document.documentElement.setAttribute("dir", "ltr");
        localStorage.setItem("lang-theme", "en");
        setIsRtl(false);
      }
    } else {
      // If not in localstorage
      if (document.documentElement.getAttribute("dir")) {
        const dir = document.documentElement.getAttribute("dir");
        console.log(dir);
        if (dir === "rtl") {
          document.documentElement.removeAttribute("dir");
          document.documentElement.setAttribute("dir", "ltr");
          localStorage.setItem("lang-theme", "en");
          setIsRtl(false);
        } else {
          document.documentElement.removeAttribute("dir");
          document.documentElement.setAttribute("dir", "rtl");
          localStorage.setItem("lang-theme", "fa");
          setIsRtl(true);
        }
      } else {
        document.documentElement.setAttribute("dir", "ltr");
        localStorage.setItem("lang-theme", "en");
        setIsRtl(false);
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, isRtl, switchDir, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
