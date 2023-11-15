/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["GeistVF"],
        serif: ["GeistVF"],
        mono: ["GeistMonoVF"],
      },
      colors: {
        primary: "#ff79c6",
        secondary: "#bd93f9",
        accent: "#8be9fd",
        info: "#6272a4",
        hint: "#ffb86c",
        success: "#50fa7b",
        warning: "#ff5555",
        // A slightly darker white
        bglight: "#f8f8f2",
        // A slate gray background
        bgdark: "#282a36",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
