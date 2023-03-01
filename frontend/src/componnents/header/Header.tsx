import React, { useContext, useEffect } from "react";
import ThemeContext, { themeContextType } from "../../context/themeContext";

function Header() {
  const { isDark, isRtl, switchDir, switchTheme } = useContext(
    ThemeContext
  ) as themeContextType;

  useEffect(() => {
    switchTheme();
    switchDir();
  }, []);
  return (
    <header className="mx-auto mt-4 px-6 text-center h-40 md:h-20">
      <div className="flex items-center justify-between">
        <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat bg-center h-20 w-48"></div>
        <div className="flex justify-center items-center">
          {/* Dark/Light Mode Button  */}
          <button
            id="theme-toggle"
            onClick={switchTheme}
            className="text-gray-500 mx-2 rtl:ml-2 ltr:mr-2 ring-4 ring-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 5"
          >
            {/* Dark SVG Icon */}
            <svg
              id="theme-toggle-dark-icon"
              className={isDark ? "w-5 h-5" : "w-5 h-5 hidden"}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            {/* Light SVG Icon  */}
            <svg
              id="theme-toggle-light-icon"
              className={isDark ? "w-5 h-5 hidden" : "w-5 h-5"}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            id="theme-toggle"
            onClick={switchDir}
            className="text-gray-500 mx-1 ring-4 ring-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 5"
          >
            <p
              className={
                isRtl ? "hidden" : "text-base w-5 h-5 dark:text-gray-400"
              }
            >
              EN
            </p>
            <p
              className={
                isRtl ? "text-base w-5 h-5 dark:text-gray-400" : "hidden"
              }
            >
              FA
            </p>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
