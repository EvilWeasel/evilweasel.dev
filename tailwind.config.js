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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
