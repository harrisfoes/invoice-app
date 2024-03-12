/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        "purple-1": "hsl(252,94%,67%)",
        "purple-2": "hsl(252,100%,73%)",
        "blue-3": "hsl(233,31%,17%)",
        "blue-4": "hsl(233,30%,21%)",
        "white-5": "hsl(231,73%,93%)",
        "gray-6": "hsl(231,20%,61%)",
        "blue-7": "hsl(231,37%,63%)",
        "black-8": "hsl(288,29%,7%)",
        "red-8": "hsl(0,80%,63%)",
        "rose-10": "hsl(0,100%,80%)",
        "white-11": "hsl(240,27%,98%)",
        "black-12": "hsl(233,30%,11%)",
        "green-paid": "rgb(51,214,159)",
        "orange-pending": "#FF8F00",
      },
    },
  },
  plugins: [],
};
