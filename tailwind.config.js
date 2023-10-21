/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        custom: "0px 50px 50px 0px"
      },

      backgroundImage: {
        gradient:
          "linear-gradient(180deg, #F5F5F5 0%, rgba(245, 245, 245, 0.00) 100%)",
        bgImage: "url('/public/hero-bg.svg')"
      }
    }
  },
  plugins: []
};
