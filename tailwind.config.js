export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#030712',
        surface: '#111827',
        primary: '#3B82F6',
        secondary: '#60A5FA',
        accent: '#38BDF8',
        text: '#F9FAFB',
      },
      boxShadow: {
        glow: '0 30px 80px rgba(59, 130, 246, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
