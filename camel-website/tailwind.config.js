/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #BB86FC, #f0f0f0, #03DAC6, #cecece)",
        "custom-gradient":
          "linear-gradient(to right, #BB86FC,#cecece, #03DAC6 )",
      },
      colors: {
        background: "#121212",
        background2: "#bb86fc4f",
        "primary-text": "#f0f0f0",
        "secondary-text": "#cecece",
        accent: "#BB86FC",
        highlight: "#03DAC6",
      },
    },
  },
  plugins: [],
};
