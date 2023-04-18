import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Nunito", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
