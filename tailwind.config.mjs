/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["'Montserrat Alternates'", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#161616", // Example primary color (Blue-800)
        secondary: "#A71B10", // Example secondary color (Purple-600)
        accent: "#F59E0B", // Example accent color (Amber-500)
      },
    },
  },
  plugins: [],
};
