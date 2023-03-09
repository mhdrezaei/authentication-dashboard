module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBlue1: "hsl(211, 60%, 19%)",
        darkBlue2: "hsl(219, 30%, 18%)",
        darkBlue3: "hsl(217, 28%, 15%)",
        darkBlue4: "hsl(218, 28%, 13%)",
        darkBlue5: "hsl(216, 53%, 9%)",
        accentCyan: "hsl(176, 68%, 64%)",
        accentBlue: "hsl(198, 60%, 50%)",
        accentBlueLight: "hsl(210, 100%, 70%)",
        accentBlueDark: "hsl(210, 100%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "logo-dark-mode": "url('./assets/images/logo-dark-mode.svg')",
        "logo-light-mode": "url('./assets/images/logo-light-mode.svg')",
        "curvy-dark-mode": "url('./assets/images/bg-curvy-dark-mode.svg')",
        "curvy-light-mode": "url('./assets/images/bg-curvy-light-mode.svg')",
        "login-dark-mode": "url('./assets/images/login-bg.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
