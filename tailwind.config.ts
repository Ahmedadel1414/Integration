import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      backgroundColor: {
        primary: "#0e4ba1",
        secondary: "#3ab5b5",
        danger: "",
      },
      colors: {
        primary: "#0e4ba1",
        secondary: "#3ab5b5",
        danger: "",
      },
      textColor: {},
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
        cen_mt: ["var(--font-cen_mt)", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
} satisfies Config;
