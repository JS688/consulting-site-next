/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "rgb(245,197,24)",
      },
      keyframes: {
        paintIn: {
          "0%": {
            opacity: "0",
            filter: "blur(12px)",
            transform: "translateY(40px)",
          },
          "60%": {
            opacity: "0.7",
            filter: "blur(4px)",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0px)",
            transform: "translateY(0)",
          },
        },
        goldSweep: {
          "0%": {
            transform: "translateX(-120%)",
            opacity: "0",
          },
          "20%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(120%)",
            opacity: "0",
          },
        },
        dividerSlide: {
          "0%": {
            width: "0%",
            opacity: "0",
          },
          "60%": {
            width: "100%",
            opacity: "1",
          },
          "100%": {
            width: "100%",
            opacity: "1",
          },
        },
        dividerPulse: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.4",
          },
        },
      },
      animation: {
        paintIn: "paintIn 1.4s ease-out forwards",
        goldSweep: "goldSweep 1.8s ease-out",
        dividerSlide: "dividerSlide 1.2s ease-out forwards",
        dividerPulse: "dividerPulse 2.4s ease-in-out infinite",
      },
      maxWidth: {
        "content": "1100px",
      },
    },
  },
  plugins: [],
};