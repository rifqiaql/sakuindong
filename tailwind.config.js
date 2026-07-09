/** @type {import('tailwindcss').Config} */
module.exports = {
  // Pastikan deteksi menjangkau subfolder di dalam dist/pages/
  content: ["./dist/*.html", "./dist/**/*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    // Pastikan baris ini tertulis
    require("@egoist/tailwindcss-icons"),
  ],
};
