module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', 
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        grad: "linear-gradient(to bottom right, #818cf8, #ec4899, #ef4444)", // bg-grad
        dark: "linear-gradient(to bottom right, #111827, #000)",              // dark:bg-dark
      },
      colors: {
        btn: "#ffffff",
        "btn-dark": "#1f2937",
        text: "#1f2937",
        "text-dark": "#ffffff",
      },
    },
  },
  plugins: [],
};
