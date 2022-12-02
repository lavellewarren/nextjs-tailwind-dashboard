/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "content-white": "rgba(255, 255, 255, 0.7)",
        progress: "rgba(255, 255, 255, 0.18)",
      },
      backgroundImage: {
        "main-gradient":
          "linear-gradient(112.42deg, #2723E2 7.74%, #AF09D9 90.58%)",
        "shadow-gradient":
          "linear-gradient(112.76deg, #2723E2 7.83%, #AF09D9 52.35%), linear-gradient(112.42deg, #2723E2 7.74%, #AF09D9 90.58%)",
        "member-gradient":
          "linear-gradient(150.31deg, rgba(38, 12, 60, 0.8) 28.34%, rgba(45, 47, 103, 0.2) 106.35%)",
        "pad-gradient":
          "linear-gradient(112.42deg, rgba(175, 9, 217, 0.3) 7.74%, rgba(175, 9, 217, 0.03) 90.58%)",
        "text-gradient":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), linear-gradient(125.07deg, rgba(39, 35, 226, 0.59) 12.86%, #AF09D9 41.24%)",
      },
      fontFamily: {
        h1: "Open Sans",
        h2: "Rubik",
        h3: "Rubik",
        h4: "Rubik",
        body: "Rubik",
        burger: "Rubik",
        "sub-burger": "Rubik",
        "content-burger": "Rubik",
        primary: "Rubik",
      },
      dropShadow: {
        hover: "0px 1px 32px rgba(225, 105, 255, 0.3)",
        secondary: "0px 0px 200px rgba(175, 9, 217, 0.3)",
      },
      boxShadow: {
        sol: "0 0 20px #AF09D9",
      },
    },
    fontSize: {
      body: ["16px", "16px"],
      h4: ["24px", "28px"],
      h3: ["30px", "36px"],
      h2: ["48px", "57px"],
      h1: ["64px", "87px"],
      "title-1": ["20px", "24px"],
      "title-2": ["18px", "24px"],
      "title-3": ["16px", "22px"],
      "sub-1": ["16px", "24px"],
      "sub-2": ["14px", "16px"],
      "sub-3": ["12px", "14px"],
      content: ["16px", "20px"],
      sol: ["24px", "24px"],
      price: ["60px", "72px"],
    },

    boxShadow: {
      primary: "0px 0px 12px #9747FF",
      secondary: "0px 0px 12px #9747FF, inset 0px 3px 3px rgba(0, 0, 0, 0.25)",
      focus: "0px 0px 2px #FFFFFF",
      member: "inset 0px 0px 15px 15px rgba(0, 0, 0, 0.25)",
    },
    spacing: {
      0: "0px",
      px: "1px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      18: "4.5rem",
      20: "5rem",
      22.5: "5.625rem",
      23: "5.75rem",
      24: "6rem",
      25: "6.25rem",
      27.5: "6.875rem",
      28: "7rem",
      32: "8rem",
      35.75: "8.9375rem",
      36: "9rem",
      36.5: "9.125rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      49: "12.25rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      70: "17.5rem",
      71: "17.875rem",
      72: "18rem",
      75: "18.75rem",
      79.5: "19.875rem",
      80: "20rem",
      87: "21.75rem",
      88: "22rem",
      96: "24rem",
      105: "26.25rem",
      165: "41.25rem",
      178.5: "44.625rem",
      223.5: "55.875rem",
    },
    screens: {
      ssm: "377px",
      sm: "834px",
      md: "1440px",
    },
    container: {
      padding: {
        // DEFAULT: "1rem",
        md: "10rem",
        sm: "2.5rem",
      },
    },
  },
  plugins: [],
};