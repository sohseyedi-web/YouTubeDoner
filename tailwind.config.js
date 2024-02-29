export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mono: ["Kode Mono"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  darkMode: "selector",
};
