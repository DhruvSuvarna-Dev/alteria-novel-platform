import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070D",
        foreground: "#E2E8F0",
        navy: {
          900: "#0A0E17",
          800: "#111827",
          700: "#1E293B",
        },
        violet: {
          primary: "#8B5CF6",
          dark: "#7C3AED",
          light: "#A78BFA",
        },
        cyan: {
          primary: "#06B6D4",
          light: "#22D3EE",
        },
        gold: {
          primary: "#F59E0B",
          light: "#FBBF24",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-navy': 'linear-gradient(to bottom, #05070D, #0A0E17)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
