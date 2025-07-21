/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // ... other paths
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.05)', opacity: '0.3' },
        }
      },
      animation: {
        'pulse-slow': 'pulse-slow 20s infinite ease-in-out', // Adjust duration as desired
      },
      dropShadow: {
        'neon': '0 0 10px rgba(0,255,255,0.7), 0 0 20px rgba(128,0,128,0.7)',
      },
      boxShadow: {
        'inner-glow': 'inset 0 0 15px rgba(0,255,255,0.1), inset 0 0 30px rgba(128,0,128,0.1)',
        'cyan-neon': '0 0 8px rgba(0,255,255,0.7), 0 0 15px rgba(0,255,255,0.5)',
      },
    },
  },
  plugins: [],
}