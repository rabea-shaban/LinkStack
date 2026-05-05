export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        glass: '0 40px 120px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        'soft-gradient':
          'radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 18%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.14), transparent 14%)',
      },
    },
  },
  plugins: [],
};
