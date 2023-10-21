/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "footer-desktop": "url('/assets/desktop/image-footer.jpg')",
        "footer-tablet": "url('/assets/tablet/image-footer.jpg')",
        "footer-mobile": "url('/assets/mobile/image-footer.jpg')",
      }),
    },
  },
  plugins: [],
};
