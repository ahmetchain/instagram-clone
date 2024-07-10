/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-login":
          "url('https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk')",
      },
      colors: {
        "disabled": "#4cb5f9",
        "login": "#0095f6",
        "facebook" : "#385185"
      },
    },
  },
  plugins: [],
};
