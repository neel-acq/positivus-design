import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        body: ['20px', { lineHeight: '28px' }], // 👈 Figma match
      },
    },
  },
  plugins: [],
};

export default config;
