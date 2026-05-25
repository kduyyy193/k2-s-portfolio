/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        morph: {
          '0%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
          '100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
