import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'table': '640px',
      'laptop': '1040px',
      'desktop': '1280px'
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "letter-grey": "#8D8D8B",
        "stroke-line": "#8B8484",
        "yellow-cta": "#F6C114",
        "black-text": "1E1E1E"
      },
      fontFamily: {
        "bebas-neue": ['Bebas Neue', 'sans-serif'],
        "montserrat": ['Montserrat', 'sans-serif'],
        "inter": ['Inter', 'sans-serif']
      },
      boxShadow: {
        'text-custom': '0 4px 4px rgba(0, 0, 0, 0.25)', 
      },
    },
  },
  plugins: [],
} satisfies Config;
