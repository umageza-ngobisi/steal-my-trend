/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        card: "#121212",
        primary: {
          DEFAULT: "#00f2ff", // Cyan
          purple: "#bc13fe", // Neon Purple
          lime: "#39ff14", // Neon Lime
        },
        accent: {
          cyan: "#00f2ff",
          purple: "#bc13fe",
          lime: "#39ff14",
        },
        muted: {
          DEFAULT: "#a1a1aa",
          foreground: "#71717a",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 242, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 242, 255, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
