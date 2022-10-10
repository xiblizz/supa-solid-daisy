module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ["night"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
