// postcss.config.cjs
module.exports = {
  plugins: {
    // new adapter required by recent Tailwind versions
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};