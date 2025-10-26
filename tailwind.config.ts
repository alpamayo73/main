/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1200px",
          xxl: "1400px",
          "3xl": "1600px",
          "4xl": "1800px",
        },
      },

      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        "3xl": "1600px",
        "4xl": "1800px",
      },

      colors: {
        primaryColor: "#dfff5e",
        secondaryColor: "#ffc700",
        secondaryColorTwo: "#2fa75f",
        white: "#ffffff",
        bgColorOne: "#1c1d20",
        bgColorTwo: "#262629",

        neutral: {
          10: "#fafafb",
          20: "#f5f6f7",
          30: "#ebecef",
          40: "#dfe0e4",
          50: "#c1c4cc",
          60: "#b2b6bf",
          70: "#a6aab5",
          80: "#979ca8",
          90: "#888e9c",
          100: "#798090",
          200: "#6a7283",
          300: "#5b6477",
          400: "#4f586d",
          500: "#404a60",
          600: "#343e56",
          700: "#222e48",
          800: "#13203b",
          900: "#071431",
        },
      },

      boxShadow: {
        white: "0px 5.12694px 25.6347px 0px rgba(0, 0, 0, 0.08)",
        four: "-4px 0px 0px 0px #1C1D20",
        fourRight: "4px 0px 0px 0px #1C1D20",
        five: "0px 4px 0px 0px #1C1D20",
        six: "-2px 0px 0px 0px #1C1D20",
        "six-theme": "-2px 0px 0px 0px #dfff5e",
        two: "0px 6px 30px 0px rgba(0, 0, 0, 0.06)",
        one: "0px 6px 30px 0px rgba(0, 0, 0, 0.04)",
        "four-theme": "-4px 0px 0px 0px #dfff5e",
        "five-theme": "0px 4px 0px 0px #dfff5e",
        gray: "-4px 0px 0px 0px rgba(28, 29, 32, 0.30)",
        cardOne: "0px 10px 15px -3px rgba(222, 255, 92, 0.5)",
      },

      fontFamily: {
        inter: ["var(--body-font)"],
      },

      // animation
      keyframes: {
        pinkSmooth: {
          "0%, 100%": { transform: "scale(1)" },
          "10%, 90%": { transform: "scale(1.2)" },
          "20%, 80%": { transform: "scale(1.3)" },
          "30%, 70%": { transform: "scale(1.4)" },
          "40%, 60%": { transform: "scale(1.5)" },
          "50%": { transform: "scale(1.5)" },
        },
        pinkSmall: {
          "0%, 100%": { transform: "scale(1)" },
          "10%, 90%": { transform: "scale(1.2)" },
          "20%, 80%": { transform: "scale(1.15)" },
          "30%, 70%": { transform: "scale(1.25)" },
          "40%, 60%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1.5)" },
        },

        pingDefault: {
          "100%, 75%": { transform: "scale(2.5)", opacity: "0" },
        },

        pulseSmooth: {
          "0%, 100%": { opacity: "1" },
          "30%, 70%": { opacity: "0.9" },
          "40%, 60%": { opacity: "0.8" },
          "50%": { opacity: "0.7" },
        },
      },

      // scale
      scale: {
        "102": "1.02",
      },

      animation: {
        "spin-slow": "spin 10s linear infinite",
        "ping-default": "pingDefault 5s linear infinite",
        "ping-smooth": "pinkSmooth 8s linear infinite",
        "ping-small": "pinkSmall 8s linear infinite",
        "pulse-smooth": "pulseSmooth 8s linear infinite",
      },

      fontSize: {
        d1: ["120px", "120%"],
        d2: ["80px", "120%"],
        d3: ["64px", "120%"],
        d4: ["56px", "120%"],

        h1: ["48px", "120%"],
        h2: ["40px", "120%"],
        h3: ["32px", "120%"],
        h4: ["24px", "130%"],
        h5: ["20px", "130%"],
        h6: ["16px", "130%"],
        leadText: ["24px", "150%"],
        xlText: ["20px", "150%"],
        lText: ["18px", "150%"],
        mText: ["16px", "150%"],
        sText: ["14px", "150%"],
        xsText: ["12px", "150%"],
      },

      lineHeight: {
        "lh-120": "120%",
        "lh-130": "130%",
        "lh-150": "150%",
      },

      spacing: {
        "60px": "60px",
        "72px": "72px",
        "100px": "100px",
        "120px": "120px",
        "140px": "140px",
        "section-gap": "140px",
      },

      borderRadius: {
        "4px": "4px",
        "8px": "8px",
        "12px": "12px",
        "16px": "16px",
        "20px": "20px",
        "24px": "24px",
        "28px": "28px",
        "32px": "32px",
        "60px": "60px",
      },
    },
  },

  plugins: [
    plugin(function ({ addComponents }: { addComponents: ({}) => void }) {
      addComponents({
        ".section-gap-top": {
          paddingTop: "40px",
          "@media (min-width:576px)": {
            paddingTop: "60px",
          },
          "@media (min-width:768px)": {
            paddingTop: "70px",
          },
          "@media (min-width:992px)": {
            paddingTop: "80px",
          },
          "@media (min-width:1200px)": {
            paddingTop: "100px",
          },
          "@media (min-width:1400px)": {
            paddingTop: "120px",
          },
          "@media (min-width:1600px)": {
            paddingTop: "140px",
          },
        },
        ".section-gap-bottom": {
          paddingBottom: "40px",
          "@media (min-width:576px)": {
            paddingBottom: "60px",
          },
          "@media (min-width:768px)": {
            paddingBottom: "70px",
          },
          "@media (min-width:992px)": {
            paddingBottom: "80px",
          },
          "@media (min-width:1200px)": {
            paddingBottom: "100px",
          },
          "@media (min-width:1400px)": {
            paddingBottom: "120px",
          },
          "@media (min-width:1600px)": {
            paddingBottom: "140px",
          },
        },
        ".padding-t-80": {
          paddingTop: "40px",
          "@media (min-width:576px)": {
            paddingTop: "45px",
          },
          "@media (min-width:768px)": {
            paddingTop: "50px",
          },
          "@media (min-width:992px)": {
            paddingTop: "70px",
          },
          "@media (min-width:1400px)": {
            paddingTop: "80px",
          },
        },
        ".padding-b-80": {
          paddingBottom: "40px",
          "@media (min-width:576px)": {
            paddingBottom: "45px",
          },
          "@media (min-width:768px)": {
            paddingBottom: "50px",
          },
          "@media (min-width:992px)": {
            paddingBottom: "70px",
          },
          "@media (min-width:1400px)": {
            paddingBottom: "80px",
          },
        },
        ".padding-s-80": {
          paddingLeft: "40px",
          "@media (min-width:576px)": {
            paddingLeft: "45px",
          },
          "@media (min-width:768px)": {
            paddingLeft: "50px",
          },
          "@media (min-width:992px)": {
            paddingLeft: "70px",
          },
          "@media (min-width:1400px)": {
            paddingLeft: "80px",
          },
        },
        ".padding-e-80": {
          paddingRight: "40px",
          "@media (min-width:576px)": {
            paddingRight: "45px",
          },
          "@media (min-width:768px)": {
            paddingRight: "50px",
          },
          "@media (min-width:992px)": {
            paddingRight: "70px",
          },
          "@media (min-width:1400px)": {
            paddingRight: "80px",
          },
        },
        ".padding-t-60": {
          paddingTop: "30px",
          "@media (min-width:576px)": {
            paddingTop: "35px",
          },
          "@media (min-width:768px)": {
            paddingTop: "40px",
          },
          "@media (min-width:992px)": {
            paddingTop: "50px",
          },
          "@media (min-width:1400px)": {
            paddingTop: "60px",
          },
        },
        ".padding-b-60": {
          paddingBottom: "30px",
          "@media (min-width:576px)": {
            paddingBottom: "35px",
          },
          "@media (min-width:768px)": {
            paddingBottom: "40px",
          },
          "@media (min-width:992px)": {
            paddingBottom: "50px",
          },
          "@media (min-width:1400px)": {
            paddingBottom: "60px",
          },
        },
        ".padding-s-60": {
          paddingLeft: "30px",
          "@media (min-width:576px)": {
            paddingLeft: "35px",
          },
          "@media (min-width:768px)": {
            paddingLeft: "40px",
          },
          "@media (min-width:992px)": {
            paddingLeft: "50px",
          },
          "@media (min-width:1400px)": {
            paddingLeft: "60px",
          },
        },
        ".padding-e-60": {
          paddingRight: "30px",
          "@media (min-width:576px)": {
            paddingRight: "35px",
          },
          "@media (min-width:768px)": {
            paddingRight: "40px",
          },
          "@media (min-width:992px)": {
            paddingRight: "50px",
          },
          "@media (min-width:1400px)": {
            paddingRight: "60px",
          },
        },

        ".padding-t-40": {
          paddingTop: "20px",
          "@media (min-width:576px)": {
            paddingTop: "25px",
          },
          "@media (min-width:768px)": {
            paddingTop: "30px",
          },
          "@media (min-width:992px)": {
            paddingTop: "35px",
          },
          "@media (min-width:1400px)": {
            paddingTop: "40px",
          },
        },
        ".padding-b-40": {
          paddingBottom: "20px",
          "@media (min-width:576px)": {
            paddingBottom: "25px",
          },
          "@media (min-width:768px)": {
            paddingBottom: "30px",
          },
          "@media (min-width:992px)": {
            paddingBottom: "35px",
          },
          "@media (min-width:1400px)": {
            paddingBottom: "40px",
          },
        },
        ".padding-s-40": {
          paddingLeft: "20px",
          "@media (min-width:576px)": {
            paddingLeft: "25px",
          },
          "@media (min-width:768px)": {
            paddingLeft: "30px",
          },
          "@media (min-width:992px)": {
            paddingLeft: "35px",
          },
          "@media (min-width:1400px)": {
            paddingLeft: "40px",
          },
        },
        ".padding-e-40": {
          paddingRight: "20px",
          "@media (min-width:576px)": {
            paddingRight: "25px",
          },
          "@media (min-width:768px)": {
            paddingRight: "30px",
          },
          "@media (min-width:992px)": {
            paddingRight: "35px",
          },
          "@media (min-width:1400px)": {
            paddingRight: "40px",
          },
        },
        ".padding-all-40": {
          padding: "20px",
          "@media (min-width:576px)": {
            padding: "25px",
          },
          "@media (min-width:768px)": {
            padding: "30px",
          },
          "@media (min-width:992px)": {
            padding: "35px",
          },
          "@media (min-width:1400px)": {
            padding: "40px",
          },
        },
        ".padding-all-32": {
          padding: "16px",
          "@media (min-width:576px)": {
            padding: "28px",
          },
          "@media (min-width:768px)": {
            padding: "20px",
          },
          "@media (min-width:992px)": {
            padding: "24px",
          },
          "@media (min-width:1400px)": {
            padding: "32px",
          },
        },
        ".padding-t-32": {
          paddingTop: "16px",
          "@media (min-width:576px)": {
            paddingTop: "28px",
          },
          "@media (min-width:768px)": {
            paddingTop: "20px",
          },
          "@media (min-width:992px)": {
            paddingTop: "24px",
          },
          "@media (min-width:1400px)": {
            paddingTop: "32px",
          },
        },
        ".padding-b-32": {
          paddingBottom: "16px",
          "@media (min-width:576px)": {
            paddingBottom: "28px",
          },
          "@media (min-width:768px)": {
            paddingBottom: "20px",
          },
          "@media (min-width:992px)": {
            paddingBottom: "24px",
          },
          "@media (min-width:1400px)": {
            paddingBottom: "32px",
          },
        },
        ".padding-s-32": {
          paddingLeft: "16px",
          "@media (min-width:576px)": {
            paddingLeft: "28px",
          },
          "@media (min-width:768px)": {
            paddingLeft: "20px",
          },
          "@media (min-width:992px)": {
            paddingLeft: "24px",
          },
          "@media (min-width:1400px)": {
            paddingLeft: "32px",
          },
        },
        ".padding-e-32": {
          paddingRight: "16px",
          "@media (min-width:576px)": {
            paddingRight: "28px",
          },
          "@media (min-width:768px)": {
            paddingRight: "20px",
          },
          "@media (min-width:992px)": {
            paddingRight: "24px",
          },
          "@media (min-width:1400px)": {
            paddingRight: "32px",
          },
        },
        ".padding-x-24": {
          paddingLeft: "14px",
          paddingRight: "14px",
          "@media (min-width:576px)": {
            paddingLeft: "16px",
            paddingRight: "16px",
          },
          "@media (min-width:768px)": {
            paddingLeft: "18px",
            paddingRight: "18px",
          },
          "@media (min-width:992px)": {
            paddingLeft: "20px",
            paddingRight: "20px",
          },
          "@media (min-width:1400px)": {
            paddingLeft: "24px",
            paddingRight: "24px",
          },
        },
        ".gap-40px": {
          gap: "20px",
          "@media (min-width:576px)": {
            gap: "25px",
          },
          "@media (min-width:768px)": {
            gap: "30px",
          },
          "@media (min-width:992px)": {
            gap: "35px",
          },
          "@media (min-width:1400px)": {
            gap: "40px",
          },
        },
        ".gap-32px": {
          gap: "16px",
          "@media (min-width:576px)": {
            gap: "28px",
          },
          "@media (min-width:768px)": {
            gap: "20px",
          },
          "@media (min-width:992px)": {
            gap: "24px",
          },
          "@media (min-width:1400px)": {
            gap: "32px",
          },
        },

        ".theme-transition-3": {
          transition: "all 0.3s ease-in-out",
        },
        ".theme-transition-4": {
          transition: "all 0.4s ease-in-out",
        },
        ".theme-transition-6": {
          transition: "all 0.6s ease-in-out",
        },
        ".theme-transition-8": {
          transition: "all 0.8s ease-in-out",
        },
      });
    }),
  ],
};
export default config;
