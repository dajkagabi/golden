// tailwind.config.js – ha "type": "module" szerepel a package.json-ben
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "chinese-red": {
          50: "#fef2f2",
          600: "#dc2626",
          900: "#7f1d1d",
        },
        "chinese-gold": {
          50: "#fffbeb",
          500: "#f59e0b",
          900: "#78350f",
        },
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.95' },
        },
        waveSlow: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
        'wave-slow': 'waveSlow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
