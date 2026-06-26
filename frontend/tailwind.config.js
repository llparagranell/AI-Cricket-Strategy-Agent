import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#618764',
        secondary: '#2B5748',
        accent: '#9CB080',
        background: '#273338',
        text: '#FFFFFF',
        muted: 'rgba(255,255,255,0.75)',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Raleway', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(156, 176, 128, 0.16)',
        glass: '0 24px 80px rgba(0, 0, 0, 0.24)',
      },
      backgroundImage: {
        'app-radial':
          'radial-gradient(circle at top left, rgba(156,176,128,0.2), transparent 34%), radial-gradient(circle at 85% 10%, rgba(97,135,100,0.22), transparent 30%)',
      },
    },
  },
  plugins: [forms],
};
